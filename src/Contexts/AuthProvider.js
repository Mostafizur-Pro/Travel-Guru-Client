import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Create Email and password (register)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Profile photo and name update
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //   Signin Email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Sign Out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Google Sign In
  const googleProvider = new GoogleAuthProvider();
  const createGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   GitHub sign In
  const githubProvider = new GithubAuthProvider();
  const createGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log("inside auth state change", currentUser);

      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    signIn,
    setLoading,
    logout,
    createGoogle,
    createGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
