import type { Node } from "unist";

// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/utils/index.ts#L24
export function transformNode<NewNode extends Node>(node: Node, newNode: NewNode): NewNode {
	Object.keys(node).forEach((key) => {
		// @ts-expect-error: unsafe but ok
		delete node[key];
	});
	Object.keys(newNode).forEach((key) => {
		// @ts-expect-error: unsafe but ok
		node[key] = newNode[key];
	});
	return node as NewNode;
}
