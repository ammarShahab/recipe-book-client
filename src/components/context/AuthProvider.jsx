import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../public/firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const userLogin = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = (provider) => {
    // setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //   setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    user,
    setUser,
    updateUser,
    userLogin,
    provider,
    logOut,
    googleSignIn,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
