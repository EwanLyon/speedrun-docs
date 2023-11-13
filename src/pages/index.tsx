import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import SpeeddocsLogo from "@site/static/img/run-man.svg";

import speedrunDocsConfig from "../../speedrun-docs.json";

interface Card {
	title: string;
	subtitle?: string;
	img?: string;
	link: string;
}

const cards: Card[] = [
	{
		title: "Guides",
		subtitle: "Our nicely written guides for test game",
		link: "/docs/guides",
	},
	{
		title: "Resources",
		subtitle: "Mods, Save Files, Splits",
		link: "/docs/resources",
	},
];

if (speedrunDocsConfig["speedrun.com"]) {
	cards.push({
		title: "Leaderboards",
		subtitle: `speedrun.com/${speedrunDocsConfig["speedrun.com"].split("/").at(-1)}`,
		link: speedrunDocsConfig["speedrun.com"],
	});
}

if (speedrunDocsConfig.discord) {
	cards.push({
		title: "Discord",
		subtitle: "Talk about new strategies or ask for help!",
		link: speedrunDocsConfig.discord,
	});
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title}>
			<main>
				<div className={styles.homepageContainer}>
					<header className={styles.header}>
						<SpeeddocsLogo />
						<h1 className={styles.title}>{siteConfig.title} Speedrun Docs</h1>
					</header>
					<div className={styles.cards}>
						{cards.map((card, i) => (
							<Link
								key={card.title}
								href={card.link}
								className={styles.card}
								style={{ "--animation-order": i } as React.CSSProperties}
							>
								<div className={styles.cardTitle}>
									<h2>{card.title}</h2>
								</div>
								<p>{card.subtitle}</p>
							</Link>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
