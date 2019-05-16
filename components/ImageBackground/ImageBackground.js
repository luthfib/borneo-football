import classes from './ImageBackground.css'
import Line from '../../common/LineStyles'

export default function ImageBackground(props) {
    return (
        <div className={classes.ImageBackground}>
            <div className={classes.Tagline}> 
                <Line primary />
                <h2 className={classes.Header}>Most of the people who work with us do it purely for the love of football and to give back to the community.</h2>
            </div>
        </div>
    )
}