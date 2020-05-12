import {
  CardItemContentStyles,
  CardItemHeadingStyles,
  CardItemImgStyles,
  CardItemStyles,
} from "./CardItemStyles";
import Line from "../LineStyles";
import PaypalButton from "../../components/PaypalButton";

const ShowImage = (props) => {
  if (props.children) {
    return <CardItemImgStyles src={props.children} />;
  }
  return null;
};

const PaypalOverrideStyle = {
  marginTop: "25px",
  width: "200px",
};

export default function CardItem(props) {
  return (
    <CardItemStyles>
      <CardItemHeadingStyles> {props.heading} </CardItemHeadingStyles>
      <Line />
      <ShowImage>{props.src}</ShowImage>
      <CardItemContentStyles> {props.content} </CardItemContentStyles>
      {props.button ? (
        <PaypalButton overrideStyle={PaypalOverrideStyle}>
          {props.buttonText}
        </PaypalButton>
      ) : null}
    </CardItemStyles>
  );
}
