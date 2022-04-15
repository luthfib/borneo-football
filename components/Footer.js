import React from "react";
import device from "../utils/ResponsiveHelpers";
import styled from "styled-components";

const DonateLayoutStyles = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 90%;

  @media ${device.tabletSm} {
    flex-wrap: wrap;
  }
`;

const ContainerStyles = styled.div`
  background: rgba(223, 0, 18, 1);
  color: white;
  padding: 25px;
`;

const LogoStyled = styled.img`
  padding-right: 25px;
`;

function LogoSmall(props) {
  return <LogoStyled alt="Brand" src={props.src} height={props.height} />;
}

export default function Footer(props) {
  return (
    <ContainerStyles>
      <DonateLayoutStyles>
        <LogoSmall src="/static/images/Logo.png" height="75px" />
        <p>
          The Power of Football <br /> Inspiring the Next Generation
        </p>
      </DonateLayoutStyles>
    </ContainerStyles>
  );
}
