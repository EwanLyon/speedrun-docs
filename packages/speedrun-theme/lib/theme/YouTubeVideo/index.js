import React from "react";
import styles from "./styles.module.css";
const YouTubeVideo = (props) => {
    return (React.createElement("div", { className: styles.videoWrapper },
        React.createElement("iframe", { className: styles.video, src: props.url, title: props.alt, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })));
};
export default YouTubeVideo;
