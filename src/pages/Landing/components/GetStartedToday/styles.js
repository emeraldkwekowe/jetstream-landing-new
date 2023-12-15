import styled from "styled-components";

export const GetStartedTodayContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 30px 0px 50px;
  h2 {
    width: 90%;
    max-width: 400px;
    margin: 10px auto;
  }
  section {
    width: 100%;
  }
  div.flex {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    a.flat {
      width: auto;
      padding: 13px 27px;
      margin-bottom: 10px;
    }
  }
  svg {
    position: absolute;
    right: -310px;
    top: 40px;
    z-index: -1;
  }
  @media (max-width: 1180px) {
    svg {
      right: -450px;
    }
  }
  @media (max-width: 800px) {
    svg {
      right: -100px;
      height: 300px;
      width: 300px;
      top: 300px;
    }
  }
  @media (max-width: 600px) {
    svg {
      right: -140px;
      height: 300px;
      width: 300px;
      top: 400px;
    }
  }
`;
