const chalk = require('chalk')
const { default: PQueue } = require('p-queue')
const accessibility = require('./src/accessibility')
const reporter = require('./src/reporter')
const queue = new PQueue({ concurrency: 1 })

module.exports = {
  initArguments: {},
  configFunction: function (eleventyConfig, options = {}) {
    eleventyConfig.addLinter('accessibility', async function (content, inputPath, outputPath) {
      if (!outputPath.endsWith('.html')) {
        return
      }
      try {
        // Axe blows up if you try to do too much at once.
        const results = await queue.add(() => accessibility(content))

        if (results && results.violations) {
          const formatedViolations = reporter(results.violations)
          const pass = formatedViolations.length === 0
          if (!pass) {
            console.warn(chalk.yellow(`Accessibility Linter (${inputPath}):`))
            console.error('\n' + formatedViolations + '\n')
            process.env.ELEVENTY_ACCESSIBILITY_LINTER_FAILED = true;
          }
        }
      } catch (error) {
        console.error(error)
      }
    })
  }
}
