import styled from "styled-components";
import { fadeIn, slideInUp } from "../../helpers/animations";

export const AppLoaderContainer = styled.div`
  #animation-container {
    width: 300px;
    height: 100vh;
    margin: 0 auto;
    animation-delay: 0.6s;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
  }
  .logo {
    animation-name: ${slideInUp};
    height: 40px;
    position: fixed;
    margin: 0 auto;
    bottom: 40px;
    left: 0px;
    right: 0px;
  }
`;
