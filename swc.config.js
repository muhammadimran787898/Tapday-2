// swc.config.js

module.exports = {
    jsc: {
      parser: {
        syntax: "ecmascript",
        jsx: true,
      },
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }; 