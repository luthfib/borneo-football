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
        styleOverride={CovidProgram}
        button
        buttonText="Donate"
        heading="KALIMANTAN CHILDREN FIGHTING COVID – 19"
        content="Due to the COVID 19 outbreak life as we have known has changed and at Borneo Football International Academy, we have been in the process of adapting to the new arising needs to better serve our young participants.

        We shifted the focus of our activities to ensure the safety of all of our staff and beneficiaries by providing COVID 19 educational information to all participants related with the prevention of the virus transmission.
        
        One of our main concerns is to support the children that are now isolated at home and to support the families that are currently unable to secure an income.
        
        BFIA team is working on a program to provide support to 1.200 Kalimantan children through, nutritional assistance, educational material,  masks, sports material and online tutorials. Additionally, we are distributing hygiene kits and food to local families.    
        
        Currently Borneo Football International Foundation is cooperating with Yayasan Usaha Mulia (YUM), the local Government, the Police, the Health Department and other institutions."
      ></Card>
      <Card
        heading="FOOTBALL"
        src="/static/images/Football.png"
        content="We hold weekly training sessions and players test their skills in official tournaments. We also organize regular football clinics and Summer camps where we match off against players from around Indonesia and overseas. Our ‘Happy Feet’ program supports players from low income families with shoes, uniforms, socks and jerseys."
      ></Card>
      <Card
        heading="HEALTH AND NUTRITION"
        src="/static/images/Health.png"
        content="Central Kalimantan has one of the highest stunting rates in Indonesia, and we found many of our young players were underweight and below average height. We initiated a program to address this issue, providing nutritional drinks during practice, information on healthy living and a health assessment to measure their physical development."
      ></Card>
      <Card
        heading="EDUCATION"
        src="/static/images/Education.png"
        content="In Central Kalimantan, nearly 1 in 3 children aged 7-15 drop out of school mainly due to economic pressures. We support our players with educational materials and school fee subsidies. Sponsorship is also provided for English and computer classes, vocational courses and conservation activities through our partner NGO-YUM (Yayasan Usaha Mulia)."
      ></Card>
    </CardholderStyles>
  );
}
