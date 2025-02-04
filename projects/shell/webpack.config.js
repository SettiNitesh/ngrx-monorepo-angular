const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const env = require("../shell/src/environments/environment.ts").environment;

console.log("Environment:", env);

module.exports = withModuleFederationPlugin({
  name: "shell",

  exposes: {
    "./Component": "./projects/shell/src/app/app.component.ts",
  },

  remotes: {
    flights: `${env.urls.flights}/remoteEntry.js`,
    hospital: `${env.urls.hospital}/remoteEntry.js`,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
