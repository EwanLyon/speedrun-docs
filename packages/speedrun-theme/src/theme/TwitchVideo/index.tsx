import React from "react";
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";

import styles from "./styles.module.css";

export type TwitchVideoType = "clip" | "channel" | "vod";

type TwitchProps = {
	slug: string;
	type: TwitchVideoType;
	alt?: string;
	startTime?: string; // 0h0m0s
	parents?: string[]; // Twitch's annoying parent property https://dev.twitch.tv/docs/embed/video-and-clips/
};

const TwitchVideo = (props: TwitchProps) => {
	const isBrowser = useIsBrowser();
	const parent = props.parents ?? [];

	if (isBrowser) {
		parent.push(window.location.hostname);
	}

	let videoURL: string;

	switch (props.type) {
		case "channel":
			videoURL = `https://player.twitch.tv/?channel=${props.slug}`;
			break;
		case "clip":
			videoURL = `https://clips.twitch.tv/embed?clip=${props.slug}`;
			break;
		case "vod":
			videoURL = `https://player.twitch.tv/?video=${props.slug}&autoplay=false`;
			break;
		default:
			// Unknown type
			return <></>;
	}

	videoURL += `&parent=${parent.join(",")}`;

	if (props.startTime) {
		videoURL += `&t=${props.startTime}`;
	}

	return (
		<div className={styles.videoWrapper}>
			<iframe className={styles.video} title={props.alt} src={videoURL} allowFullScreen />
		</div>
	);
};

export default TwitchVideo;
