import styled from 'styled-components';
import PaypalButton from './PaypalButton';

const HeaderStyled = styled.header`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 3;

  @media only screen and (min-width: 850px) {
    display: none;
  }
`;

const MenuStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: rgba(223, 0, 18, 1);
  text-align: center;

  clear: both;
  max-height: 0;
  height: 100vh;
  transition: max-height 0.2s ease-out;

  @media (min-width: 850px) {
    clear: none;
    float: right;
    max-height: none;
  }
`;

const MenuItemAStyled = styled.a`
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
  color: white;

  :hover {
    background-color: rgba(22, 0, 18, 0.1);
  }

  @media (min-width: 850px) {
    padding: 20px 30px;
  }
`;

const MenuIconStyled = styled.label`
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  background: black;
  position: relative;
  user-select: none;

  @media (min-width: 850px) {
    display: none;
  }
`;

const NaviconStyled = styled.span`
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  :before,
  :after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  :before {
    top: 5px;
  }

  :after {
    top: -5px;
  }
`;

const MenuBtnStyled = styled.input`
  display: none;

  :checked ~ ${MenuStyled} {
    max-height: 100vh;
  }

  :checked ~ ${MenuIconStyled} ${NaviconStyled} {
    background: transparent;
  }

  :checked ~ ${MenuIconStyled} ${NaviconStyled}:before {
    transform: rotate(-45deg);
  }

  :checked ~ ${MenuIconStyled} ${NaviconStyled}:after {
    transform: rotate(45deg);
  }

  :checked ~ ${MenuIconStyled}:not(.steps) ${NaviconStyled}:before {
    top: 0;
  }
  :checked ~ ${MenuIconStyled}:not(.steps) ${NaviconStyled}:after {
    top: 0;
  }

  :hover {
    background-color: lightgray;
  }
`;

const ListStyled = styled.li`
  cursor: pointer;
`;

class BurgerIcon extends React.Component {
  state = {
    bgColor: 'transparent',
    checked: false,
  };

  onChange = () => {
    if (this.state.bgColor === 'transparent') {
      this.setState({ bgColor: 'rgba(223, 0, 18, 1)' });
    } else {
      this.setState({ bgColor: 'transparent' });
    }
  };

  changeVisibility = () => {
    if (this.state.checked === true) {
      this.setState({ checked: false });
      this.setState({ bgColor: 'transparent' });
    } else {
      this.setState({ checked: true });
      this.setState({ bgColor: 'rgba(223, 0, 18, 1)' });
    }
  };

  render() {
    return (
      <HeaderStyled style={{ backgroundColor: this.state.bgColor }}>
        <MenuBtnStyled
          type="checkbox"
          checked={this.state.checked}
          onChange={this.changeVisibility}
          id={MenuBtnStyled}
          onClick={this.onChange}
        ></MenuBtnStyled>
        <MenuIconStyled htmlFor={MenuBtnStyled}>
          <NaviconStyled></NaviconStyled>
        </MenuIconStyled>
        <MenuStyled>
          <ListStyled onClick={this.changeVisibility}>
            <MenuItemAStyled href="#"> HOME </MenuItemAStyled>
          </ListStyled>
          <ListStyled onClick={this.changeVisibility}>
            <MenuItemAStyled href="#About"> ABOUT US </MenuItemAStyled>
          </ListStyled>
          <ListStyled onClick={this.changeVisibility}>
            <MenuItemAStyled href="#OurWork"> OUR WORK </MenuItemAStyled>
          </ListStyled>
          <ListStyled onClick={this.changeVisibility}>
            <MenuItemAStyled href="#GetInvolved">
              {' '}
              GET INVOLVED{' '}
            </MenuItemAStyled>
          </ListStyled>
          <ListStyled onClick={this.changeVisibility}>
            <MenuItemAStyled href="#OurPartners"> PARTNER </MenuItemAStyled>
          </ListStyled>
          <ListStyled onClick={this.changeVisibility}>
            <PaypalButton blue>DONATE</PaypalButton>
          </ListStyled>
        </MenuStyled>
      </HeaderStyled>
    );
  }
}

export default BurgerIcon;
