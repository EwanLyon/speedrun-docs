import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { findFirstSidebarItemLink, useDocById } from "@docusaurus/theme-common/internal";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";

import type { PropSidebarItemCategory, PropSidebarItemLink, PropSidebarItem } from "@docusaurus/plugin-content-docs";

export interface DocCardProps {
	readonly item: PropSidebarItem;
}

import styles from "./styles.module.css";

function CardContainer({ href, children, image }: { href: string; children: ReactNode; image?: string }): JSX.Element {
	return (
		<Link
			href={href}
			className={clsx("card", styles.cardContainer)}
			style={{ backgroundImage: image && `url(${image})` }}
		>
			{children}
		</Link>
	);
}

function CardLayout({
	href,
	icon,
	title,
	description,
	customProps,
}: {
	href: string;
	icon: ReactNode;
	title: string;
	description?: string;
	customProps?: {
		category_image?: string;
		[key: string]: unknown;
	};
}): JSX.Element {
	return (
		<CardContainer href={href} image={customProps?.category_image}>
			<div
				className={clsx(
					"padding-horiz--lg padding-bottom--md",
					customProps?.category_image ? styles.cardGradient : "padding-vert--lg"
				)}
			>
				<h2 className={clsx("text--truncate", styles.cardTitle)} title={title}>
					{title}
				</h2>
				{description && (
					<p className={clsx("text--truncate", styles.cardDescription)} title={description}>
						{description}
					</p>
				)}
			</div>
		</CardContainer>
	);
}

function CardCategory({ item }: { item: PropSidebarItemCategory }): JSX.Element | null {
	const href = findFirstSidebarItemLink(item);

	// Unexpected: categories that don't have a link have been filtered upfront
	if (!href) {
		return null;
	}

	return (
		<CardLayout
			href={href}
			icon="🗃️"
			title={item.label}
			description={
				item.description ??
				translate(
					{
						message: "{count} items",
						id: "theme.docs.DocCard.categoryDescription",
						description:
							"The default description for a category card in the generated index about how many items this category includes",
					},
					{ count: item.items.length }
				)
			}
		/>
	);
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
	const icon = isInternalUrl(item.href) ? "📄️" : "🔗";
	const doc = useDocById(item.docId ?? undefined);
	return (
		<CardLayout
			href={item.href}
			icon={icon}
			title={item.label}
			description={item.description ?? doc?.description}
			customProps={item.customProps}
		/>
	);
}

export default function DocCard({ item }: DocCardProps): JSX.Element {
	switch (item.type) {
		case "link":
			return <CardLink item={item} />;
		case "category":
			return <CardCategory item={item} />;
		default:
			throw new Error(`unknown item type ${JSON.stringify(item)}`);
	}
}
