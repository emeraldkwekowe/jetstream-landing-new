import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 90px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 5.5% 5px;
`;

export const LogoContainer = styled.a`
  width: 200px;
  display: block;
  svg {
    width: 187px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  min-width: 37%;
  justify-content: space-between;
  align-items: center;
`;
