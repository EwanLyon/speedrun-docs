type YouTubeEmbedProps = {
	videoID: string;
	height?: number;
	width?: number;
};

export const YouTubeEmbed: React.FunctionComponent<YouTubeEmbedProps> = (props) => {
	let width = props.width ?? 560;
	let height = props.height ?? 315;

	if (typeof props.width !== "undefined" && typeof props.height === "undefined") {
		// Width set but not height
		height = (width / 16) * 9;
	} else if (typeof props.height !== "undefined" && typeof props.width === "undefined") {
		// Height set but not width
		width = (height / 9) * 16;
	}

	return (
		<iframe
			width={props.width ?? 560}
			height={props.height ?? 315}
			style={{ margin: "auto" }}
			src={`https://www.youtube.com/embed/${props.videoID}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
};
