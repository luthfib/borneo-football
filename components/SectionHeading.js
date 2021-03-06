import styled from 'styled-components';
import Line from '../common/LineStyles'
import device from '../utils/ResponsiveHelpers';

const ShowImage = props => {
  if (props.children) {
    return (
      <a href="mailto:borneo.football@gmail.com?subject=">
        <ConditionalImageStyles src={props.children} />
      </a>
    );
  }
  return null;
};

const SectionHeadingStyles = styled.div`
  width: 80%;
  padding-bottom: 35px;
  padding-top: 30px;
`;

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderStyles = styled.h1`
  color: rgba(223, 0, 18, 1);
  font-size: 60px;
  margin-bottom: 10px;
  font-weight: 500;

  @media ${device.mobileMd} {
    font-size: 50px;
  }
`;

const ContentStyles = styled.p`
  color: #616075;
  font-size: 29px;
  font-weight: 100;

  @media ${device.tabletSm} {
    font-size: 27px;
  }

  @media ${device.mobileLg} {
    font-size: 25px;
  }
`;

const ConditionalImageStyles = styled.img`
  height: 65px;
  padding-top: 25px;
  padding-bottom: 50px;
`;

export default function SectionHeading(props) {
  return (
    <ContainerStyled id={props.navID}>
      <SectionHeadingStyles>
        <Line />
        <HeaderStyles>{props.heading}</HeaderStyles>
        <ContentStyles>{props.children}</ContentStyles>
        <ShowImage>{props.src}</ShowImage>
      </SectionHeadingStyles>
    </ContainerStyled>
  );
}
