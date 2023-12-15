import styled from "styled-components";
import { slideInUp } from "../../../../helpers/animations";
import theme from "../../../../helpers/theme/theme";
import pallete from "../../../../helpers/theme/palette";

export const HeaderContainer = styled.header`
  height: 90px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 5.5% 5px;
  &.mobile_menu {
    background: ${theme.pallete.green.G50};
  }
  a.flat {
    animation-delay: 0.3s;
    animation-name: ${slideInUp};
  }
  .more {
    display: none;
    position: relative;
    height: 30px;
    width: 30px;
    margin-top: 3px;
    margin-left: 10px;
    margin-right: 20px;
    svg {
      height: 25px;
      width: 25px;
      position: absolute;
      margin: 0;
      top: -50px;
      left: 0;
      opacity: 0;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 14px;
      margin: -16px 0px 0px -18px;
      &.active {
        top: 0;
        opacity: 1;
      }
    }
  }
  @media (max-width: ${theme.responsive.tablet}) {
    padding: 0px 3% 0px;
    nav.primary {
      display: none;
    }
    .more {
      display: block;
    }
    .flat {
      margin-left: auto;
    }
  }
  @media (max-width: ${theme.responsive.tablet}) {
    .flat {
      display: none;
    }
  }
`;

export const LogoContainer = styled.a`
  width: 200px;
  display: block;
  animation-name: ${slideInUp};
  svg {
    width: 187px;
  }
  @media (max-width: ${theme.responsive.tablet}) {
    svg {
      width: 170px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  min-width: 37%;
  justify-content: space-between;
  align-items: center;
  animation-delay: 0.2s;
  animation-name: ${slideInUp};
`;

export const MenuContainer = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 90px;
  left: 0;
  z-index: 9;
  background: ${theme.pallete.green.G50};
  nav {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 20px 25px;
    animation-delay: unset;
    div {
      width: 100%;
      border-bottom: 1px solid ${pallete.black.B100}99;
      padding: 5px 0px;
      a {
        text-align: left;
        padding-left: 0px;
      }
      &:last-of-type {
        border: unset;
      }
    }
  }
  svg.globe_img_mobile {
    position: absolute;
    bottom: 90px;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation-name: ${slideInUp};
    animation-delay: 0.1s;
  }
`;
