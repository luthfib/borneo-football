import { BlueButton } from '../common/ButtonStyles'
import styled from 'styled-components';

const DonateLayoutStyles = styled.div`
  background: rgba(223, 0, 18, 1);
  color: white;
  padding: 45px;
  column-count: 3;
`

export default function DonateLayout(props) {
  return (
    <DonateLayoutStyles>
      <BlueButton >DONATE</BlueButton>
      <h2>Your gift will help these children reach their life goals!</h2> 
    </DonateLayoutStyles>
  )
}
