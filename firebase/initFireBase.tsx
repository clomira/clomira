// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// // const firebase = require("firebase");
// // const firebaseConfig = {
// //   apiKey: process.env.FB_API_KEY,
// //   authDomain: process.env.FB_AUTH_DOMAIN,
// //   projectId: process.env.FB_PROJECT_ID,
// //   storageBucket: process.env.FB_STORAGE_BUCKET,
// //   messagingSenderId: process.env.FB_MESSAGE_SENDER_ID,
// //   appId: process.env.FB_APP_ID,
// //   measurementId: process.env.FB_MEASUREMENT_ID,
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyDKP_vdkV7Y-8tcRn130krGmDdn4LxDc7c",
//   authDomain: "sahib-5ced6.firebaseapp.com",
//   databaseURL:
//     "https://sahib-5ced6-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "sahib-5ced6",
//   storageBucket: "sahib-5ced6.appspot.com",
//   messagingSenderId: "227879334328",
//   appId: "1:227879334328:web:3ed6f9c5cac29f9c331f4d",
//   measurementId: "G-JJJCRCH1PJ",
// };
// // alert(firebaseConfig.apiKey + ": ");
// export default function initFB() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
// }

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKP_vdkV7Y-8tcRn130krGmDdn4LxDc7c",
  authDomain: "sahib-5ced6.firebaseapp.com",
  databaseURL:
    "https://sahib-5ced6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sahib-5ced6",
  storageBucket: "sahib-5ced6.appspot.com",
  messagingSenderId: "227879334328",
  appId: "1:227879334328:web:3ed6f9c5cac29f9c331f4d",
  measurementId: "G-JJJCRCH1PJ",
};
// export default function initFB() {
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
// }
export const auth = getAuth();

export default firebaseConfig;
