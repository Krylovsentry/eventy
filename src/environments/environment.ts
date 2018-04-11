// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseCongig: {
    apiKey: 'AIzaSyD6sDS2mJgI3fFOMmXR9ALfuiltoWqfA2I',
    authDomain: 'eventy-2f92b.firebaseapp.com',
    databaseURL: 'https://eventy-2f92b.firebaseio.com',
    projectId: 'eventy-2f92b',
    storageBucket: '',
    messagingSenderId: '542426848886'
  },

  mapbox: {
    accessToken : 'pk.eyJ1Ijoia3J5bG92c2VudHJ5IiwiYSI6ImNqZnRsaW41ODBkMmozM252Z2pjM2J4aHIifQ.NwCnQfb84eUBPZ1LLBKCOg'
  }

};
