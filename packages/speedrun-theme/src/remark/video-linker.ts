import { transformNode } from "./utils";
import type { Transformer, Plugin } from "unified";
import type { Image } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx";
import type { Node } from "unist";
import type { TwitchVideoType } from "../theme/TwitchVideo";

const YOUTUBE_REGEX =
	/^https?:\/\/.*youtu(?:\.be\/|v\/|u\/\w\/|embed\/|(?:be\.com\/)?watch\?v=)([^#&?]*).*(?:t=([0-9]+))?.*$/;
const TWITCH_REGEX = /^https?:\/\/.*twitch\.tv\//;

function YouTubeVideo(node: Image, youtubeRegex: RegExpExecArray): MdxJsxFlowElement {
	let youtubeURL = "https://www.youtube-nocookie.com/embed/";
	if (typeof youtubeRegex[1] === "string") {
		youtubeURL += youtubeRegex[1];
	}

	const startTime = parseInt(youtubeRegex[2]);
	if (!isNaN(startTime)) {
		youtubeURL += `?t=${startTime}`;
	}

	return {
		type: "mdxJsxFlowElement",
		name: "YouTubeVideo",
		attributes: [
			{ type: "mdxJsxAttribute", name: "url", value: youtubeURL },
			{ type: "mdxJsxAttribute", name: "title", value: node.alt },
		],
		children: [],
	};
}

const TWITCH_CLIP_REGEX = /^https?:\/\/www\.twitch\.tv\/[^\/]+\/clip\/([^?]+)(?:.*t=([^&]+))?.*$/;
const TWITCH_VOD_REGEX = /^https?:\/\/.*twitch\.tv\/videos\/(\d+)(?:.*t=([^&]+))?.*$/;
const TWITCH_CHANNEL_REGEX = /^https?:\/\/.*twitch.tv\/([a-zA-Z0-9]{4,25})\/?$/;

type TwitchURLData = {
	type: TwitchVideoType;
	slug: string;
	startTime?: string;
} | null;

// Channel https://www.twitch.tv/ausspeedruns
// Clip https://www.twitch.tv/ausspeedruns/clip/MoralFlaccidWheelSpicyBoy-MzAFWAwm4ifsnB6h
// VOD https://www.twitch.tv/videos/1943701325?t=00h00m03s
function GetTwitchURLData(url: string): TwitchURLData {
	// Determine which type of url it is
	const clipRegex = TWITCH_CLIP_REGEX.exec(url);
	if (clipRegex) {
		return {
			type: "clip",
			slug: clipRegex[1],
			startTime: clipRegex[2],
		};
	}

	const vodRegex = TWITCH_VOD_REGEX.exec(url);
	if (vodRegex) {
		return {
			type: "vod",
			slug: vodRegex[1],
			startTime: vodRegex[2],
		};
	}

	const channelRegex = TWITCH_CHANNEL_REGEX.exec(url);
	if (channelRegex) {
		return {
			type: "channel",
			slug: channelRegex[1],
		};
	}

	return null;
}

function TwitchVideo(node: Image): MdxJsxFlowElement | null {
	const urlData = GetTwitchURLData(node.url);

	if (!urlData) {
		return null;
	}

	return {
		type: "mdxJsxFlowElement",
		name: "TwitchVideo",
		attributes: [
			{ type: "mdxJsxAttribute", name: "type", value: urlData.type },
			{ type: "mdxJsxAttribute", name: "slug", value: urlData.slug },
			{ type: "mdxJsxAttribute", name: "startTime", value: urlData.startTime },
		],
		children: [],
	};
}

function GetVideoNode(node: Image): Node | null | undefined {
	let newNode: Node | undefined;

	const isYouTubeVideo = YOUTUBE_REGEX.exec(node.url);
	if (isYouTubeVideo) {
		return YouTubeVideo(node, isYouTubeVideo);
	}

	const isTwitchLink = TWITCH_REGEX.exec(node.url);
	if (isTwitchLink) {
		return TwitchVideo(node);
	}

	return newNode;
}

const videoLinkerPlugin = (options: Plugin): Transformer => {
	const transformer: Transformer = async (ast, vfile) => {
		const { visit } = await import("unist-util-visit");

		visit(ast, "image", (node: Image) => {
			const newNode = GetVideoNode(node);
			if (newNode) {
				transformNode(node, newNode);
			}
		});
	};
	return transformer;
};

export default videoLinkerPlugin;
