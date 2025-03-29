import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Tagline from "./Tagline";
import device from "../utils/ResponsiveHelpers";
import BurgerIcon from "./BurgerIcon";

const LayoutStyles = styled.div`
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.3), rgba(0, 20, 50, 0.3)),
    url(${(props) => props.img});
  height: 100vh;
  background-size: cover;
  background-position: center center;
  min-height: 400px;
`;

const ContainerStyles = styled.div`
  width: fit-content;
  margin: auto;

  @media ${device.tabletSm} {
    width: 100%;
  }
`;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <LayoutStyles img="/static/images/CoverPhoto.jpg">
          <ContainerStyles>
            <BurgerIcon></BurgerIcon>

            <Header />
            <Tagline
              foundationName="Borneo Football"
              tagline="The Power of Football Inspiring the Next Generation"
            />
          </ContainerStyles>
        </LayoutStyles>
      </React.Fragment>
    );
  }
}
