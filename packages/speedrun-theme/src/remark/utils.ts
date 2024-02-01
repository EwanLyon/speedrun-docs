import type { Node } from "unist";

interface ExtendedNode extends Node {
	[key: string]: any
}

// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/utils/index.ts#L24
export function transformNode<NewNode extends ExtendedNode>(node: ExtendedNode, newNode: NewNode): NewNode {
	Object.keys(node).forEach((key) => {
		delete node[key];
	});

	Object.keys(newNode).forEach((key) => {
		node[key] = newNode[key];
	});

	return node as NewNode;
}
