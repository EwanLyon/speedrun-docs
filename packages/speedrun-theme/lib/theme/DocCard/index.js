import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { findFirstSidebarItemLink, useDocById } from "@docusaurus/theme-common/internal";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
function CardContainer({ href, children, image }) {
    return (React.createElement(Link, { href: href, className: clsx("card", styles.cardContainer), style: { backgroundImage: image && `url(${image})` } }, children));
}
function CardLayout({ href, icon, title, description, customProps, }) {
    return (React.createElement(CardContainer, { href: href, image: customProps?.category_image },
        React.createElement("div", { className: clsx("padding-horiz--lg padding-bottom--md", customProps?.category_image ? styles.cardGradient : "padding-vert--lg") },
            React.createElement("h2", { className: clsx("text--truncate", styles.cardTitle), title: title }, title),
            description && (React.createElement("p", { className: clsx("text--truncate", styles.cardDescription), title: description }, description)))));
}
function CardCategory({ item }) {
    const href = findFirstSidebarItemLink(item);
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return (React.createElement(CardLayout, { href: href, icon: "\uD83D\uDDC3\uFE0F", title: item.label, description: item.description ??
            translate({
                message: "{count} items",
                id: "theme.docs.DocCard.categoryDescription",
                description: "The default description for a category card in the generated index about how many items this category includes",
            }, { count: item.items.length }) }));
}
function CardLink({ item }) {
    const icon = isInternalUrl(item.href) ? "📄️" : "🔗";
    const doc = useDocById(item.docId ?? undefined);
    return (React.createElement(CardLayout, { href: item.href, icon: icon, title: item.label, description: item.description ?? doc?.description, customProps: item.customProps }));
}
export default function DocCard({ item }) {
    switch (item.type) {
        case "link":
            return React.createElement(CardLink, { item: item });
        case "category":
            return React.createElement(CardCategory, { item: item });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}
