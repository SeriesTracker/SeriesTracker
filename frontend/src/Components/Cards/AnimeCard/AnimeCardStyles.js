import styled from "styled-components";

export const AnimeCardOuter = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr 2fr;
    padding: 5px;
    border: ${(props) => props.theme.animeCard.border};
    background-color: ${(props) => props.theme.animeCard.background};
    border-radius: 5px;
    transition: 0.1s ease;
    color: ${(props) => props.theme.animeCard.fontColor};

    &:hover {
        cursor: ${(props) => (props.hover ? "pointer" : "")};
        background-color: rgba(166, 63, 203, 0.1);
    }

    @media (max-width: 400px) {
        width: 80%;
    }
`;

export const LeftOuter = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    text-align: center;
`;

export const AnimeImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;

    &:hover {
        cursor: pointer;
    }
`;

export const Title = styled.div`
    margin-left: 20px;
    font-size: 20px;
    //TODO: import 400 font weight
    font-weight: 300;

    .title-input {
        border: none;
        text-overflow: ellipsis;
        font-size: 20px;
        background-color: transparent;

        &:focus {
            outline: none;
            border: none;
            text-decoration: none;
        }
    }

    @media (max-width: 400px) {
        display: none;
    }
`;

export const MiddleOuter = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 0px 5px 0px 5px;
`;

export const RightOuter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 5px 0px 5px;
    align-items: center;
    justify-items: center;
`;

export const EpisodeCount = styled.div`
    margin-right: 10px;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;

    .episodes-input {
        width: 50px;
        border: none;
        font-size: 18px;
        font-weight: 500;
        background-color: transparent;
        text-overflow: ellipsis;
        text-align: end;
        transform: translateX(-5px);

        &:focus {
            outline: none;
            border: none;
            text-decoration: none;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const CounterButton = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export const DialogOuter = styled.div`
    width: 600px;
    height: 400px;
    padding: 30px;
`;

export const FormFieldOuter = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 5px;
`;
