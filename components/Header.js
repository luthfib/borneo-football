import PaypalButton from './PaypalButton'
import Logo from './Logo'
import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'
import BurgerIcon from './BurgerIcon'

const HeaderStyled = styled.div`
  text-align: center;
  padding-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto; 

  @media ${device.tabletSm} {
    width: 100%;
    justify-content: unset;
  
  }
`

const ATagStyled = styled.a`
  padding: 20px;
  color: white;

  @media ${device.laptopLSm} {
    padding: 15px;
    font-size: 14px;
  }

  @media ${device.tabletMd} {
    padding: 13px;
    font-size: 13px;
  }

  @media ${device.tabletSm} {
    display: none;
  }
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        
        <HeaderStyled>
       
          <Logo src='/static/images/Logo.png' height="175px"></Logo>
          <div>
            <ATagStyled href="#">HOME</ATagStyled>
            <ATagStyled href="#About">ABOUT US</ATagStyled>
            <ATagStyled href="#OurWork">OUR WORK</ATagStyled>
            <ATagStyled href="#GetInvolved">GET INVOLVED</ATagStyled>
            <ATagStyled href="#OurPartners">PARTNER</ATagStyled>
          </div>
          <PaypalButton >DONATE NOW</PaypalButton>
        </HeaderStyled>
      </div>
    )
  }
}