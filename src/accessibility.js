const JSDOM = require('jsdom').JSDOM

module.exports = function (content) {
  // Based on https://github.com/dequelabs/axe-core/tree/develop/doc/examples/jsdom
  const { window } = new JSDOM(content)

  // TODO: Is it possible to run this in a VM to avoid polluting the global scope?
  global.document = window.document
  global.window = window

  // needed by axios lib/helpers/isURLSameOrigin.js
  global.navigator = window.navigator

  // needed by axe /lib/core/public/run.js
  global.Node = window.Node
  global.NodeList = window.NodeList

  // needed by axe /lib/core/base/context.js
  global.Element = window.Element
  global.Document = window.Document

  const axe = require('axe-core')
  const config = {
    rules: {
      // This rule does not work in jsdom
      'color-contrast': { enabled: false }
    }
  }

  return new Promise((resolve, reject) => {
    axe.run(window.document, config, function (err, data) {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}
