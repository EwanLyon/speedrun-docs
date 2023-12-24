import useIsBrowser from '@docusaurus/useIsBrowser';

type TwitchProps = {
	videoId: string;
	startTime?: number; // In seconds
	parents?: string[]; // Twitch's annoying parent property https://dev.twitch.tv/docs/embed/video-and-clips/
};

export const TwitchVideo = (props: TwitchProps) => {
	const isBrowser = useIsBrowser();
	const parent = props.parents ?? [];

	if (isBrowser) {
		parent.push(window.location.hostname);
	}

	let videoURL = `https://player.twitch.tv/?video=${props.videoId}&parent=${parent.join(",")}`;

	if (props.startTime) {
		videoURL += `&time=${props.startTime}`;
	}

	return (
		<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "var(--ifm-leading)" }}>
			<iframe width="100%" height="100%" src={videoURL} allowFullScreen></iframe>
		</div>
	);
};
