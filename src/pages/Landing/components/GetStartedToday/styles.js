import styled from "styled-components";

export const GetStartedTodayContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 0px 50px;
  section {
    width: 100%;
  }
  div.flex {
    align-items: center;
    justify-content: center;
    a.flat {
      width: auto;
      padding: 10px 30px;
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
`;
