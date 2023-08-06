import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import SpeeddocsLogo from '@site/static/img/run-man.svg';

interface Card {
	title: string;
	subtitle?: string;
	img?: string;
	link: string;
}

const cards: Card[] = [
	{
		title: 'Guides',
		subtitle: 'Our nicely written guides for test game',
		link: '/docs/guides',
	},
	{
		title: 'Resources',
		subtitle: 'Speedrun Mods, Save Files, Splits',
		link: '/docs/resources',
	},
	{
		title: 'Leaderboards',
		subtitle: 'speedrun.com/Game',
		link: 'https://speedrun.com/',
	},
	{
		title: 'Discord',
		subtitle: 'Talk about new strategies or ask for help in the Discord!',
		link: 'https://discord.gg/',
	},
];

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title}>
			<main>
				<div className={styles.homepageContainer}>
					<header className={styles.header}>
						<SpeeddocsLogo />
						{/* <img src={SpeeddocsLogo} alt="Speeddocs logo" /> */}
						<h1 className={styles.title}>{siteConfig.title} Speedrun Docs</h1>
					</header>
					<div className={styles.cards}>
						{cards.map((card, i) => (
							<Link
								key={card.title}
								href={card.link}
								className={styles.card}
								style={{ '--animation-order': i } as React.CSSProperties}
							>
								<h2>{card.title}</h2>
								<p>{card.subtitle}</p>
							</Link>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
