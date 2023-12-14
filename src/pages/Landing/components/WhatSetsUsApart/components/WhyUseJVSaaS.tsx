import { memo } from "react";
import { WhyUseJVSaaSContainer } from "../styles";
import { H2, H3, P } from "../../../styles";
import { ReactComponent as LinkArrow } from "../../../../../Assets/LinkArrow.svg";
import { ReactComponent as SVGJetvision1 } from "../../../../../Assets/svg_jetvision1.svg";
import { ReactComponent as SVGJetvision2 } from "../../../../../Assets/svg_jetvision2.svg";
import { ReactComponent as SVGJetvision3 } from "../../../../../Assets/svg_jetvision3.svg";
import { ReactComponent as SVGJetvision4 } from "../../../../../Assets/svg_jetvision4.svg";
import { ReactComponent as SVGJetvision5 } from "../../../../../Assets/svg_jetvision5.svg";
import { ReactComponent as SVGJetvision6 } from "../../../../../Assets/svg_jetvision6.svg";
import AnimateInViewPort from "../../../../../components/AnimateInViewPort/AnimateInViewPort";

function WhyUseJVSaaS() {
  return (
    <AnimateInViewPort>
      <WhyUseJVSaaSContainer>
        <div className="flex">
          <AnimateInViewPort delay={0.2}>
            <div style={{ maxWidth: 400 }}>
              <H3>Benefits to your business</H3>
              <H2>Why choose JVSaaS for your logistics needs?</H2>
            </div>
          </AnimateInViewPort>
          <AnimateInViewPort delay={0.4}>
            <a href="#!">
              Talk to Sales
              <LinkArrow />
            </a>
          </AnimateInViewPort>
        </div>
        <AnimateInViewPort delay={0.2}>
          <div className="flex" style={{ marginTop: 40 }}>
            <Feature
              icon={<SVGJetvision6 />}
              text="Enhance satisfaction and loyalty for modern clients, who require digitized solutions."
            />
            <Feature
              icon={<SVGJetvision3 />}
              text="Differentiate your services with faster payment and document processing time, driven by automation."
            />
            <Feature
              icon={<SVGJetvision5 />}
              text="Improve customer service without increasing your staff size with automated communications."
            />
            <Feature
              icon={<SVGJetvision4 />}
              text="Boost your client's shipment volumes, and your revenues, with trade finance products."
            />
            <Feature
              icon={<SVGJetvision1 />}
              text="Reduce risks for your clients, and add profit to your business, by reselling cargo insurance."
            />
            <Feature
              icon={<SVGJetvision2 />}
              text="Become eligible to acquire referred clients from Jetstream's network of freight forwarders in other trade corridors."
            />
          </div>
        </AnimateInViewPort>
      </WhyUseJVSaaSContainer>
    </AnimateInViewPort>
  );
}

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div>
      {icon}
      <P>{text}</P>
    </div>
  );
};

export default memo(WhyUseJVSaaS);
