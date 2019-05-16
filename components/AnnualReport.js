import styled from 'styled-components';
import { Button } from '../common/ButtonStyles'
import device from '../utils/ResponsiveHelpers'

const ContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  @media ${device.tabletSm} {
    flex-direction: column;
  }
`

const AnnualReportStyles = styled.div`
  width: 50%;
  background: linear-gradient(0deg, rgba(200, 0, 0, 0.5), rgba(200, 0, 0, 0.5)), url('/static/images/AnnualReport.jpg');
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
`

const BrochureStyles = styled.div`
  width: 50%;
  background: black;
  background-size: cover;
  background-position: center center;
  min-height: 50vh;

  @media ${device.tabletSm} {
    width: 100%;
  }
`

const HeaderStyles = styled.h1`
  font-size: 50px;
  color: white;
  padding-bottom: 25px;
  font-weight: 400;
`

const ParagraphStyles = styled.p`
  color: lightgrey;
  width: 50%;
  font-weight: 100;
`

const BrochureLeftStyles = styled.div`
  width: 50%;
`

const BrochureContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 50px;
`

const AnnualContainerStyles = styled.div`
  padding-left: 50px;
  padding-bottom: 50px;
`

const ButtonContainer = styled.div`
  padding: ${props => props.padding ? props.padding : ""};
  padding-left: ${props => props.padding_left ? props.padding_left : ""};
`

export default function Container(props) {
  return (
    <ContainerStyles>
      <AnnualReportStyles>
        <AnnualContainerStyles>
          <HeaderStyles>2017 ANNUAL REPORT</HeaderStyles>
        </AnnualContainerStyles>
        <ButtonContainer blue padding_left="50px">
          <a href="/static/pdfs/2017AnnualReport.pdf" download="AnnualReport" target="_blank">
            <Button blue>DOWNLOAD</Button>
          </a>
        </ButtonContainer>
      </AnnualReportStyles>
      <BrochureStyles>
        <BrochureContainerStyles>
          <HeaderStyles>... AND THERE'S MORE!</HeaderStyles>
          <BrochureLeftStyles>
            <ParagraphStyles>To find out more about our programs and how you, your company or organization can sponsor BFIA, please downlaod our brochure</ParagraphStyles>
            <a href="/static/pdfs/BFIBROCHUREWEB.pdf" download="BFIBrochure.pdf" target="_blank">
              <Button blue>DOWNLOAD</Button>
            </a>
          </BrochureLeftStyles>
          <img src='/static/images/BrochureCover.jpg' height="175px" />
        </BrochureContainerStyles>
      </BrochureStyles>
    </ContainerStyles>
  )
}

