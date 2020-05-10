import styled from 'styled-components';
import PaypalButton from './PaypalButton';
import Logo from './Logo';
import device from '../utils/ResponsiveHelpers';

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
`;

const ATagStyled = styled.a`
  padding: 20px;
  color: white;
  text-decoration: none;

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
`;

const CustomPaypalButton = styled(PaypalButton)`
  @media (max-width: 850px) {
    display: none;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderStyled>
          <Logo src="/static/images/Logo.png" height="175px"></Logo>
          <div>
            <ATagStyled href="#">HOME</ATagStyled>
            <ATagStyled href="#About">ABOUT US</ATagStyled>
            <ATagStyled href="#OurWork">OUR WORK</ATagStyled>
            <ATagStyled href="#GetInvolved">GET INVOLVED</ATagStyled>
            <ATagStyled href="#OurPartners">PARTNER</ATagStyled>
          </div>
          <CustomPaypalButton>DONATE NOW</CustomPaypalButton>
        </HeaderStyled>
      </div>
    );
  }
}
