type YouTubeVideoProps = {
	url: string;
	alt?: string;
};

export const YouTubeVideo = (props: YouTubeVideoProps) => {
	return (
		<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "var(--ifm-leading)" }}>
			<iframe
				style={{ position: "absolute" }}
				width="100%"
				height="100%"
				src={props.url}
				title={props.alt}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		</div>
	);
};
