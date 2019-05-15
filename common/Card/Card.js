import classes from './Card.css'
import CardItem from '../CardItem/CardItem'
import classNames from 'classnames/bind';
import overrideDefault from '../../utils/Overrides'

let cx = classNames.bind(classes)

export default function Card(props) {
  let combinedClasses = overrideDefault(props.theme, { Card: true})
  let className = cx(combinedClasses)
  
  return (
        <div className={className}>
          <CardItem src={props.src}
                    heading={props.heading}
                    content={props.content}
                    button={props.button}>    
          </CardItem>
        </div>
  )
}