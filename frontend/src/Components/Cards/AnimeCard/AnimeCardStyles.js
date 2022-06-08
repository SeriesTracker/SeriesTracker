import styled from "styled-components";

export const AnimeCardOuter = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 2fr;
  padding: 5px;
  box-shadow: 4px 4px 4px rgba(200, 200, 200, 0.2);
  border: 1px solid rgba(200, 200, 200, 0.2);
  border-radius: 5px;
  background-color: #fafafa;
  transition: 0.1s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(166, 63, 203, 0.1);
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
  font-size: 18px;
  font-weight: 500;
`;

export const CounterButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`;