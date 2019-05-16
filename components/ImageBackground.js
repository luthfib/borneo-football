import Line from '../common/LineStyles'
import styled from 'styled-components';

const ImageBackgroundStyles = styled.div`
  color: white;
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.5)), url(/static/images/GirlsCover.png);
  background-size: cover;
  resize: both;
  overflow: scroll;
  background-position: center center;
  position: relative;
  height: 80vh;
`

const TaglineStyles = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  text-align: center;
  left: 50%;
  width: 45%;
  transform: translate(-50%, -50%);
`

const HeaderStyles = styled.h2`
  font-weight: 200;
  font-size: 35px;
  line-height: 50px;
`

export default function ImageBackground(props) {
    return (
        <ImageBackgroundStyles>
            <TaglineStyles> 
                <Line primary override="none" />
                <HeaderStyles>Most of the people who work with us do it purely for the love of football and to give back to the community.
                </HeaderStyles>
            </TaglineStyles>
        </ImageBackgroundStyles>
    )
}