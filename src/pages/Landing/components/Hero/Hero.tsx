import { AnimationContainer, H1, H3, HeroContainer, P } from "./styles";
import { ReactComponent as Lines } from "../../../../Assets/Lines.svg";
import Link from "../Link/Link";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import AppLoader from "../../../../components/AppLoader/AppLoader";

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
        <AnimationContainer
          ref={container}
          id="animation-container"
        ></AnimationContainer>
      </div>
    </HeroContainer>
  );
}

export default Hero;
