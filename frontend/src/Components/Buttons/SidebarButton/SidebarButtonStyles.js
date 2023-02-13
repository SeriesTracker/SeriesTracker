import styled from "styled-components";

export const PanelItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 0 0 10px;
    border-radius: 0 10px 10px 0;
    align-items: center;
    transition: 0.15s;
    border-left: 5px solid transparent;

    //background-color: rgb(45, 42, 45);

    &:nth-child(1) {
        border-left: 5px solid ${(props) => props.theme.sidebar.buttonBorder};
        background-color: ${(props) => props.theme.sidebar.panelItem};
    }

    &:hover {
        background-color: ${(props) => props.theme.sidebar.panelItem};
        cursor: pointer;
    }

    /* &:nth-child(even) {
    background-color: ${(props) => props.theme.sidebar.accentColor};
  } */
`;

export const Text = styled.div`
    column-gap: 20px;
    padding: 0 15px 0 0;
    top: 6px;
    font-weight: 400;
    color: ${(props) => props.theme.navbar.fontColor};
`;

export const Icon = styled.img`
    column-gap: 20px;
    padding: 0 15px 0 0;
    top: 6px;
    width: 35px;
`;
