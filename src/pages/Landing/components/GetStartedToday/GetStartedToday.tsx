import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";
import { H2, H3, P } from "../../styles";
import { Introduction } from "../Jetvision/styles";
import Link from "../Link/Link";
import { GetStartedTodayContainer } from "./styles";
import { ReactComponent as Globe2 } from "../../../../Assets/Globe2.svg";
import { useEffect, useState } from "react";

function GetStartedToday() {
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
    <GetStartedTodayContainer>
      <Introduction>
        <AnimateInViewPort delay={0.3}>
          <H3>Get Started Today</H3>
          <H2>Ready to Elevate Your Logistics Experience?</H2>
          <P>
            Experience the power of JVSaaS. Get started today for a more
            efficient and streamlined supply chain
          </P>
        </AnimateInViewPort>
        <AnimateInViewPort delay={0.1}>
          <div className="flex">
            <Link href="#!" type="flat" style={{ marginRight: 10 }}>
              Request a demo
            </Link>
            <Link href="#!" type="flat" className="black">
              Get started
            </Link>
          </div>
        </AnimateInViewPort>
      </Introduction>
      <Globe2
        style={{
          transform: `rotate(${scrollPosition / 4}deg) scale(${
            scrollPosition / 4200
          })`,
        }}
      />
    </GetStartedTodayContainer>
  );
}

export default GetStartedToday;
