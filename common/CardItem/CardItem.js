import {
  CardItemContentStyles,
  CardItemHeadingStyles,
  CardItemImgStyles,
  CardItemStyles,
} from './CardItemStyles';
import Line from '../LineStyles';

const ShowImage = props => {
  if (props.children) {
    return <CardItemImgStyles src={props.children} />;
  }
  return null;
};

export default function CardItem(props) {
  return (
    <CardItemStyles>
      <CardItemHeadingStyles> {props.heading} </CardItemHeadingStyles>
      <Line />
      <ShowImage>{props.src}</ShowImage>
      <CardItemContentStyles> {props.content} </CardItemContentStyles>
    </CardItemStyles>
  );
}
