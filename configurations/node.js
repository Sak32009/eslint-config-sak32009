module.exports = {
  // PLUGIN: n

  // require error handling in callbacks
  // n/handle-callback-err
  // ensure Node.js-style error-first callback pattern is followed
  // n/no-callback-literal
  // disallow new operators with calls to require
  'n/no-new-require': 2,
  // disallow string concatenation with __dirname and __filename
  'n/no-path-concat': 2,
  // disallow the use of process.exit()
  'n/no-process-exit': 2,
  // require return statements after callbacks
  // n/callback-return
  // enforce either module.exports or exports
  'n/exports-style': 2,
  // enforce the style of file extensions in import declarations
  // n/file-extension-in-import
  // require require() calls to be placed at top-level module scope
  'n/global-require': 2,
  // disallow require calls to be mixed with regular variable declarations
  // n/no-mixed-requires
  // disallow the use of process.env
  // n/no-process-env
  // disallow specified modules when loaded by import declarations
  // n/no-restricted-import
  // disallow specified modules when loaded by require
  // n/no-restricted-require
  // disallow synchronous methods
  'n/no-sync': 2,
  // enforce either Buffer or require("buffer").Buffer
  'n/prefer-global/buffer': 2,
  // enforce either console or require("console")
  // n/prefer-global/console
  // enforce either process or require("process")
  'n/prefer-global/process': 2,
  // enforce either TextDecoder or require("util").TextDecoder
  // n/prefer-global/text-decoder
  // enforce either TextEncoder or require("util").TextEncoder
  // n/prefer-global/text-encoder
  // enforce either URLSearchParams or require("url").URLSearchParams
  // n/prefer-global/url-search-params
  // enforce either URL or require("url").URL
  // n/prefer-global/url
  // enforce require("dns").promises
  // n/prefer-promises/dns
  'n/prefer-promises/fs': 2,

  // PLUGIN: n/recommended
  // disallow unsupported ECMAScript syntax on the specified version
  'n/no-unsupported-features/es-syntax': [2, { ignores: ['modules', 'dynamicImport'] }],

  // disallow import declarations which import private modules
  'n/no-unpublished-import': 0,
  // disallow require() expressions which import private modules
  'n/no-unpublished-require': 0,

  // because of eslint import plugin
  'n/no-missing-import': 0,
};
