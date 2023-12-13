import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";

export const HeroContainer = styled.div`
  width: auto;
  height: 80vh;
  margin: 0 5.5%;
  background: ${theme.pallete.black.B50};
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;

  svg.lines {
    position: absolute;
    z-index: 0;
    width: auto;
    height: auto;
  }
  a {
    margin: 25px auto 0px;
    display: block;
  }
`;

export const H3 = styled.h3`
  font-family: ${theme.typography.secondaryFont};
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: ${theme.pallete.blue.B400};
  text-transform: uppercase;
  margin-top: 65px;
`;

export const H1 = styled.h1`
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  font-size: 71px;
  font-weight: 600;
  line-height: 70px;
  letter-spacing: 0.3px;
`;

export const P = styled.p`
  font-family: ${theme.typography.primaryFontRegular};
  margin: 0 auto;
  width: 80%;
  font-size: 17px;
  font-weight: 200;
  line-height: 26px;
  letter-spacing: 0.1px;
  margin-top: 13px;
`;

export const AnimationContainer = styled.div`
  width: auto;
  height: 800px;
  svg {
    display: blonock;
    margin: 0 auto;
    transform: rotate(145deg);
  }
`;
