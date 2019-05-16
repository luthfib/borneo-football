import Card from '../common/Card'
import styled from 'styled-components';

const CardholderStyles = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex-wrap: wrap;

`

export default function CardHolder(props) {
  return (
    <CardholderStyles>
      <Card heading='FOOTBALL' 
            src='/static/images/Football.png'
            content='We hold weekly training sessions and players test their skills in official tournaments. We also organize regular football clinics and Summer camps where we match off against players from around Indonesia and overseas. Our ‘Happy Feet’ program supports players from low income families with shoes, uniforms, socks and jerseys.'>
      </Card>
      <Card heading='HEALTH AND NUTRITION' 
            src='/static/images/Health.png'
            content='Central Kalimantan has one of the highest stunting rates in Indonesia, and we found many of our young players were underweight and below average height. We initiated a program to address this issue, providing nutritional drinks during practice, information on healthy living and a health assessment to measure their physical development.'>
      </Card>
      <Card heading='EDUCATION'
            src='/static/images/Education.png'
            content='In Central Kalimantan, nearly 1 in 3 children aged 7-15 drop out of school mainly due to economic pressures. We support our players with educational materials and school fee subsidies. Sponsorship is also provided for English and computer classes, vocational courses and conservation activities through our partner NGO-YUM (Yayasan Usaha Mulia).'>
      </Card>
    </CardholderStyles>
  )
}