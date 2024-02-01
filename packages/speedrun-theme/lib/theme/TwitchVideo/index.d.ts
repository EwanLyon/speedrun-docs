import React from "react";
export type TwitchVideoType = "clip" | "channel" | "vod";
type TwitchProps = {
    slug: string;
    type: TwitchVideoType;
    alt?: string;
    startTime?: string;
    parents?: string[];
};
declare const TwitchVideo: (props: TwitchProps) => React.JSX.Element;
export default TwitchVideo;
