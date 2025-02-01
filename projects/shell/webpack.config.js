const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "shell",

  exposes: {
    "./Component": "./projects/shell/src/app/app.component.ts",
  },

  remotes: {
    mfe: "http://localhost:4300/remoteEntry.js",
    "akita-counter": "http://localhost:4400/remoteEntry.js",
    flights: "http://localhost:4209/remoteEntry.js",
    hospital: "http://localhost:4500/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
