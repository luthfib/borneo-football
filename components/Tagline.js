import styled from 'styled-components';
import Line from '../common/LineStyles';
import device from '../utils/ResponsiveHelpers';

const ContainerStyles = styled.div`
  display: block;
  width: 500px;
  padding-top: 8vh;

  @media ${device.tabletMd} {
    width: 90%;
    padding-top: 50px;
    margin: auto;
  }

  @media ${device.tabletSm} {
    padding-top: 50px;
    width: 60%;
    padding-left: 20px;
    margin: initial;
  }
`;

const FoundationNameStyles = styled.div`
  color: white;
  font-size: 60px;

  @media ${device.tabletMd} {
    font-size: 50px;
  }
`;

const TaglineStyles = styled.div`
  color: white;
  font-size: 35px;

  @media ${device.tabletSm} {
    font-size: 25px;
  }
`;

export default function Tagline(props) {
  return (
    <ContainerStyles>
      <Line />
      <FoundationNameStyles>{props.foundationName}</FoundationNameStyles>
      <TaglineStyles>{props.tagline}</TaglineStyles>
    </ContainerStyles>
  );
}
