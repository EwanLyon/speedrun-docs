/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
// import Image from '@theme/IdealImage';
import FavouriteIcon from "../FavouriteIcon/favourite-icon";
import { Tags, TagList, type TagType, type Website, type Tag } from "../../../../data/showcase-data";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const TagComp = React.forwardRef<HTMLLIElement, Tag>(({ label, color, description }, ref) => (
	<li ref={ref} className={styles.tag} title={description}>
		<span className={styles.textLabel}>{label.toLowerCase()}</span>
		<span className={styles.colorLabel} style={{ backgroundColor: color }} />
	</li>
));

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
	const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

	// Keep same order for all tags
	const tagObjectsSorted = tagObjects.sort((a, b) => TagList.indexOf(a.tag) - TagList.indexOf(b.tag));

	return (
		<>
			{tagObjectsSorted.map((tagObject, index) => {
				const id = `showcase_card_tag_${tagObject.tag}`;

				return <TagComp key={index} {...tagObject} />;
			})}
		</>
	);
}

function getCardImage(user: Website): string {
	return (
		(user.preview as any)?.default ??
		`https://slorber-api-screenshot.netlify.app/${encodeURIComponent(user.website)}/showcase`
	);
}

function ShowcaseCard({ user }: { user: Website }) {
	const image = getCardImage(user);
	return (
		<li key={user.title} className="card shadow--md">
			<div className={clsx("card__image", styles.showcaseCardImage)}>
				<img src={image} alt={user.title} />
			</div>
			<div className="card__body">
				<div className={clsx(styles.showcaseCardHeader)}>
					<Heading as="h4" className={styles.showcaseCardTitle}>
						<Link href={user.website} className={styles.showcaseCardLink}>
							{user.title}
						</Link>
					</Heading>
					{user.tags.includes("favourite") && <FavouriteIcon svgClass={styles.svgIconFavorite} size="small" />}
					{user.source && (
						<Link href={user.source} className={clsx("button button--primary button--sm", styles.showcaseCardSrcBtn)}>
							<Translate id="showcase.card.sourceLink">source</Translate>
						</Link>
					)}
				</div>
				<p className={styles.showcaseCardBody}>{user.description}</p>
			</div>
			<ul className={clsx("card__footer", styles.cardFooter)}>
				<ShowcaseCardTag tags={user.tags} />
			</ul>
		</li>
	);
}

export default React.memo(ShowcaseCard);
