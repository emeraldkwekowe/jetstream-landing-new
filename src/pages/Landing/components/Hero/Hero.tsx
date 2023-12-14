import {
  AnimationContainer,
  AnimationParent,
  Dot,
  DotContainer,
  H1,
  HeroContainer,
  HeroContent,
  P,
} from "./styles";
import { ReactComponent as Lines } from "../../../../Assets/Lines.svg";
import Link from "../Link/Link";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { H3 } from "../../styles";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(Math.round(position));
  };

  const container = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("../../../../Assets/lottie/hero_globe.json"),
      autoplay: true,
      container: container.current,
      loop: true,
      renderer: "svg",
    });
  }, []);
  return (
    <HeroContainer>
      <Lines className="lines" />
      <HeroContent>
        <H3>One platform. Unmatched excellence.</H3>
        <H1>E-logistics without the headaches</H1>
        <P>
          Revolutionize Your Supply Chain Management with JVSaaS. Efficiency,
          Visibility, Control - Experience the Future of Logistics.
        </P>
        <Link href="#!" type="flat">
          Get Started
        </Link>
      </HeroContent>

      <AnimationParent style={{ bottom: `-${445 + scrollPosition / 4}px` }}>
        <AnimationContainer ref={container} id="animation-container">
          <MapPoint className="d1" />
          <MapPoint className="d2" />
        </AnimationContainer>
      </AnimationParent>
    </HeroContainer>
  );
}

const MapPoint = (props: { className: "d1" | "d2" }) => {
  const { className } = props;
  return (
    <DotContainer className={className}>
      <Dot />
      <Dot className="large" />
    </DotContainer>
  );
};

export default Hero;
