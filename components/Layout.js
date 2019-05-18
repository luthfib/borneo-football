import Header from './Header'
import Tagline from './Tagline'
import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'
import BurgerIcon from './BurgerIcon'

const LayoutStyles = styled.div`
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.3), rgba(0, 20, 50, 0.3)), url(/static/images/Cover.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center center;
  min-height: 400px;
`

const ContainerStyles = styled.div`
  width: fit-content;
  margin: auto;

  @media ${device.tabletSm} {
    width: 100%;
  }
`

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <LayoutStyles>
        <ContainerStyles>
        <BurgerIcon></BurgerIcon>
          <Header />
          <Tagline foundationName="Borneo Football" tagline="The Power of Football Inspiring the Next Generation" />
        </ContainerStyles>
      </LayoutStyles>
    )
  }
}

