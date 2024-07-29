import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
export interface DocCardProps {
    readonly item: PropSidebarItem;
}
export default function DocCard({ item }: DocCardProps): JSX.Element;
