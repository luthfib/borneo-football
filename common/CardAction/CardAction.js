import classes from './CardAction.css'
import CardItemAction from '../CardItemAction/CardItemAction'


export default function Card(props) {
  return (
        <div className={classes.Card}>
          <CardItemAction src={props.src}
                    heading={props.heading}
                    content={props.content}>    
          </CardItemAction>
        </div>
  )
}