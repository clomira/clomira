import { auth, firestore, googleAuthProvider } from "../../lib/firebase";
import { useEffect, useState, useContext, createContext } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

let value = { user: {}, username: "" };
export const signInWithGoogle = async () => {
  signInWithPopup(auth, googleAuthProvider)
    .then(function (result) {
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signupwithEmail = async (email: string, password: string) => {
  alert("email");
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + errorCode);
    });
};

export const loginwithEmail = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};

// Sign out button
export function SignOutButton() {
  signOut(auth).then((result) => {
    window.location.href = "/";
  });
  console.log("Sign out");
}

export const UserContext = createContext("");

export const AuthProvider = ({ children }: any) => {
  const [curuser, setcuruser] = useState<User | null>();
  const [username, setusername] = useState<string>("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setcuruser(user);
      if (user && user.email != null) setusername(user.email);
      setLoading(false);
    });
  }, []);
  if (loading) return <div>loading..</div>;
  return (
    <UserContext.Provider value={username}>{children}</UserContext.Provider>
  );
};

export const useCred = () => {
  return useContext(UserContext);
};
