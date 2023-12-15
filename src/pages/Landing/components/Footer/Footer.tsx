import AnimateInViewPort from "../../../../components/AnimateInViewPort/AnimateInViewPort";
import { H3 } from "../../styles";
import { FootNote, FooterContainer, FooterMain } from "./styles";
import { ReactComponent as FacebookIcon } from "../../../../Assets/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../../Assets/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../../../Assets/twitter.svg";

function Footer() {
  return (
    <FooterContainer>
      <FooterMain>
        <AnimateInViewPort delay={0.3}>
          <div className="flex" style={{ justifyContent: "unset" }}>
            <div style={{ minWidth: 330 }}>
              <img
                src={require("../../../../Assets/jetstream_footer.png")}
                alt="Jetstream logo"
              />
              <div>
                <FacebookIcon />
                <LinkedinIcon />
                <TwitterIcon />
              </div>
            </div>
            <section className="flex">
              <div>
                <H3>Navigation</H3>
                <a href="#!">Company</a>
                <a href="#!">Products</a>
                <a href="#!">Pricing</a>
                <a href="#!">Contact</a>
              </div>
              <div>
                <H3>Resources</H3>
                <a href="#!">FAQs</a>
                <a href="#!">Articles</a>
              </div>
              <div>
                <H3>Contact Us</H3>
                <a href="#!">+233 55 568 3601</a>
                <a href="#!">jetstreamafrica.com</a>
                <a href="#!">enquiry@jetstreamafrica.com</a>
              </div>
              <div>
                <H3>Our Locations</H3>
                <p>
                  Faculty Building, Meridian Road, Community One, Tema, Ghana.
                </p>
                <p>
                  No. 10 Workstation, Maryland Mall, 350-360 Ikorodu Rd, Ikeja,
                  Lagos
                </p>
              </div>
            </section>
          </div>
        </AnimateInViewPort>
      </FooterMain>
      <FootNote>
        <AnimateInViewPort delay={0.2}>
          <div className="flex">
            <div>
              <a href="#!">Privacy Policy</a>
              <a href="#!">Terms & Conditions</a>
              <a href="#!">Usage</a>
            </div>
            <p>&copy; 2023 Jetstream Logistics. All Rights Reserved.</p>
          </div>
        </AnimateInViewPort>
      </FootNote>
    </FooterContainer>
  );
}

export default Footer;
