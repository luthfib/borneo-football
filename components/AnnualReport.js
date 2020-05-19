import styled from 'styled-components';
import { Button } from '../common/ButtonStyles';
import device from '../utils/ResponsiveHelpers';
import React, { useState } from 'react';


const ContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  @media ${device.tabletSm} {
    flex-direction: column;
  }
`;

const AnnualReportStyles = styled.div`
  width: 50%;
  background: linear-gradient(0deg, rgba(0,20,50,0.3),rgba(0,20,50,0.3)),
    url('/static/images/Covid19.jpg');
  background-size: cover;
  background-position: center center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tabletSm} {
    width: 100%;
    padding-bottom: 50px;
  }
`;

const BrochureStyles = styled.div`
  width: 50%;
  background: black;
  background-size: cover;
  background-position: center center;
  min-height: 50vh;

  @media ${device.tabletSm} {
    width: 100%;
  }
`;

const HeaderStyles = styled.h1`
  font-size: 50px;
  color: white;
  padding-bottom: 25px;
  font-weight: 400;

  @media ${device.mobileLg} {
    font-size: 28px;
  }
`;

const ParagraphStyles = styled.p`
  color: lightgrey;
  width: 50%;
  font-weight: 100;
`;

const BrochureLeftStyles = styled.div`
  width: 50%;
`;

const BrochureContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 50px;
`;

const AnnualContainerStyles = styled.div`
  padding-left: 50px;
  padding-bottom: 50px;
`;

const ButtonContainer = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-left: ${props => (props.padding_left ? props.padding_left : '')};
`;

const VideActiveSectionStyled = styled.iframe`
  width: 50%;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tabletSm} {
    width: 100%;
}
`

const VideoInactiveSection = (props) => {
  return (
    <AnnualReportStyles>
    <AnnualContainerStyles>
      <HeaderStyles>COVID-19 <br/> Outreach</HeaderStyles>
    </AnnualContainerStyles>
    <ButtonContainer blue padding_left="50px">
        <Button blue setVideoIsActive={props.setVideoIsActive}>Watch</Button>
    </ButtonContainer>
  </AnnualReportStyles>
  )
}

const VideoActiveSection = () => {
  return (
    <VideActiveSectionStyled src="https://www.youtube.com/embed/ylfXemydqkk" frameBorder="0" allowfullscreen allow="autoplay"></VideActiveSectionStyled>
  )
}

export default function Container(props) {
  const [videoIsActive, setVideoIsActive] = useState(false);


  return (
    <ContainerStyles>
      {videoIsActive ? <VideoActiveSection /> : <VideoInactiveSection setVideoIsActive={setVideoIsActive} />}
      <BrochureStyles>
        <BrochureContainerStyles>
          <HeaderStyles>... AND THERE'S MORE!</HeaderStyles>
          <BrochureLeftStyles>
            <ParagraphStyles>
              To find out more about our programs and how you, your company or
              organization can sponsor BFIA, please downlaod our brochure
            </ParagraphStyles>
            <a
              href="/static/pdfs/BFIBROCHUREWEB.pdf"
              download="BFIBrochure.pdf"
              target="_blank"
            >
              <Button blue>DOWNLOAD</Button>
            </a>
          </BrochureLeftStyles>
          <img
            src="/static/images/BrochureCover.jpg"
            height="175px"
            alt="Brochure cover"
          />
        </BrochureContainerStyles>
      </BrochureStyles>
    </ContainerStyles>
  );
}
