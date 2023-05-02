import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const emailPassUserCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const emailPassSignIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  };

  const logOut = () => {
    setLoading(true);
    console.log("Logged Out");
    return signOut(auth)
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [])



  //authinfo data as object to lift up like an antena....
  const authInfo = {
    user,
    loading,
    setLoading,
    emailPassUserCreate,
    emailPassSignIn,
    updateUser,
    logOut,
  }

  //main return.....
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
  };

export default AuthProvider;