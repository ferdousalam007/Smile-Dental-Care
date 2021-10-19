import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    //handle login
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value)
        setPassword("");
    };
    const handleLogin = () => {
      return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    //handle register
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                // verifyEmail();
            })
            .catch((error) => setError(error.message));
    };
    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleLogin,
        loggedInUser,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleOnSubmit
    }
}

export default useFirebase;