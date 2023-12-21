module.exports = function (api) {
  api.cache(true);

  const presets = ["babel-preset-expo"];
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "^~(.+)": "./src/\\1",
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".json",
          ".tsx",
          ".ts",
          ".native.js",
        ],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
