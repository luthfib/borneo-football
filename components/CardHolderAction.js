import styled from "styled-components";
import CardAction from "../common/CardAction";

const CardHolderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    display: block;
  }
`;

export default function CardHolderAction(props) {
  return (
    <CardHolderStyled>
      <CardAction
        heading="SUPPORTER"
        content="Every gift, no matter how large or small, can help our boys and girls reach their personal goals"
        button="DONATE"
      ></CardAction>
      <CardAction
        heading="COACH"
        content="A gift of USD 195 supports our Child Development Fund and one child’s participation in all our programs. You can sponsor as many children as you like."
        button="DONATE"
      ></CardAction>
      <CardAction
        heading="GOALKEEPER"
        content="We welcome individuals and organizations willing to join us and support our main programs. If you are interested in making a major gift towards this goal please contact us for more information. We are pleased to offer official recognition to individuals, companies and NGO’s."
        button="DONATE"
      ></CardAction>
    </CardHolderStyled>
  );
}
