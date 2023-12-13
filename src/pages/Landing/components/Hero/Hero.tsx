import {
  AnimationContainer,
  AnimationParent,
  Dot,
  DotContainer,
  H1,
  H3,
  HeroContainer,
  P,
} from "./styles";
import { ReactComponent as Lines } from "../../../../Assets/Lines.svg";
import Link from "../Link/Link";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Hero() {
  const container = useRef<any>(null);
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
      <div style={{ position: "relative", zIndex: 1 }}>
        <H3>One platform. Unmatched excellence.</H3>
        <H1>E-logistics without the headaches</H1>
        <P>
          Revolutionize Your Supply Chain Management with JVSaaS. <br />
          Efficiency, Visibility, Control - Experience the Future of Logistics.
        </P>
        <Link href="here" type="flat">
          Get Started
        </Link>
      </div>

      <AnimationParent>
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
