import React, { memo } from "react";
import { LinkContainer } from "./styles";

interface Props {
  href: string;
  children: React.ReactNode;
  type?: "text" | "flat" | "border";
  style?: React.CSSProperties;
  className?: string;
}

function Link(props: Props) {
  const { href, children, type = "text", className, style } = props;

  return (
    <LinkContainer style={style} className={className}>
      <a
        href={href}
        data-testid="custom-link"
        className={`${type} ${className}`}
      >
        {children}
      </a>
    </LinkContainer>
  );
}

export default memo(Link);
