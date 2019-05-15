import classes from './SectionHeading.css'
import Line from '../../common/Line/Line'

const ShowImage = (props) => {
    if(props.children) {
        return (
            <img className={classes.ConditionalImage} src={props.children} />
        )
    };
    return null;
}

export default function SectionHeading(props) {
    return (
        <div className={classes.Container}>
            <div className={classes.SectionHeading}>
                <Line />
                <h1 className={classes.Header}>{props.heading}</h1>
                <p className={classes.Content}>{props.children}</p>
                <ShowImage >{props.src}</ShowImage>
            </div>
        </div>
    )
}