import React, { useRef, useState, useEffect } from "react";

import {
    LoginOuterContainer,
    HomepagePreview,
    HomepagePreviewTxt,
    HomepagePreviewHeader,
    TxtOuter,
    HomepagePreviewImg,
    LoginBoxMain,
    LoginBoxLogo,
    LoginBoxLogoOuter,
    LoginFields,
    LoginBoxSecondary,
    LoginBoxContainer,
    RegisterText,
    AlternativeLoginMethods,
    FileLabel,
    PageContainer,
    LoginBoxOuterBg,
    RegisterBox,
    AlternativeText,
} from "./LoginStyles";

import "./login.css";
import { HiOutlineUser } from "react-icons/hi";

import previewImg from "../../Assets/Login/homescreen.png";
import animeCollageW from "../../Assets/Login/animeCollageW.png";
import animeCollageP from "../../Assets/Login/animeCollageP.png";
import animeCollageS from "../../Assets/Login/animeCollageS.png";
import Footer from "../../Components/Footer/Footer";

import { signup, logIn, userProfileUpdate, signInWithGoogle, saveData, getGoogleRedirectResults } from "../../firebase.js";
import GoogleLoginButton from "../../Components/Buttons/GoogleButton/GoogleLoginButton";
import SeriesTrackerLogo from "../../Assets/Images/logo.png";

import FButton from "../../Components/Buttons/FormButton/FormButton";
import FButtonInverted from "../../Components/Buttons/FormButtonInverted/FormButtonInverted";
import Loading from "../LoadingPage/Loading";
import { useNavigate } from "react-router-dom";
import FormField from "../../Components/FormField/FormField";

import { postUser } from "../../axios/axios";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    let navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, []);

    const [url, setUrl] = useState();
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [register, setRegister] = useState(false);
    const [buttonColor, setButtonColor] = useState(false);

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSignup = () => {
        return userProfileUpdate(url)
            .then(() => {
                setLoading(true);
                return signup(emailRef.current.value, passwordRef.current.value)
                    .then((cred) => {
                        let formdata = new FormData();

                        formdata.append("image", image);
                        formdata.append("_id", cred.user.uid);
                        formdata.append("username", cred.user.email.split("@")[0]);
                        formdata.append("email", cred.user.email);

                        return fetch("api/users", {
                            method: "POST",
                            body: formdata,
                        });
                    })
                    .then((res) => res.text())
                    .then((resBody) => {
                        setLoading(false);
                        console.log("Success");
                        window.location.reload();
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleLogin = () => {
        return userProfileUpdate(url)
            .then(() => {
                setLoading(true);
                return logIn(emailRef.current.value, passwordRef.current.value);
            })
            .then(() => {
                setLoading(false);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        sessionStorage.setItem("myPage.expectSignIn", "1");
        return signInWithGoogle()
            .then(() => {
                return getGoogleRedirectResults();
            })
            .then(({ user }) => {
                return postUser("api/users", {
                    _id: user.uid,
                    username: user.displayName,
                    email: user.email,
                    googlePhotoUrl: user.photoURL,
                });
            })
            .then(() => {
                setLoading(false);
                navigate("/");
            });
    };

    // Gets the data from the google log in
    // useEffect(() => {
    //     getGoogleRedirectResults()
    //         .then(({ user }) => {
    //             return postUser("api/users", {
    //                 _id: user.uid,
    //                 username: user.displayName,
    //                 email: user.email,
    //                 googlePhotoUrl: user.photoURL,
    //             });

    //             //TODO: Finn bedre solution
    //             //window.location.reload();
    //         })
    //         .then(() => {
    //             setLoading(false);
    //             navigate("/");
    //         });
    // }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {/*Displays the anime background*/}
            <PageContainer>
                {/*Login page grid containing the homepage preview
                and login box*/}
                <LoginOuterContainer>
                    {/*Displays a preview of our homepage
                    when the screen width is big enough*/}
                    <HomepagePreview>
                        <TxtOuter>
                            <HomepagePreviewHeader>Track your series!</HomepagePreviewHeader>
                            <HomepagePreviewTxt>
                                Save your series' progress, rate them, discover new ones, and connect with friends!
                            </HomepagePreviewTxt>
                        </TxtOuter>
                        <HomepagePreviewImg src={animeCollageW} alt="Homepage preview" />
                    </HomepagePreview>
                    {/*The second column in the grid. Contains the login box*/}
                    <LoginBoxOuterBg>
                        {/*Displays the login box*/}
                        <LoginBoxContainer>
                            {/*The grid for the logo and the login fields*/}
                            <LoginBoxMain>
                                <LoginBoxLogoOuter>
                                    <LoginBoxLogo src={SeriesTrackerLogo} />
                                </LoginBoxLogoOuter>
                                <LoginFields>
                                    <FormField ref={emailRef} type="text" placeholder="email" name="email" />
                                    <FormField ref={passwordRef} type="password" placeholder="password" name="password" />
                                    {register ? (
                                        <FButton buttonText="Sign Up" action={handleSignup} />
                                    ) : (
                                        <FButton buttonText="Log In" action={handleLogin} />
                                    )}
                                    <AlternativeLoginMethods>
                                        <GoogleLoginButton action={handleGoogleSignIn} text={"Continue with Google"} />
                                    </AlternativeLoginMethods>
                                    <RegisterBox>
                                        <RegisterText style={{ border: "0" }}>
                                            {register ? "Already have an account?" : "Don't have an account?"}
                                        </RegisterText>
                                        <RegisterText
                                            onClick={() => {
                                                setRegister(!register);
                                            }}
                                        >
                                            {register ? "Log In" : "Create an account"}
                                        </RegisterText>
                                    </RegisterBox>
                                </LoginFields>
                            </LoginBoxMain>
                        </LoginBoxContainer>
                    </LoginBoxOuterBg>
                </LoginOuterContainer>
            </PageContainer>
        </>
    );
};

export default Login;
