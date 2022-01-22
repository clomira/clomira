import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import initFB from "./initFireBase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Authcontext = createContext({});


function AuthProvider({ children }: any) {
  // initFB();
  const [user, setUser] = useState(null);
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      //if no user exists
      if (!user) {
        setUser(null);
        //set token to empty string
        nookies.set(undefined, "token", "", {});
        return;
      }

      //if user exists
      const token = await user.getIdToken();
      nookies.set(undefined, "token", token, {});
    });
  }, []);
  return (
    //syntax of context api
    <Authcontext.Provider value={{ user }}>{children}</Authcontext.Provider>
  );
}

export const useAuth = () => {
  useContext(Authcontext);
};
export default AuthProvider;
