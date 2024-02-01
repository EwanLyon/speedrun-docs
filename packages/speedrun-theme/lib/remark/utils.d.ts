import type { Node } from "unist";
interface ExtendedNode extends Node {
    [key: string]: any;
}
export declare function transformNode<NewNode extends ExtendedNode>(node: ExtendedNode, newNode: NewNode): NewNode;
export {};
