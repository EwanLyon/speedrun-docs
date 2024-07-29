import MDXComponents from "@theme-init/MDXComponents";
import YouTubeVideo from "../YouTubeVideo";
import TwitchVideo from "../TwitchVideo";
const components = {
    ...MDXComponents,
    YouTubeVideo,
    TwitchVideo,
};
console.log("Speedrun-Theme MDXComponents");
console.log(components);
export default components;
