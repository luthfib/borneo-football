import classes from './VideoSection.css'
import { VideButtonRow, VideoButtonImg } from '../../common/PlayButtonStyles'

// <PlayButton/>

export default function Tagline(props) {
  return (
        <div className={classes.VideoSection}>
            <VideButtonRow> 
              <a> 
                <VideoButtonImg src='/static/images/LightPlayButton.png'/> 
              </a>
            </VideButtonRow>
        </div>
  )
}