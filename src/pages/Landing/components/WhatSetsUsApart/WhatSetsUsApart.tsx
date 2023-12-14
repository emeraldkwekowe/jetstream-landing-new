import { H2, H3, P } from "../../styles";
import {
  TopSection,
  WhatSetsUsApartContainer,
  WhatSetsUsApartParent,
} from "./styles";
import Link from "../Link/Link";
import { ReactComponent as RapidTradeFinance } from "../../../../Assets/rapid_trade_finance.svg";
import { ReactComponent as AIAutomation } from "../../../../Assets/ai_automation.svg";
import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";
import FeaturesMarquee from "./components/FeaturesMarquee";
import WhyUseJVSaaS from "./components/WhyUseJVSaaS";

function WhatSetsUsApart() {
  return (
    <WhatSetsUsApartParent>
      <FeaturesMarquee />
      <AnimateInViewPort>
        <WhatSetsUsApartContainer>
          <TopSection>
            <AnimateInViewPort>
              <div style={{ maxWidth: 470, marginRight: 30 }}>
                <H3>Built for you</H3>
                <H2 className="primary_h2">What sets us apart</H2>
                <P>
                  At JetVision, we grasp the intricacies of today's logistics
                  landscape, delivering unmatched efficiency and control.
                </P>
                <Link href="#!" type="flat" style={{ marginTop: 30 }}>
                  Get started
                </Link>
              </div>
            </AnimateInViewPort>
            <div className="text">
              <AnimateInViewPort delay={0.2}>
                <section>
                  <AIAutomation />
                  <div>
                    <H2>AI-Enabled Automation</H2>
                    <P>
                      Harness AI's capabilities to streamline document handling.
                      Instantly convert a photo into a shipment booking, receive
                      real-time alerts on vessel status, and benefit from
                      AI-generated suggestions for precise document alignment
                      with client requests.
                    </P>
                  </div>
                </section>
              </AnimateInViewPort>
              <hr />
              <AnimateInViewPort delay={0.2}>
                <section>
                  <RapidTradeFinance />
                  <div>
                    <H2>Rapid Trade Finance</H2>
                    <P>
                      Unlock trade finance solutions seamlessly on our platform.
                      Connect clients to financing based on credit and shipment
                      data, significantly reducing wait times from 4 weeks to
                      just 48 hours.
                    </P>
                  </div>
                </section>
              </AnimateInViewPort>
            </div>
          </TopSection>
          <WhyUseJVSaaS />
        </WhatSetsUsApartContainer>
      </AnimateInViewPort>
    </WhatSetsUsApartParent>
  );
}

export default WhatSetsUsApart;
