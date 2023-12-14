import { memo, useEffect, useState } from "react";
import { FeaturesMarqueeContainer, FeaturesMarqueeParent } from "../styles";
import { H3 } from "../../../styles";

function FeaturesMarquee() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(Math.round(position));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FeaturesMarqueeParent>
      <FeaturesMarqueeContainer style={{ left: `${scrollPosition - 4000}px` }}>
        {[...Array(3)].map(() => (
          <div>
            <H3 style={{ paddingLeft: 40 }}>&raquo;</H3>
            <H3>Seamless integration</H3>
            <H3>&raquo;</H3>
            <H3>Customized Solutions</H3>
            <H3>&raquo;</H3>
            <H3>Scalability for growth</H3>
            <H3>&raquo;</H3>
            <H3>Reliable 24/7 Support</H3>
          </div>
        ))}
      </FeaturesMarqueeContainer>
    </FeaturesMarqueeParent>
  );
}

export default memo(FeaturesMarquee);
