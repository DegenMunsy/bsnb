import React from "react";
import Icon1 from "../../images/guysoncourse.png";
import Icon2 from "../../images/golfholesponsor.png";
import Icon3 from "../../images/golfhat.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ContactCard,
  ContactInfo,
  ContactH2,
  ContactP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Contact</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Register a Foursome</ServicesH2>
          <ServicesP>Book a foursome for $500.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Sponsor a Hole</ServicesH2>
          <ServicesP>Sponsor a hole for $200.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Become a Hat Sponsor</ServicesH2>
          <ServicesP>Get your logo on our tournament hats for $500.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <ContactCard>
        <ContactH2>Sign Up for the Tournament</ContactH2>
        <ContactP>
          Reach out to us to sign up for the tournament or for sponsorship
          opportunities.
        </ContactP>
        <ContactInfo>
          <p>Email: bill.bacon@martinrea.com</p>
          <p>Phone: (226) 231-7034</p>
          <p>Tournament Address: 101 John Pound Rd, Tillsonburg, ON N4G 4H3</p>
        </ContactInfo>
      </ContactCard>
    </ServicesContainer>
  );
};

export default Services;
