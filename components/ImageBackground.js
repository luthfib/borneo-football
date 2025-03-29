import styled from "styled-components";
import Line from "../common/LineStyles";
import device from "../utils/ResponsiveHelpers";

const ImageBackgroundStyles = styled.div`
  color: white;
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.3)),
    url(/static/images/GirlsCoverPhoto.jpg);
  background-size: cover;
  resize: both;
  overflow: scroll;
  background-position: center center;
  position: relative;
  height: 80vh;
  min-height: 350px;
`;

const TaglineStyles = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  text-align: center;
  left: 50%;
  width: 45%;
  transform: translate(-50%, -50%);

  @media ${device.laptopLSm} {
    width: 70%;
  }

  @media ${device.tabletSm} {
    width: 70%;
  }

  @media ${device.mobileLg} {
    width: 80%;
  }
`;

const HeaderStyles = styled.h2`
  font-weight: 200;
  font-size: 35px;
  line-height: 50px;

  @media ${device.tabletSm} {
    font-size: 30px;
  }

  @media ${device.mobileLg} {
    font-size: 25px;
  }
`;

export default function ImageBackground(props) {
  return (
    <ImageBackgroundStyles>
      <TaglineStyles>
        <Line primary override="none" />
        <HeaderStyles>
          Most of the people involved in BFI love football and love the children
          we serve. They are inspired by a wish to give back to the community.
        </HeaderStyles>
      </TaglineStyles>
    </ImageBackgroundStyles>
  );
}
