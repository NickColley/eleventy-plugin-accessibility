# eleventy-plugin-accessibility

An [Eleventy](https://github.com/11ty/eleventy) plugin to check for accessibility issues in HTML using axe.

![Sample screenshot of eleventy-plugin-accessibility in action](./assets/sample-screenshot.png)

## Installation

This is an alpha package so it is not on npm yet, but you can try it out by installing it directly from GitHub

```
npm install --save-dev nickcolley/eleventy-plugin-accessibility
```

Open up your Eleventy config file (probably `.eleventy.js`) and use `addPlugin`:

```
const accessibilityPlugin = require("eleventy-plugin-accessibility");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(accessibilityPlugin);
};
```

Read more about [Eleventy plugins.](https://www.11ty.io/docs/plugins/)
