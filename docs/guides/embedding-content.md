---
sidebar_position: 3
---

# Embedding Content

## Images

1. Add the image to the `static` folder at the root directory.
2. Add `![Title of image](../../static/<path to file>)`.

Example:

`![Speedrun Docs Logo](../../static/img/run-man.svg)`
![Speedrun Docs Logo](../../static/img/run-man.svg)

:::tip Speedrun Docs Logo

Feel free to modify and customise the logo to your desired game! An example can be seen in the [Heavenly Bodies Docs](https://ewanlyon.github.io/HeavenlyBodies-SpeedrunDocs/).

:::

## Videos

Videos are crucial in teaching speedruns. Here's how to link to different places

### YouTube

<iframe
 width="560"
 height="315"
 src="https://www.youtube.com/embed/DI8vHDrvJGc?si=4JCqDWWTJC98VlQN&start=943"
 title="YouTube video player"
 frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 allowfullscreen
/>

1. Click on "share".
2. Select "embed".
3. Paste the text in the markdown file.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/DI8vHDrvJGc?si=4JCqDWWTJC98VlQN&start=943"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
/>
```

### Making it the full width of the page

The iframe sets a pixel width and height. This is not ideal for modern day browsing as browsers can be different sizes.

This requires a bit more HTML but just a few modifications.

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
  <iframe
    style={{ position: "absolute" }}
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/DI8vHDrvJGc?si=4JCqDWWTJC98VlQN&start=943"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</div>

```jsx
// highlight-next-line
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 16 }}>
  <iframe
// highlight-start
    style={{ position: "absolute" }}
    width="100%"
    height="100%"
// highlight-end
    src="https://www.youtube.com/embed/DI8vHDrvJGc?si=4JCqDWWTJC98VlQN&start=943"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
// highlight-next-line
</div>
```

:::warning JSX in Markdown

This method is slightly annoying as we are forced to use JSX in a normal Markdown file because MDX (which renders both standard Markdown (.md) and Markdown Expression (.mdx)) requires the use of JSX style in-line CSS.

This can upset text editors or make code highlighting look strange.

If you want you can convert the file into a Markdown Expression file which has native support for JSX in markdown by changing the file extension from .md to .mdx

:::
