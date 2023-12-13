import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { AppLoaderContainer } from "./styles";
import { ReactComponent as Logo } from "../../Assets/jetstream.svg";

function AppLoader() {
  const container = useRef<any>(null);
  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("../../Assets/lottie/loader_jetstream.json"),
      autoplay: true,
      container: container.current,
      loop: true,
      renderer: "svg",
    });
  }, []);
  return (
    <AppLoaderContainer>
      <div ref={container} id="animation-container"></div>
      <Logo className="logo" />
    </AppLoaderContainer>
  );
}

export default AppLoader;
