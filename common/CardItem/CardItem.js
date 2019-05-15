import classes from './CardItem.css'
import Line from '../Line/Line'
import classNames from 'classnames/bind';
import overrideDefault from '../../utils/Overrides'

let cx = classNames.bind(classes)

const ShowImage = (props) => {
    if(props.children) {
        return (
            <img className={classes.CardItemImg} src={props.children} />
        )
    };
    return null;
}

export default function CardItem(props) {
    let combinedClasses = overrideDefault(props.theme, { DonateButton: true})
    let className = cx(combinedClasses)

    return (
        <div className={classes.CardItem}>
            <h2 className={classes.CardItemHeading}>{props.heading}</h2>
            <Line />
            <ShowImage>{props.src}</ShowImage>
            <p className={classes.CardItemContent}>{props.content}</p>
        </div>
    )
}