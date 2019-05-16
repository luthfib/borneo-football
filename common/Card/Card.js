import CardStyles from './CardStyles'
import CardItem from '../CardItem/CardItem'

export default function Card(props) {
    return (
        <CardStyles>
            <CardItem src={props.src}
                heading={props.heading}
                content={props.content}
                button={props.button}>
            </CardItem>
        </CardStyles>
    )
}