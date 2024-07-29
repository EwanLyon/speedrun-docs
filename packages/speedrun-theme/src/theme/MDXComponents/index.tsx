import MDXComponents from "@theme-init/MDXComponents";
import YouTubeVideo from "../YouTubeVideo";
import TwitchVideo from "../TwitchVideo";

import type { ComponentProps } from "react";
import type { MDXProvider } from "@mdx-js/react";

type MDXComponentsBase = ComponentProps<typeof MDXProvider>["components"];

const components: MDXComponentsBase = {
	...MDXComponents,
	YouTubeVideo,
	TwitchVideo,
};

console.log("Speedrun-Theme MDXComponents");
console.log(components);

export default components;
