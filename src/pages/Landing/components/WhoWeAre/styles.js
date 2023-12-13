import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";

export const WhoWeAreContainer = styled.div`
  min-height: 800px;
  margin: 47px 11%;
  div.parent {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    div {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 480px;
      p {
        font-family: ${theme.typography.primaryFontRegular};
        font-size: 16px;
        font-weight: 100;
        margin-top: 140px;
        line-height: 26px;
      }
    }
  }
  img {
    width: 97%;
    margin-top: 50px;
  }
  @media (max-width: 800px) {
    div.parent {
      flex-direction: column;
      div {
        p {
          margin: 0;
          margin-top: 0;
        }
      }
    }
  }
`;
