import type { Plugin } from "@docusaurus/types";
import videoLinkerRemark from "./remark/video-linker";
export default function themeSpeedrun(): Plugin<void>;
export { validateThemeConfig } from "./validateThemeConfig";
export { videoLinkerRemark };
