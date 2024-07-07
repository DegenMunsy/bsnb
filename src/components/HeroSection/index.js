import React from "react";
import Image from "../../images/bsnb3.png";
import { Button } from "../ButtonElements";
// import SponsorCarousel from "../Carousel/SponsorCarousel";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <HeroRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Board Shorts And Birdies</TopLine>
              <Heading lightText={true}>Charity Golf Tournament For Sakura Hospice House</Heading>
              <Subtitle darkText={false}>
                Join us August 23rd at The Bridges Tillsonburg for a day of golf, dinner, and prizes in support of Sakura House. Contact us today to register a foursome, sponsor a hole, or donate to the cause.
              </Subtitle>
              <BtnWrap>
                <Button
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                >
                  Contact
                </Button>
                {/* <Button
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                >
                  Hole Sponsor
                </Button>
                <Button
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                >
                  Dinner
                </Button>
                <Button
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                >
                  Donate
                </Button> */}
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Image} alt="Hero Image" />
            </ImgWrap>
          </Column2>
        </HeroRow>
      </HeroWrapper>
      {/* <SponsorCarousel /> Add the carousel here */}
    </HeroContainer>
  );
};

export default HeroSection;
