import classes from './Tagline.css'
import Line from '../../common/Line/Line'

export default function Tagline(props) {
  return (
        <div className={classes.Container}>
            <Line />
            <div className={classes.FoundationName}>{props.foundationName}</div>
            <div className={classes.Tagline}>{props.tagline}</div>
        </div>
  )
}