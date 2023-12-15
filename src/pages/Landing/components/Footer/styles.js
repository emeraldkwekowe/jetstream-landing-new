import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";

const { black, white } = theme.pallete;

export const FooterContainer = styled.div`
  width: auto;
  background: ${black.B300};
  a,
  p {
    display: block;
    color: ${black.B75};
    text-decoration: none;
    font-family: ${theme.typography.primaryFontRegular};
    font-weight: 200;
    margin: 25px 0px;
    font-size: 15.5px;
  }
  p {
    line-height: 30px;
  }
`;

export const FooterMain = styled.div`
  min-height: 335px;
  width: 90%;
  max-width: 1300px;
  margin: 0px auto 0px;
  .flex {
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      margin-bottom: 30px;
    }
  }
  div {
    svg {
      height: 22px;
      margin-right: 10px;
      margin-top: 15px;
    }
  }
  div.flex {
    padding-top: 60px;
    div {
      margin-right: 60px;
      min-width: 100px;
      max-width: 300px;
      &:last-of-type {
        margin-right: 0;
      }
      h3 {
        margin: 0;
        color: ${white.W500};
      }

      img {
        margin-top: -20px;
        height: 60px;
      }
    }
  }
`;

export const FootNote = styled.div`
  background: ${black.B500};
  min-height: 75px;
  div.flex {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    div {
      display: flex;
      padding-top: 4px;
      display: flex;
      flex-wrap: wrap;
      a {
        flex-grow: 1;
        margin-right: 40px;
      }
    }
  }
`;
