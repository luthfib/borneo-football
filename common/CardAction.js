import CardItemAction from './CardItemAction'
import styled from 'styled-components';
import PaypalButton from '../components/PaypalButton'

const CardStyled = styled.div`
  width: 33%;
  background: rgba(223,0,18,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  justify-content: space-between;

@media (max-width: 600px) {
  width: 100%;
  margin: 0 0 10px 0;
}
`

export default function Card(props) {
  return (
        <CardStyled>
          <CardItemAction 
            src={props.src}
            heading={props.heading}
            content={props.content}>    
          </CardItemAction>
          <PaypalButton padding='20px' blue>DONATE</PaypalButton>
        </CardStyled>
  )
}