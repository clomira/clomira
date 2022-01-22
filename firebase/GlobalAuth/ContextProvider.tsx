// import { useContext, createContext, useState } from "react";
// // import { useAuth } from "../auth";
// import { AuthService } from "../AuthService";
// import initFB from "../initFireBase";
// import firebase from "firebase/compat/app";
// const authcontext = createContext<IArticle>({});
// initFB();
// interface IArticle {
//   user: string | any;
//   error: string;
//   loginWithGoogle: React.MouseEventHandler<HTMLButtonElement> | undefined;
//   logout: React.MouseEventHandler<HTMLDivElement> | undefined;
//   loginwithEmail: React.MouseEventHandler<HTMLButtonElement> | undefined;
//   signupwithEmail: React.MouseEventHandler<HTMLButtonElement> | undefined;
// }
// const useAuth = (): IArticle => {
//   // alert(user);
//   initFB();
//   return useContext(authcontext);
// };
// export default useAuth;

// export function AuthProvider(props: any) {
//   const [user, setUser] = useState(null);
//   const [error, setErr] = useState("");
//   const loginWithGoogle = async () => {
//     const { error, user }: any = await AuthService.loginWithGoogle();
//     setUser(user ?? null);
//     alert(user);
//     setErr(error ?? "");
//   };

//   const logout = async () => {
//     await AuthService.logout();
//     // setUser("sahib");
//     alert("logout");
//   };

//   const signupwithEmail = async (userEmail: string, userPass: string | any) => {
//     alert("email");
//     const res = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(userEmail, userPass)
//       .then(() => {
//         alert(res);
//         // console.log(res);
//         window.location.href = "/";
//       })
//       .catch((error) => {
//         console.error(error);
//         // setClickSubmit(false);
//       });
//   };
//   const loginwithEmail = async (userEmail: string, userPass: string | any) => {
//     // alert("signEmial");
//     // const res = await firebase
//     //   .auth()
//     //   .signInWithEmailAndPassword(userEmail, userPass);
//     //   alert(res);
//     await firebase
//       .auth()
//       .signInWithEmailAndPassword(userEmail, userPass)
//       .then((res) => window.location.href="/")
//     //   .catch((err) => {
//     //     alert(err);
//     //   });
//   };
//   const value = {
//     user,
//     error,
//     loginWithGoogle,
//     logout,
//     loginwithEmail,
//     signupwithEmail,
//   };
//   return <authcontext.Provider value={value} {...props} />;
// }

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useContext, createContext, useState } from "react";
import { auth } from "../initFireBase";
// import initFB from "../initFireBase";
// initFB();
interface IArticle {
  user: null | any;
  error: string;
  loginWithGoogle: React.MouseEventHandler<HTMLButtonElement> | undefined;
  logout: React.MouseEventHandler<HTMLDivElement> | undefined;
  loginwithEmail: any;
  signupwithEmail: any;
}

const authcontext = createContext<IArticle>({});
const provider = new GoogleAuthProvider();

export function AuthProvider(props: any) {
  const [user, setUser] = useState(null);
  const [error, setErr] = useState("");
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        window.location.href = "/";
        const user = result.user;
        // setUser(user);
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const loginwithEmail = async (userEmail: string, userPass: string | any) => {
    // alert("signEmial");
    // const res = await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(userEmail, userPass);
    //   alert(res);
    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((res) => (window.location.href = "/"))
      .catch((err) => {
        alert(err);
      });
  };

  const signupwithEmail = async (userEmail: string, userPass: string | any) => {
    alert("email");
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((res) => {
        alert(res);
        // console.log(res);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        // setClickSubmit(false);
      });
  };

  const logout = () => {
    auth.signOut();
    console.log("logout");
  };

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    loginwithEmail,
    signupwithEmail,
  };
  return <authcontext.Provider value={value} {...props} />;
}

const useAuth = (): IArticle => {
  // alert(user);
  //   initFB();
  return useContext(authcontext);
};
export default useAuth;
