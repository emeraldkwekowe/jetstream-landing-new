import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";
import {
  fadeIn,
  fadeInOut,
  slideInUp,
  zoomOut,
} from "../../../../helpers/animations";

export const HeroContainer = styled.div`
  width: auto;
  height: 90vh;
  max-height: 800px;
  margin: 0 5.5%;
  background: ${theme.pallete.black.B50};
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  animation-name: ${slideInUp};
  animation-delay: 0.3s;

  svg.lines {
    position: absolute;
    z-index: 0;
    width: auto;
    height: auto;
    animation-name: ${fadeIn};
    animation-delay: 0.5s;
    animation-duration: 0.6s;
  }
  h3,
  h1 {
    animation-name: ${slideInUp};
    animation-delay: 0.4s;
  }
  a {
    margin: 25px auto 0px;
    display: block;
    animation-name: ${slideInUp};
    animation-delay: 0.7s;
  }
  @media (max-width: ${theme.responsive.tablet}) {
    h1 {
      font-size: 50px;
      line-height: 50px;
    }
    h3 {
      margin-top: 90px;
    }
    p {
      font-size: 15px;
    }
  }
  @media (max-width: ${theme.responsive.mobile}) {
    height: 80vh;
    svg.lines {
      height: 100%;
      margin-top: -60px;
    }
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const H1 = styled.h1`
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
  font-size: 77px;
  line-height: 70px;
  font-family: ${theme.typography.primaryFontSemiBold};
  letter-spacing: -1.9px;
  @media (max-width: ${theme.responsive.mobile}) {
    letter-spacing: -0.9px;
    font-weight: 300;
  }
`;

export const P = styled.p`
  font-family: ${theme.typography.primaryFontRegular};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  font-size: 17px;
  font-weight: 200;
  line-height: 26px;
  letter-spacing: 0.1px;
  margin-top: 13px;
  animation-name: ${slideInUp};
  animation-delay: 0.6s;
  margin-bottom: 0;
`;

export const AnimationParent = styled.div`
  width: 850px;
  height: 850px;
  margin: -30px auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -455px;
  @media (max-width: ${theme.responsive.tablet}) {
    transform: scale(0.7);
    margin-bottom: 90px;
    margin-left: -5%;
  }
  @media (max-width: 780px) {
    margin-left: -14%;
  }
  @media (max-width: 700px) {
    transform: scale(0.9);
    margin-bottom: 20px;
    margin-left: -20%;
  }
  @media (max-width: ${theme.responsive.mobile}) {
    transform: scale(1.1);
    margin-bottom: -50px;
    margin-left: -60%;
  }
`;

export const AnimationContainer = styled.div`
  margin: 0 auto;
  animation-name: ${fadeIn};
  animation-delay: 0.9s;
  animation-duration: 1s;
  svg {
    display: block;
    margin: 0 auto;
  }
`;

export const DotContainer = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: 0;
  animation-name: ${fadeInOut};
  animation-duration: 0.5s;
  animation-delay: 2.5s;
  &.d1 {
    left: 300px;
    top: 75px;
  }
  &.d2 {
    left: 641px;
    top: 172px;
    animation-delay: 3.5s;
    .large {
      animation-delay: 3.2s;
    }
  }
`;
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: ${theme.pallete.blue.B500};
  border-radius: 100%;
  position: absolute;
  &.large {
    opacity: 0;
    animation-name: ${zoomOut};
    animation-duration: 2s;
    animation-delay: 2.2s;
  }
`;
