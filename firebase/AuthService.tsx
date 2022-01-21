import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const Googleuser = await firebase.auth().signInWithPopup(provider);
      alert(Googleuser);
      return;
      {
        user: Googleuser;
      }
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
};
