import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../LoadingPage/Loading";
import { AboutOuter, HeaderOuter, Header } from "./AboutStyles";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

const About = () => {
    const [loading, setLoading] = useState(false);

    console.log("About us Page");

    return (
        <>
            <Sidebar />
            <AboutOuter>
                <HeaderOuter>
                    <Header>About us</Header>
                </HeaderOuter>
            </AboutOuter>
        </>
    );
};

export default About;
