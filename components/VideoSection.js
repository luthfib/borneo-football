import { VideButtonRow, VideoButtonImg } from '../common/PlayButtonStyles'
import styled from 'styled-components';
import ModalVideo from 'react-modal-video'
import classes from './Modal.css'


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
class Modal extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo styles={classes.Modal} channel='youtube' isOpen={this.state.isOpen} videoId='g5FY-XQS9OU' onClose={() => this.setState({isOpen: false})} />
        <a onClick={this.openModal}><VideoButtonImg src='/static/images/LightPlayButton.png'/> </a>
      </div>
    )
  }
}
/*<a> 
                <VideoButtonImg src='/static/images/LightPlayButton.png'/> 
              </a>*/
export default function Tagline(props) {
  return (
        <VideoSectionStyles>
            <VideButtonRow> 
              <Modal></Modal>
            </VideButtonRow>
        </VideoSectionStyles>
  )
}