import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from ;


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    

    return (
        <div>
            <div className="bg-blue-200 flex">
                <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                    <h1 className="font-bold text-2xl my-10 text-white"> Login</h1>
                    <div className="mt-2 flex flex-col lg:w-1/2 w-8/12">
                        <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                >
                                    <i className="fas fa-user-circle"></i>
                                </span>
                            </div>
                            <input
                                onChange={handleEmailChange}
                                type="text"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="Username"
                            />
                        </div>
                        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                >
                                    <i className="fas fa-lock"></i>
                                </span
                                >
                            </div>
                            <input
                                onChange={handlePasswordChange}
                                type="password"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                placeholder="Password"
                            />
                            <div className="flex -mr-px">
                                <span
                                    className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                >
                                    <i className="fas fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>
                        <p className="text-red-700	">{error}</p>


                        <button onClick={handleLogin} type="submit" className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
                        > Login
                        </button>
                    </div>
                    <button
                        className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans  mb-20"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                    <p className="mb-20">You Do not have acoount please <Link className="text-lg text-white hover:text-red-500" to="/register">Create Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;