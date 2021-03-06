module.exports = {
  // PLUGIN: unicorn

  // enforce correct Error subclassing.
  // unicorn/custom-error-definition
  // eisallow identifiers starting with new or class.
  // unicorn/no-keyword-prefix
  // disallow unsafe regular expressions.
  'unicorn/no-unsafe-regex': 2,
  // disallow unused object properties.
  'unicorn/no-unused-properties': 2,
  // prefer .at() method for index access and String#charAt().
  // unicorn/prefer-at
  // Prefer EventTarget over EventEmitter.
  // unicorn/prefer-event-target
  // prefer reading a JSON file as a buffer.
  // unicorn/prefer-json-parse-buffer
  // prefer String#replaceAll() over regex searches with the global flag.
  // unicorn/prefer-string-replace-all
  // enforce using the targetOrigin argument with window.postMessage().
  // unicorn/require-post-message-target-origin
  // enforce better string content.
  // unicorn/string-content

  // PLUGIN: unicorn/recommended

  // prefer JavaScript modules (ESM) over CommonJS.
  'unicorn/prefer-module': 0,
  // prefer export…from when re-exporting.
  'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
};
