"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformNode = void 0;
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/utils/index.ts#L24
function transformNode(node, newNode) {
    Object.keys(node).forEach((key) => {
        delete node[key];
    });
    Object.keys(newNode).forEach((key) => {
        node[key] = newNode[key];
    });
    return node;
}
exports.transformNode = transformNode;
