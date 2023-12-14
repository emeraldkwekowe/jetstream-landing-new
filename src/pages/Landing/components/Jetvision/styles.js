import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";

const { white, black, green, blue } = theme.pallete;

export const JetvisionContainer = styled.div`
  width: auto;
  height: auto;
  min-height: 1000px;
  background: ${black.B50};
  padding: 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Introduction = styled.div`
  width: 90%;
  max-width: 500px;
  text-align: center;
  margin: 0px auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const Features = styled.div`
  display: flex;
  justify-content: center
  width: 96%;
  max-width: 1120px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FeatureRow = styled.div`
  flex-grow: 1;
  max-width: 550px;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  @media (max-width: ${theme.responsive.tablet}) {
    width: 50%;
    .black svg {
      height: unset;
      margin-left: 40px !important;
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const FeatureDiv = styled.div`
  border-radius: 20px;
  box-sizing: border-box;
  padding: 30px;
  overflow: hidden;
  background: ${white.W500};
  margin-bottom: 15px;
  h3 {
    font-size: 17px;
  }
  p {
    width: 93%;
  }
  &.black {
    background: ${black.B500};
    svg {
      margin: 0px 0px -40px 0px;
    }
  }
  &.black,
  &.blue {
    h3 {
      margin: 10px 0px 10px;
      color: ${green.G500};
    }
    p {
      color: ${white.W500};
      margin-bottom: 0px;
    }
  }
  &.blue {
    background: ${blue.B500};
    img {
      width: 80%;
      margin: 30px auto;
      display: block;
    }
  }
`;
