import styled from "styled-components";
import device from "../utils/ResponsiveHelpers";

const BannerStyles = styled.div`
  padding: 10px 0px;
  width: 100%;
  height: 50px;
  background: rgba(223, 0, 18);
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;

  h2 {
    font-weight: 400;
  }

  a {
    color: rgba(223, 0, 18);
    margin-left: 20px;
    background: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
    text-decoration: none;

    :hover {
       transform: scale(1.05)
    }
  }

  @media ${device.tabletMd} {

    h2 {
        font-size: 18px;
    }
    a {
        font-size: 14px;
    }

  }


  @media ${device.mobileLg} {
    h2 {
        font-size: 16px;
    }
    a {
        font-size: 12px;
    
    }
  }


  @media (max-width: 620px) {
    padding-left: 5px;
    flex-direction: column;
    align-items: self-start;
    height: 60px;
    h2 {
        margin-top: 0px;
        font-size: 12px;
    }

    a {
        font-size: 10px;
        padding: 5px 5px;
        margin-left: 0px;
    }
   
  }
  }
`;

const Banner = () => (
  <BannerStyles>
    <h2>Learn about our efforts to help out during the COVID-19 pandemic </h2>
    <a href="#Covid-19">learn more</a>
  </BannerStyles>
);

export default Banner;
