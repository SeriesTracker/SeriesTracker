import styled from "styled-components";

export const SeriesCardOuter = styled.div`
  width: 100%;
  padding: 20px 20px 25px 20px;
  height: 180px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #fcfcfc;
  transition: 0.1s ease;
  border-radius: 10px;

  &:hover {
    background-color: rgba(166, 63, 203, 0.1);
    cursor: pointer;
  }
`;

export const SeriesCardInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* background-color: #fdfd77; */
`;

export const SeriesCardImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const WatchTimeContainer = styled.div`
  position: relative;
  bottom: 5px;
  width: 100%;
  height: 20px;
  /* background-color: red; */
`;

export const CardInformationContainer = styled.div`
  margin-left: 20px;
  width: 60%;
  /* background-color: #00ff00; */
`;

export const CardTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

export const EpisodeContainer = styled.div`
  margin-top: 10px;
  width: 160px;
`;

export const EpisodeCount = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const EpisodeLineGray = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: rgba(201, 201, 201, 0.8);
  border-radius: 5px;
`;

export const EpisodeLineProgress = styled.div`
  position: relative;
  width: 60%;
  height: 2px;
  background-color: #a63fcb;
  border-radius: 5px;
  top: -2px;
`;

export const CardRatingContainer = styled.div`
  position: relative;
  display: flex;
  padding-left: 70px;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const CardRatingImg = styled.img`
  display: flex;
  width: 40px;
`;

export const CardRatingTxt = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  font-size: 20px;
`;

export const CardRatingCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100px;
`;

export const CardDescription = styled.div`
  margin-top: 10px;
  font-size: 16px;
  display: flex;
  left: 0;
`;

export const ProgressLine = styled.div`
  position: relative;
  width: 60%;
  height: 2px;
  background-color: #a63fcb;
  bottom: 8px;
  border-radius: 999px;
  z-index: 999;
  margin-left: 11%;

  &:after {
    content: "";
    position: absolute;
    background-color: #a63fcb;
    width: 10px;
    height: 10px;
    right: 0px;
    margin-bottom: 5px;
    transform: translate(0px, -4px);
    border-radius: 50%;
  }
`;

export const ProgressLineGray = styled.div`
  position: relative;
  width: 89%;
  height: 2px;
  background-color: rgba(201, 201, 201, 0.8);
  bottom: 10px;
  border-radius: 999px;
  margin-left: 11%;
`;

export const ProgressLineText = styled.div`
  position: absolute;
  font-size: 11px;
  transform: translate(0px, -15px);
`;