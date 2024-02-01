import React from "react";
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";
import styles from "./styles.module.css";
const TwitchVideo = (props) => {
    const isBrowser = useIsBrowser();
    const parent = props.parents ?? [];
    if (isBrowser) {
        parent.push(window.location.hostname);
    }
    let videoURL;
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
            return React.createElement(React.Fragment, null);
    }
    videoURL += `&parent=${parent.join(",")}`;
    if (props.startTime) {
        videoURL += `&t=${props.startTime}`;
    }
    return (React.createElement("div", { className: styles.videoWrapper },
        React.createElement("iframe", { className: styles.video, title: props.alt, src: videoURL, allowFullScreen: true })));
};
export default TwitchVideo;
