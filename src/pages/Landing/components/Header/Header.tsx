import { memo } from "react";
import { HeaderContainer, LogoContainer, Nav } from "./styles";
import { ReactComponent as Logo } from "../../../../Assets/jetstream.svg";
import { ReactComponent as MoreIcon } from "../../../../Assets/more_icon.svg";
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
      {/*TODO: Remove useless links*/}
      <Link href="hfhfhf" className="flat">
        Get started
      </Link>
      <Link href="#!" className="more">
        <MoreIcon height="25" width="25" style={{ marginTop: 5 }} />
      </Link>
    </HeaderContainer>
  );
}

export default memo(Header);
