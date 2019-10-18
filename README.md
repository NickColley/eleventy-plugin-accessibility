# eleventy-plugin-accessibility

An [Eleventy](https://github.com/11ty/eleventy) plugin to check for accessibility issues in HTML using axe.

![Sample screenshot of eleventy-plugin-accessibility in action](./assets/sample-screenshot.png)

## Installation

Available on [npm](https://www.npmjs.com/package/@11ty/eleventy-plugin-accessibility).

```
npm install @11ty/eleventy-plugin-accessibility --save
```

Open up your Eleventy config file (probably `.eleventy.js`) and use `addPlugin`:

```
const accessibilityPlugin = require("@11ty/eleventy-plugin-accessibility");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(accessibilityPlugin);
};
```

Read more about [Eleventy plugins.](https://www.11ty.io/docs/plugins/)
