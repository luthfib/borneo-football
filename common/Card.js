import CardItem from './CardItem/CardItem'
import styled from 'styled-components';

const CardStyles = styled.div`
    width: 33%;
    background: rgb(226, 241, 255);
    
    @media (max-width: 600px) {
        width: 100%;
        margin: 0 0 10px 0;   
    }
`

export default function Card(props) {
    return (
        <CardStyles>
            <CardItem 
                src={props.src}
                heading={props.heading}
                content={props.content}
                button={props.button}>
            </CardItem>
        </CardStyles>
    )
}