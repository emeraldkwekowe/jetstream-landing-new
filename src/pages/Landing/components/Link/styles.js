import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";

const { black, white, green } = theme.pallete;

export const LinkContainer = styled.div`
  a {
    text-transform: uppercase;
    font-family: ${theme.typography.secondaryFont};
    text-decoration: none;
    padding: 12px;
    display: block;
    text-align: center;
    &.text {
      color: ${black.B00};
      font-weight: 600;
    }
    &.flat {
      color: ${white.W00};
      background: ${green.G00};
      width: 150px;
      border-radius: 35px;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.4px;
    }
  }
`;
