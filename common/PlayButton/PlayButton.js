import classes from './PlayButton.css'

export default function PlayButton(props) {
  return (
        <div className={classes.VideoButtonRow}>
            <a>
                <img src='/static/images/LightPlayButton.png' className={classes.VideoButtonImg} />
            </a>
        </div>
  )
}