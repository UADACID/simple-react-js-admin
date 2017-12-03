import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDR5omCnDA18TMZSSgsjCTz0UNlLYPcZgw",
    authDomain: "fifilio-cfs.firebaseapp.com",
    databaseURL: "https://fifilio-cfs.firebaseio.com",
    projectId: "fifilio-cfs",
    storageBucket: "fifilio-cfs.appspot.com",
    messagingSenderId: "879323691932"
  };

const app = firebase.initializeApp(config);

export {
  app
}
