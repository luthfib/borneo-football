import PaypalButton from '../components/PaypalButton'
import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'

const DonateLayoutStyles = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 80%;

  @media ${device.tabletSm} {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ContainerStyles = styled.div`
  background: rgba(223, 0, 18, 1);
  color: white;
  padding: 45px;

`

export default function DonateLayout(props) {
  return (
    <ContainerStyles>
        <DonateLayoutStyles>
          <PaypalButton {...props} blue fontSize="25px" marginRight="100px">DONATE</PaypalButton>
          <h2>Your gift will help these children reach their life goals!</h2>
        </DonateLayoutStyles>
    </ContainerStyles>
  )
}
