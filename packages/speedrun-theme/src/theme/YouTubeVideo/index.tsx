import React from "react";

import styles from "./styles.module.css";

type YouTubeVideoProps = {
	url: string;
	alt?: string;
};

const YouTubeVideo = (props: YouTubeVideoProps) => {
	return (
		<div className={styles.videoWrapper}>
			<iframe
				className={styles.video}
				src={props.url}
				title={props.alt}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		</div>
	);
};

export default YouTubeVideo;
