import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";
import { H2, H3, P } from "../../styles";
import Link from "../Link/Link";
import { ReactComponent as CentralizeClientDocuments } from "../../../../Assets/centralize_client_documents.svg";
import { ReactComponent as AutomateShippingDocument } from "../../../../Assets/automate_shipping_document.svg";
import { ReactComponent as ImplementVesselUpdates } from "../../../../Assets/implement_vessel_updates.svg";
import {
  FeatureDiv,
  FeatureRow,
  Features,
  Introduction,
  JetvisionContainer,
} from "./styles";

function Jetvision() {
  return (
    <JetvisionContainer>
      <Introduction>
        <AnimateInViewPort>
          <H3>Our Solution</H3>
          <H2>Introducing JetVision</H2>
          <P>
            Supercharge your African logistics business with our automation
            platform. Boost services, from trade finance to insurance, for
            enhanced client support.
          </P>
        </AnimateInViewPort>
        <AnimateInViewPort delay={0.1}>
          <Link href="#!" type="flat">
            Get started
          </Link>
        </AnimateInViewPort>
      </Introduction>
      <Features>
        <FeatureRow>
          <AnimateInViewPort delay={0.1}>
            <FeatureDiv className="black">
              <H3>Centralize Client Documents</H3>
              <P>
                Get and store documents from your clients in one place. Locate
                historical documents with a few clicks of a mouse.
              </P>
              <CentralizeClientDocuments />
            </FeatureDiv>
          </AnimateInViewPort>

          <AnimateInViewPort delay={0.1}>
            <FeatureDiv>
              <ImplementVesselUpdates className="icon" />
              <H3>Implement Vessel Updates</H3>
              <P>
                Subscribe to automated updates on vessel arrival and other key
                milestones, pushed to your mobile phone. Send some or all of
                those updates to your clients, automatically.
              </P>
            </FeatureDiv>
          </AnimateInViewPort>
        </FeatureRow>
        <FeatureRow>
          <AnimateInViewPort delay={0.2}>
            <FeatureDiv>
              <AutomateShippingDocument className="icon" />
              <H3>Automate Shipping Document</H3>
              <P>
                Leverage automation to digitally scan and generate shipping
                documents, and streamline the process of incorporating
                corrections and changes
              </P>
            </FeatureDiv>
          </AnimateInViewPort>
          <AnimateInViewPort delay={0.2}>
            <FeatureDiv className="blue">
              <img
                src={require("../../../../Assets/track_shipment.png")}
                alt="Support shipment growth"
              />
              <H3>Support Shipment Growth</H3>
              <P>
                Help your clients grow their shipment volumes by accessing trade
                finance and insurance products to optimize cash flow and manage
                risks.
              </P>
            </FeatureDiv>
          </AnimateInViewPort>
        </FeatureRow>
      </Features>
    </JetvisionContainer>
  );
}

export default Jetvision;
