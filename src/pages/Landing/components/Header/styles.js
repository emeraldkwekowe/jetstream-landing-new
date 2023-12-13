import styled from "styled-components";
import { slideInUp } from "../../../../helpers/animations";

export const HeaderContainer = styled.header`
  height: 90px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 5.5% 5px;
  a.flat {
    animation-delay: 0.3s;
    animation-name: ${slideInUp};
  }
`;

export const LogoContainer = styled.a`
  width: 200px;
  display: block;
  animation-name: ${slideInUp};
  svg {
    width: 187px;
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
