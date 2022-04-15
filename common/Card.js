import CardItem from "./CardItem/CardItem";
import styled from "styled-components";

const CardStyles = styled.div`
  width: 33%;
  background: rgb(226, 241, 255);

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

function Card(props) {
  const { src, heading, content, button } = props;
  return (
    <CardStyles style={props.styleOverride}>
      <CardItem
        src={src}
        heading={heading}
        content={content}
        button={button}
        buttonText={props.buttonText}
      ></CardItem>
    </CardStyles>
  );
}

export default Card;
