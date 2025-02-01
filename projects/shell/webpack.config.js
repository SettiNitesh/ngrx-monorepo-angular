const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

import { environment } from "./src/environments/environment";

module.exports = withModuleFederationPlugin({
  name: "shell",

  exposes: {
    "./Component": "./projects/shell/src/app/app.component.ts",
  },

  remotes: {
    mfe: `${environment.urls.mfe}/remoteEntry.js`,
    "akita-counter": `${environment.urls.akitaCounter}/remoteEntry.js`,
    flights: `${environment.urls.flights}/remoteEntry.js`,
    hospital: `${environment.urls.hospital}/remoteEntry.js`,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
