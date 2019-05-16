import { VideButtonRow, VideoButtonImg } from '../common/PlayButtonStyles'
import styled from 'styled-components';

const VideoSectionStyles = styled.div`
  color: white;
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.5)), url(/static/images/VideoCover.png);
  background-size: cover;
  resize: both;
  overflow: scroll;
  background-position: center center;
  height: 80vh;
  position: relative;
  min-height: 300px;
`

export default function Tagline(props) {
  return (
        <VideoSectionStyles>
            <VideButtonRow> 
              <a> 
                <VideoButtonImg src='/static/images/LightPlayButton.png'/> 
              </a>
            </VideButtonRow>
        </VideoSectionStyles>
  )
}