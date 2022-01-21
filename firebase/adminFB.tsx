import { verify } from "crypto";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const admin = require("firebase-admin");
const serviceAcc = require("./secrets.json");

export const verifyToken = (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAcc),
      databaseURL:
        "https://sahib-5ced6-default-rtdb.asia-southeast1.firebasedatabase.app/",
    });
  }
  return admin
    .auth()
    .verifyToken(token)
    .catch((err: string) => {
      throw err;
    });
};
