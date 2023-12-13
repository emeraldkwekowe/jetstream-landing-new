import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { AppLoaderContainer } from "./styles";

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
    <AppLoaderContainer
      ref={container}
      id="animation-container"
    ></AppLoaderContainer>
  );
}

export default AppLoader;
