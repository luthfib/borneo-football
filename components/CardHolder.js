import styled from "styled-components";
import Card from "../common/Card";

const CardholderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
`;

const CovidProgram = {
  width: "100%",
  marginBottom: "20px",
  padding: "20px",
};

export default function CardHolder(props) {
  return (
    <CardholderStyles id="Covid-19">
      <Card
        heading="FOOTBALL"
        src="/static/images/Football.png"
        content="We hold weekly training sessions and players test their skills in official tournaments. We also organize regular football clinics and Summer camps where we match off against players from around Indonesia and overseas. Our ‘Happy Feet’ program supports players from low income families with shoes, uniforms, socks and jerseys."
      ></Card>
      <Card
        heading="HEALTH AND NUTRITION"
        src="/static/images/Health.png"
        content="Central Kalimantan has one of the highest stunting rates in Indonesia, and we found many of our young players were underweight and below average height. Although stunting cannot be reversed, nonetheless through sports, nutritional supplements and health assessment and education, the BFIA has initiated a program to support the good health of our players. "
      ></Card>
      <Card
        heading="EDUCATION"
        src="/static/images/Education.png"
        content="In Central Kalimantan, nearly 1 in 3 children aged 7-15 drop out of school mainly due to economic pressures. We support our players with educational materials and school fee subsidies. Sponsorship is also provided for English and computer classes, vocational courses and conservation activities working together with our partners."
      ></Card>
    </CardholderStyles>
  );
}
