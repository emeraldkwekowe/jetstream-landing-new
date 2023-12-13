import React, { memo } from "react";
import { LinkContainer } from "./styles";

interface Props {
  href: string;
  children: React.ReactNode;
  type?: "text" | "flat" | "border";
}

function Link(props: Props) {
  const { href, children, type = "text" } = props;

  return (
    <LinkContainer>
      <a href={href} data-testid="custom-link" className={type}>
        {children}
      </a>
    </LinkContainer>
  );
}

export default memo(Link);
