import styled from "styled-components";

export const WhoWeAreContainer = styled.div`
  min-height: 800px;
  margin: 47px 11% 0px;
  overflow: hidden;
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
        margin-top: 140px;
      }
    }
  }
  img {
    width: 97%;
    margin-top: 50px;
    margin-bottom: -90px;
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
