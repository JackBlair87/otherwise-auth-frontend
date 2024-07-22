"use client"

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then((result) => {
      console.log(result);
      if(window !== undefined) {
        console.log(result._tokenResponse.oauthIdToken);
        window.location.href = "second://" + result._tokenResponse.oauthIdToken;
      }

    }).catch((error) => {
      console.log(error);
    });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
