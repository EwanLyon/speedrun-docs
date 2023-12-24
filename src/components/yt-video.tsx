type YouTubeVideoProps = {
	videoId: string;
	startTime?: number; // In seconds
};

export const YouTubeVideo = (props: YouTubeVideoProps) => {
	let videoURL = `https://www.youtube-nocookie.com/embed/${props.videoId}`;

	if (props.startTime) {
		videoURL += `?start=${props.startTime}`;
	}

	return (
		<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "var(--ifm-leading)" }}>
			<iframe
				style={{ position: "absolute" }}
				width="100%"
				height="100%"
				src={videoURL}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		</div>
	);
};
