import { WhoWeAreContainer } from "./styles";
import { H2, H3 } from "../../styles";
import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";

function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <div className="parent">
        <AnimateInViewPort>
          <H3>who we are</H3>
          <H2>
            At Jetstream, we understand the complexities of modern logistics
          </H2>
        </AnimateInViewPort>
        <AnimateInViewPort delay={0.1}>
          <p>
            JVSaaS, our cutting-edge Software-as-a-Service solution, is crafted
            to simplify your supply chain management, providing unparalleled
            efficiency and control.
          </p>
        </AnimateInViewPort>
      </div>
      <AnimateInViewPort delay={0.1}>
        <img
          src={require("../../../../Assets/jetvision.png")}
          alt="Jetvision dashboard"
        />
      </AnimateInViewPort>
    </WhoWeAreContainer>
  );
}

export default WhoWeAre;
