import type { Plugin } from "@docusaurus/types";
import videoLinkerRemark from "./remark/video-linker";

export default function themeSpeedrun(): Plugin<void> {
	return {
		name: "speedrun-docs-theme",

		getThemePath() {
			return "../lib/theme";
		},
		getTypeScriptThemePath() {
			return "../src/theme";
		},
		getClientModules() {
			return [require.resolve("./css/custom.css")];
		},
	};
}

export { validateThemeConfig } from "./validateThemeConfig";

export { videoLinkerRemark };
