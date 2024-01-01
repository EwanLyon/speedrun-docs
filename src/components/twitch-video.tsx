import useIsBrowser from "@docusaurus/useIsBrowser";

type TwitchProps = {
	slug: string;
	type: "clip" | "channel" | "vod";
	startTime?: string; // 0h0m0s
	parents?: string[]; // Twitch's annoying parent property https://dev.twitch.tv/docs/embed/video-and-clips/
};

export const TwitchVideo = (props: TwitchProps) => {
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
		<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "var(--ifm-leading)" }}>
			<iframe style={{ position: "absolute" }} width="100%" height="100%" src={videoURL} allowFullScreen />
		</div>
	);
};
