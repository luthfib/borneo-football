import classes from './ImageBackground.css'
import Line from '../../common/Line/Line'
import overrides from './Override.css'

export default function ImageBackground(props) {
    return (
        <div className={classes.ImageBackground}>
            <div className={classes.Tagline}> 
                <Line theme={overrides.WhiteLine} />
                <h2 className={classes.Header}>Most of the people who work with us do it purely for the love of football and to give back to the community.</h2>
            </div>
        </div>
    )
}