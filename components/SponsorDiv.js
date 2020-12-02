import styled from "styled-components";
import device from "../utils/ResponsiveHelpers";

const SponsorImgStyles = styled.img`
  height: 160px;
  padding: 20px;

  @media ${device.tabletMd} {
    height: 130px;
  }

  @media ${device.tabletSm} {
    height: 110px;
  }

  @media ${device.mobileMd} {
    height: 80px;
  }
`;

const SponsorDivStyles = styled.div`
  margin: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: fit-content;

  :hover {
    box-shadow: 0px 8px 15px lightblue;
    cursor: pointer;
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  flex-wrap: wrap;
`;

export default function SponsorDiv(props) {
  return (
    <ContainerStyle>
      <a
        href="https://www.susiladharma.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/SDIA.jpg" />
        </SponsorDivStyles>
      </a>
      <a
        href="http://beginforgood.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/BeginForGood.jpg" />
        </SponsorDivStyles>
      </a>

      <a
        href="http://australianvolunteers.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/AustralianVolunteers.png" />
        </SponsorDivStyles>
      </a>
      <a href="https://unesco.org" target="_blank" rel="noopener noreferrer">
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/UNESCO.jpg" />
        </SponsorDivStyles>
      </a>
      <a
        href="https://yumindonesia.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/YUM.png" />
        </SponsorDivStyles>
      </a>

      <a href="" target="_blank" rel="noopener noreferrer">
        <SponsorDivStyles>
          <SponsorImgStyles src="/static/images/KUB.png" />
        </SponsorDivStyles>
      </a>
    </ContainerStyle>
  );
}
