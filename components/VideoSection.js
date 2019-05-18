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

const ImgAContainer = styled.a`
  cursor: pointer;
`

const VideoFrameStyled = styled.iframe`
  width: 100%;
  height: 100%;
`

class VideoSection extends React.Component {
  state = {
    displayVideo: 'none',
    displayVideoButton: 'initial'
  }

  constructor(props) {
    super(props);
  }

  toggleVideoDisplay() {
    this.toggleVideoButton();
    if (this.state.displayVideo === 'none') {
      this.setState({ displayVideo: 'unset' });
    } else {
      this.setState({ displayVideo: 'none' });
    }
  }

  toggleVideoButton() {
    if (this.state.displayVideoButton === 'initial') {
      this.setState({ displayVideoButton: 'none' });
    } else {
      this.setState({ displayVideoButton: 'initial' });
    }
  }


  render() {
    return (
      <VideoSectionStyles>
        <VideoFrameStyled style={{ display: this.state.displayVideo }} src="https://www.youtube.com/embed/g5FY-XQS9OU?autoplay=1" frameborder="0" allowfullscreen>
        </VideoFrameStyled>
        <VideButtonRow style={{ display: this.state.displayVideoButton }}>
          <ImgAContainer onClick={this.toggleVideoDisplay.bind(this)}>
            <VideoButtonImg src='/static/images/LightPlayButton.png' />
          </ImgAContainer>
        </VideButtonRow>
      </VideoSectionStyles>
    )
  }
}

export default VideoSection