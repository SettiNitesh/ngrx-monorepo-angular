const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

// Create a wrapper function to accept environment
module.exports = (env) => {
  // Import environment file based on mode
  const environment = require(`./src/environments/environment${
    env.production ? ".prod" : ""
  }.ts`).environment;

  return withModuleFederationPlugin({
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
};
