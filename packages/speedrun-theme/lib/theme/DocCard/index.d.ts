/// <reference types="react" />
/// <reference types="@docusaurus/plugin-content-docs/src/plugin-content-docs.js" />
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
export interface DocCardProps {
    readonly item: PropSidebarItem;
}
export default function DocCard({ item }: DocCardProps): JSX.Element;
