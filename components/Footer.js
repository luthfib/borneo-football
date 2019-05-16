import Logo from '../components/Logo'
import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'

const DonateLayoutStyles = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 90%;

  @media ${device.tabletSm} {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ContainerStyles = styled.div`
  background: rgba(223, 0, 18, 1);
  color: white;
  padding: 25px;

`

export default function Footer(props) {
    return (
        <ContainerStyles>
            <DonateLayoutStyles>
                <Logo src='/static/images/Logo.png' height="75px" />
                <p>The Power of Football <br/>  Inspiring the Next Generation</p>
            </DonateLayoutStyles>
        </ContainerStyles>
    )
}
