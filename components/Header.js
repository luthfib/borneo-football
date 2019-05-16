import PaypalButton from './PaypalButton'
import Logo from './Logo'
import styled from 'styled-components';

const HeaderStyled = styled.div`
  text-align: center;
  padding-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ATagStyled = styled.a`
  padding: 20px;
  color: white;
`

export default function Header() {
  return (
    <HeaderStyled>
      <Logo src='/static/images/Logo.png' height="175px"></Logo>
      <div>
        <ATagStyled>HOME</ATagStyled>
        <ATagStyled>ABOUT US</ATagStyled>
        <ATagStyled>OUR WORK</ATagStyled>
        <ATagStyled>GET INVOLVED</ATagStyled>
        <ATagStyled>PARTNER</ATagStyled>
        <ATagStyled>CONTACT</ATagStyled>
      </div>
      <PaypalButton >DONATE NOW</PaypalButton>
    </HeaderStyled>
  )
}
