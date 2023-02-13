import styled from "styled-components";

export const AboutOuter = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 100vw;
    //Grid for the elements on the page except for the
    //sidebar and navbar
    display: grid;
    grid-template-rows: 1fr;
`;

export const PageSection = styled.section`
    position: relative;
    height: 900px;
    display: grid;
    text-align: center;
    justify-content: center;
    :nth-child(1) {
        background-color: rgba(40, 40, 50, 1);
    }
    :nth-child(2) {
        background-color: rgba(50, 50, 50, 1);
    }
    :nth-child(3) {
        background-color: rgba(40, 40, 50, 1);
    }
`;

export const HeaderOuter = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    padding-top: 200px;
`;

export const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding: 10px;
    white-space: nowrap;
    text-transform: capitalize;
    :nth-child(1) {
        color: white !important;
    }
    :nth-child(2) {
        color: black;
    }
    :nth-child(3) {
        color: white;
    }
`;
