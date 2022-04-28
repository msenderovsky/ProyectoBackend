const admin = require("firebase-admin");
const serviceAccount = require("./e-commerce-27e4b-firebase-adminsdk-b1ty9-2cc79cf047.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://e-commerce-27e4b.firebaseio.com'
});