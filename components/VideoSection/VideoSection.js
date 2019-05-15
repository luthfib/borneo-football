import classes from './VideoSection.css'
import PlayButton from '../../common/PlayButton/PlayButton'

export default function Tagline(props) {
  return (
        <div className={classes.VideoSection}>
            <PlayButton/>
        </div>
  )
}