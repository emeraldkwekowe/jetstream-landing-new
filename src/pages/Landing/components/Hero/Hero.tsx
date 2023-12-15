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
import { ReactComponent as Globe } from "../../../../Assets/Globe.svg";
import Link from "../Link/Link";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { H3 } from "../../styles";
import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const container = useRef<HTMLDivElement>(null!);

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
        <AnimateInViewPort delay={0.2}>
          <H3>One platform. Unmatched excellence.</H3>
        </AnimateInViewPort>
        <AnimateInViewPort delay={0.3}>
          <H1>E-logistics without the headaches</H1>
          <P>
            Revolutionize your supply chain management with JVSaaS. Efficiency,
            visibility, control - experience the future of logistics.
          </P>
        </AnimateInViewPort>
        <AnimateInViewPort delay={0.5}>
          <Link href="#!" type="flat">
            Get Started
          </Link>
        </AnimateInViewPort>
      </HeroContent>
      <Globe className="globe_img_mobile" />
      <AnimationParent style={{ bottom: `-${445 + scrollPosition / 4}px` }}>
        <AnimationContainer ref={container} id="animation-container">
          <MapPoint className="d1" />
          <MapPoint className="d2" />
          <MapPoint className="d3" />
          <MapPoint className="d4" />
        </AnimationContainer>
      </AnimationParent>
    </HeroContainer>
  );
}

const MapPoint = (props: { className: "d1" | "d2" | "d3" | "d4" }) => {
  const { className } = props;
  return (
    <DotContainer className={className}>
      <Dot />
      <Dot className="large" />
    </DotContainer>
  );
};

export default Hero;
