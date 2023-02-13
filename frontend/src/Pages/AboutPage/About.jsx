import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../LoadingPage/Loading";
import { AboutOuter, HeaderOuter, Header, PageSection } from "./AboutStyles";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

const About = () => {
    const [loading, setLoading] = useState(false);

    console.log("About us Page");

    return (
        <>
            <Sidebar />
            <AboutOuter>
                <PageSection>
                    <HeaderOuter className="about_us">
                        <Header>About us</Header>
                    </HeaderOuter>
                </PageSection>
                <PageSection>
                    <HeaderOuter className="our_journey">
                        <Header>Our journey</Header>
                    </HeaderOuter>
                </PageSection>
                <PageSection>
                    <HeaderOuter className="agile_teams">
                        <Header>Agile teams</Header>
                    </HeaderOuter>
                </PageSection>
            </AboutOuter>
        </>
    );
};

export default About;
