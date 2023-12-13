import { memo } from "react";
import { HeaderContainer, LogoContainer, Nav } from "./styles";
import { ReactComponent as Logo } from "../../../../Assets/jetstream.svg";
import Link from "../Link/Link";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>
        <Link href="hello" type="text">
          Company
        </Link>
        <Link href="hello" type="text">
          Products
        </Link>
        <Link href="hello" type="text">
          Pricing
        </Link>
        <Link href="hello" type="text">
          Contact
        </Link>
      </Nav>
      <Link href="hfhfhf" type="flat">
        Get started
      </Link>
    </HeaderContainer>
  );
}

export default memo(Header);
