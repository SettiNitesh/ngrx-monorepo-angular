export const PROD_ENV_URL =
  'https://settinitesh.github.io/ngrx-monorepo-angular';

export const environment = {
  production: true,
  urls: {
    mfe: `${PROD_ENV_URL}/mfe`,
    akitaCounter: PROD_ENV_URL,
    flights: PROD_ENV_URL,
    hospital: PROD_ENV_URL,
  },
};
