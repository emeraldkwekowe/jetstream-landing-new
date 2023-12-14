import styled from "styled-components";
import theme from "../../../../helpers/theme/theme";
import pallete from "../../../../helpers/theme/palette";

const { purple, black, white } = theme.pallete;

export const WhatSetsUsApartParent = styled.div`
  min-height: 900px;
`;

export const FeaturesMarqueeParent = styled.div`
  height: 84px;
  background: ${purple.P50};
  overflow: hidden;
  position: relative;
  @media (max-width: ${theme.responsive.mobile}) {
    margin: -50px auto -25px;
  }
`;

export const FeaturesMarqueeContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1300px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  left: 0;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    min-width: 1200px;
  }
  h3 {
    margin: 0;
    margin-top: -5px;
    font-size: 16px;
    line-height: unset;
  }
  h3:nth-child(odd) {
    font-size: 21px;
    font-weight: 300;
  }
`;

export const WhatSetsUsApartContainer = styled.div`
  min-height: 900px;
  background: ${black.B400};
  width: 95%;
  max-width: 1290px;
  margin: 60px auto 0px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: ${theme.responsive.mobile}) {
    border-radius: 20px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  max-width: 1100px;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 100px;
  h2,
  h3 {
    color: ${white.W500};
    margin-bottom: 0px;
  }
  h2 {
    font-size: 27px;
    margin-top: 10px;
  }
  h2.primary_h2 {
    font-size: 50px;
  }
  p {
    color: ${black.B75};
    margin-bottom: 5px;
    margin-top: 10px;
  }
  section {
    display: flex;
    svg {
      width: 70px;
      height: 70px;
      min-width: 65px;
      min-height: 65px;
      margin-right: 10px;
    }
  }
  div {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 400px;
    hr {
      border: 0;
      margin: 20px 0px;
      border-bottom: 1px solid ${white.W500}22;
      width: 90%;
      margin-left: auto;
    }
  }
  div.text {
    margin-top: 80px;
  }
  @media (max-width: ${theme.responsive.mobile}) {
    flex-direction: column;
    margin-top: 40px;
    h2 {
      font-size: 23px;
    }
    h2.primary_h2 {
      font-size: 40px;
    }
    div,
    section {
      min-width: unset;
      flex-grow: unset;
      flex-basis: unset;
      width: 100%;
    }
    div.text {
      margin-top: 50px;
    }
  }
`;

export const WhyUseJVSaaSContainer = styled.div`
  background: ${pallete.white.W500};
  min-height: 400px;
  max-width: 1130px;
  border-radius: 25px;
  margin: 100px 30px 0px;
  .flex {
    width: 86%;
    margin: 0 auto;
    flex-wrap: wrap;
    & > div {
      max-width: 300px;
      margin-bottom: 20px;
      width: 100%;
      svg {
        height: 60px;
        width: 60px;
      }
      h3 {
        font-size: 13px;
      }
      p {
        color: ${black.B500};
        font-weight: 500;
      }
    }
  }
  a {
    color: ${black.B400};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 100px;
    margin-left: auto;
    transition: all 0.4s ease;
    svg {
      transition: all 0.4s ease;
      margin-left: 12px;
    }
    &:hover {
      margin-right: -10px;
      text-decoration: underline;
      svg {
        margin-left: 27px;
      }
    }
  }
  @media (max-width: 800px) {
    .flex {
      a {
        margin: 0;
        margin-top: 130px;
      }
      div {
        max-width: unset;
      }
    }
    @media (max-width: ${theme.responsive.mobile}) {
      margin: 60px 14px 0px;
      border-radius: 20px;
      .flex {
        width: 90%;
      }
    }
  }
`;
