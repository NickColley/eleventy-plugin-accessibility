const chalk = require('chalk')

const reporter = violations => {
  if (violations.length === 0) {
    return []
  }

  const lineBreak = '\n\n'
  const newLine = '\n'
  const horizontalLine = '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500'

  return violations.map(violation => {
    const errorBody = violation.nodes.map(node => {
      const selector = node.target.join(', ')
      const expectedText = `The HTML found at $('${selector}') has accessibility issues:`
      return (
        expectedText +
        newLine +
        node.html +
        lineBreak +
        'Reason:' +
        newLine +
        chalk.red(`${violation.help} (${violation.id})`) +
        lineBreak +
        node.failureSummary +
        lineBreak +
        'You can find more information on this issue here: \n' +
        chalk.underline(violation.helpUrl)
      )
    }).join(lineBreak)

    return (errorBody)
  }).join(lineBreak + horizontalLine + lineBreak)
}

module.exports = reporter
