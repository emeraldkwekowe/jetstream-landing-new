import { memo, useState } from "react";
import { HeaderContainer, LogoContainer, MenuContainer, Nav } from "./styles";
import { ReactComponent as Logo } from "../../../../Assets/jetstream.svg";
import { ReactComponent as MoreIcon } from "../../../../Assets/more_icon.svg";
import Link from "../Link/Link";
import { ReactComponent as Globe } from "../../../../Assets/Globe.svg";
import { ReactComponent as Close } from "../../../../Assets/close.svg";

const HEADER_LINKS = [
  { title: "Company", href: "#!" },
  { title: "Products", href: "#!" },
  { title: "Pricing", href: "#!" },
  { title: "Contact", href: "#!" },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer className={`${openMenu && "mobile_menu"}`}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav className="primary">
        {HEADER_LINKS.map((link) => (
          <Link href={link.href} type="text">
            {link.title}
          </Link>
        ))}
      </Nav>
      <Link href="#!" className="flat">
        Get started
      </Link>
      <Link href="#!" className="more">
        <MoreIcon
          className={`${!openMenu && "active"}`}
          onClick={() => {
            setOpenMenu(true);
            document.body.style.overflow = "hidden";
          }}
        />
        <Close
          className={`${openMenu && "active"}`}
          onClick={() => {
            setOpenMenu(false);
            document.body.style.overflow = "auto";
          }}
        />
      </Link>
      {openMenu && <Menu />}
    </HeaderContainer>
  );
}

function Menu() {
  return (
    <MenuContainer>
      <Nav>
        {HEADER_LINKS.map((link) => (
          <Link href={link.href} type="text">
            {link.title}
          </Link>
        ))}
      </Nav>
      <Globe className="globe_img_mobile" />
    </MenuContainer>
  );
}

export default memo(Header);
