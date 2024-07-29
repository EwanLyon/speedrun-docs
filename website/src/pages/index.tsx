import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import SpeeddocsLogo from "@site/static/img/run-man.svg";

interface Card {
	title: string;
	subtitle?: string;
	img?: string;
	link: string;
}

const cards: Card[] = [
	{
		title: "Guides",
		subtitle: "Some tutorials for how to use Speedrun-Docs",
		link: "/docs/tutorials",
	},
	{
		title: "Showcase",
		subtitle: "View Speedrun communities currently using Speedrun-Docs",
		link: "/showcase",
	},
];

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title}>
			<main className={styles.landingPage}>
				<div className={styles.homepageContainer}>
					<header className={styles.header}>
						<SpeeddocsLogo />
						<h1 className={styles.title}>Speedrun Docs</h1>
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
