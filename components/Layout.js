import Header from './Header/Header'
import Tagline from './Tagline/Tagline'
import styled from 'styled-components';

const LayoutStyles = styled.div`
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.5)), url(/static/images/Cover.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center center;
`

export default function Layout(props) {
  return (
    <LayoutStyles>
      <Header />
      <Tagline foundationName="Borneo Football" tagline="The Power of Football Inspiring the Next Generation"/>
    </LayoutStyles>
  )
}
