import styled from 'styled-components';
import Line from './LineStyles'
import PaypalButton from '../components/PaypalButton'

const ShowImage = props => {
  if (props.children) {
    return <CardItemImgStyles src={props.children} />;
  }
  return null;
};

const CardItemImgStyles = styled.img`
  height: 125px;
`;

const CardItemHeadingStyles = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 25px;
`;

const CardItemContentStyles = styled.p`
  color: white;
  font-weight: 100;
  font-size: 18px;
`;

const CardItemStyles = styled.div`
  width: 80%;

  padding: 25px;
`;

export default function CardItem(props) {
  return (
    <CardItemStyles>
      <CardItemHeadingStyles>{props.heading}</CardItemHeadingStyles>
      <Line primary />
      <ShowImage>{props.src}</ShowImage>
      <CardItemContentStyles>{props.content}</CardItemContentStyles>
    </CardItemStyles>
  );
}
