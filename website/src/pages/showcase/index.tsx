import { useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Translate, { translate } from "@docusaurus/Translate";
import { useHistory, useLocation } from "@docusaurus/router";
import { usePluralForm } from "@docusaurus/theme-common";

import Layout from "@theme/Layout";
import FavouriteIcon from "./_components/FavouriteIcon/favourite-icon";
import { sortedWebsites, Tags, TagList, type Website, type TagType } from "../../data/showcase-data";
import Heading from "@theme/Heading";
import ShowcaseTagSelect, { readSearchTags } from "./_components/ShowcaseTagSelect";
import ShowcaseFilterToggle, { type Operator, readOperator } from "./_components/ShowcaseFilterToggle";
import ShowcaseCard from "./_components/ShowcaseCard";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const TITLE = "Speedrun Docs Showcase";
const DESCRIPTION = "List of speedrun documentation sites people are building with Speedrun-Docs";
const SUBMIT_URL = "https://github.com/EwanLyon/speedrun-docs/discussions/1";

type UserState = {
	scrollTopPosition: number;
	focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
	const { scrollTopPosition, focusedElementId } = userState ?? {
		scrollTopPosition: 0,
		focusedElementId: undefined,
	};
	// @ts-expect-error: if focusedElementId is undefined it returns null
	document.getElementById(focusedElementId)?.focus();
	window.scrollTo({ top: scrollTopPosition });
}

export function prepareUserState(): UserState | undefined {
	if (ExecutionEnvironment.canUseDOM) {
		return {
			scrollTopPosition: window.scrollY,
			focusedElementId: document.activeElement?.id,
		};
	}

	return undefined;
}

const SearchNameQueryKey = "name";

function readSearchName(search: string) {
	return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterUsers(websites: Website[], selectedTags: TagType[], operator: Operator, searchName: string | null) {
	if (searchName) {
		// eslint-disable-next-line no-param-reassign
		websites = websites.filter((user) => user.title.toLowerCase().includes(searchName.toLowerCase()));
	}
	if (selectedTags.length === 0) {
		return websites;
	}
	return websites.filter((user) => {
		if (user.tags.length === 0) {
			return false;
		}
		if (operator === "AND") {
			return selectedTags.every((tag) => user.tags.includes(tag));
		}
		return selectedTags.some((tag) => user.tags.includes(tag));
	});
}

function useFilteredUsers() {
	const location = useLocation<UserState>();
	const [operator, setOperator] = useState<Operator>("OR");
	// On SSR / first mount (hydration) no tag is selected
	const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
	const [searchName, setSearchName] = useState<string | null>(null);
	// Sync tags from QS to state (delayed on purpose to avoid SSR/Client
	// hydration mismatch)
	useEffect(() => {
		setSelectedTags(readSearchTags(location.search));
		setOperator(readOperator(location.search));
		setSearchName(readSearchName(location.search));
		restoreUserState(location.state);
	}, [location]);

	return useMemo(
		() => filterUsers(sortedWebsites, selectedTags, operator, searchName),
		[selectedTags, operator, searchName]
	);
}

function ShowcaseHeader() {
	return (
		<section className="margin-top--lg margin-bottom--lg text--center">
			<Heading as="h1">{TITLE}</Heading>
			<p>{DESCRIPTION}</p>
			<Link className="button button--primary" to={SUBMIT_URL}>
				🙏 Please add your speedrun docs
			</Link>
		</section>
	);
}

function useSiteCountPlural() {
	const { selectMessage } = usePluralForm();
	return (sitesCount: number) =>
		selectMessage(
			sitesCount,
			translate(
				{
					id: "showcase.filters.resultCount",
					description:
						'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
					message: "1 site|{sitesCount} sites",
				},
				{ sitesCount }
			)
		);
}

function ShowcaseFilters() {
	const filteredUsers = useFilteredUsers();
	const siteCountPlural = useSiteCountPlural();
	return (
		<section className="container margin-top--l margin-bottom--lg">
			<div className={clsx("margin-bottom--sm", styles.filterCheckbox)}>
				<div>
					<Heading as="h2">
						<Translate id="showcase.filters.title">Filters</Translate>
					</Heading>
					<span>{siteCountPlural(filteredUsers.length)}</span>
				</div>
				<ShowcaseFilterToggle />
			</div>
			<ul className={clsx("clean-list", styles.checkboxList)}>
				{TagList.map((tag, i) => {
					const { label, description, color } = Tags[tag];
					const id = `showcase_checkbox_id_${tag}`;

					return (
						<li key={i} className={styles.checkboxListItem}>
							<ShowcaseTagSelect
								tag={tag}
								id={id}
								label={label}
								icon={
									tag === "favourite" ? (
										<FavouriteIcon svgClass={styles.svgIconFavoriteXs} />
									) : (
										<span
											style={{
												backgroundColor: color,
												width: 10,
												height: 10,
												borderRadius: "50%",
												marginLeft: 8,
											}}
										/>
									)
								}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

const favouriteWebsites = sortedWebsites.filter((user) => user.tags.includes("favourite"));
const otherUsers = sortedWebsites.filter((user) => !user.tags.includes("favourite"));

function SearchBar() {
	const history = useHistory();
	const location = useLocation();
	const [value, setValue] = useState<string | null>(null);
	useEffect(() => {
		setValue(readSearchName(location.search));
	}, [location]);
	return (
		<div className={styles.searchContainer}>
			<input
				id="searchbar"
				placeholder={translate({
					message: "Search for site name...",
					id: "showcase.searchBar.placeholder",
				})}
				value={value ?? undefined}
				onInput={(e) => {
					setValue(e.currentTarget.value);
					const newSearch = new URLSearchParams(location.search);
					newSearch.delete(SearchNameQueryKey);
					if (e.currentTarget.value) {
						newSearch.set(SearchNameQueryKey, e.currentTarget.value);
					}
					history.push({
						...location,
						search: newSearch.toString(),
						state: prepareUserState(),
					});
					setTimeout(() => {
						document.getElementById("searchbar")?.focus();
					}, 0);
				}}
			/>
		</div>
	);
}

function ShowcaseCards() {
	const filteredUsers = useFilteredUsers();

	if (filteredUsers.length === 0) {
		return (
			<section className="margin-top--lg margin-bottom--xl">
				<div className="container padding-vert--md text--center">
					<Heading as="h2">
						<Translate id="showcase.usersList.noResult">No result</Translate>
					</Heading>
				</div>
			</section>
		);
	}

	return (
		<section className="margin-top--lg margin-bottom--xl">
			{filteredUsers.length === sortedWebsites.length ? (
				<>
					<div className={styles.showcaseFavorite}>
						<div className="container">
							<div className={clsx("margin-bottom--md", styles.showcaseFavoriteHeader)}>
								<Heading as="h2">
									<Translate id="showcase.favoritesList.title">Our favourites</Translate>
								</Heading>
								<FavouriteIcon svgClass={styles.svgIconFavorite} />
							</div>
							<ul className={clsx("container", "clean-list", styles.showcaseList)}>
								{favouriteWebsites.map((user) => (
									<ShowcaseCard key={user.title} user={user} />
								))}
							</ul>
						</div>
					</div>
					<div className="container margin-top--lg">
						<Heading as="h2" className={styles.showcaseHeader}>
							<Translate id="showcase.usersList.allUsers">All sites</Translate>
						</Heading>
						<ul className={clsx("clean-list", styles.showcaseList)}>
							{otherUsers.map((user) => (
								<ShowcaseCard key={user.title} user={user} />
							))}
						</ul>
					</div>
				</>
			) : (
				<div className="container">
					<div className={clsx("margin-bottom--md", styles.showcaseFavoriteHeader)} />
					<ul className={clsx("clean-list", styles.showcaseList)}>
						{filteredUsers.map((user) => (
							<ShowcaseCard key={user.title} user={user} />
						))}
					</ul>
				</div>
			)}
		</section>
	);
}

export default function Showcase(): JSX.Element {
	return (
		<Layout title={TITLE} description={DESCRIPTION}>
			<main className="margin-vert--lg">
				<ShowcaseHeader />
				<ShowcaseFilters />
				<div style={{ display: "flex", marginLeft: "auto" }} className="container">
					<SearchBar />
				</div>
				<ShowcaseCards />
			</main>
		</Layout>
	);
}
