import styled from "styled-components";

export const ContentRightOuter = styled.div`
  position: fixed;
  margin: 110px 90px 0px 0px;
  width: 20%;
  height: 100%;
  right: 0;
  @media (max-width: 1260px) {
    display: none;
  }
  &:hover{
    overflow-y: scroll;
  }
`;

export const ChartsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }
  
`;

export const EntryImg = styled.img`
  display: flex;
  flex-grow: 1;
`;

export const EntryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 5;
`;

export const EntryHeader = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: 400;
  font-size: 20px;
  padding: 10px;
`;

export const EntryTxt = styled.div`
  display: flex;
  flex-grow: 10;
  padding: 10px;
  @media (max-width: 1400px) {
    display: none;
  }
`;