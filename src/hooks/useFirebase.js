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

   

    //handle register
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage, "register")
            });
    };
    const hanldeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    //handle login
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            });
    };




    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleUserLogin,
        handleUserRegister,
        loggedInUser,
        error,
        hanldeEmail,
        hanldePassword,
        email,
        password,
        setLoggedInUser,
        setError
    }
}

export default useFirebase;