import Header from './Header'
import Tagline from './Tagline'
import styled from 'styled-components';

const LayoutStyles = styled.div`
  background: linear-gradient(0deg, rgba(0, 20, 50, 0.3), rgba(0, 20, 50, 0.3)), url(/static/images/Cover.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center center;
  min-height: 400px;
`

export default function Layout(props) {
  return (
    <LayoutStyles>
      <div>
        <Header />
        <Tagline foundationName="Borneo Football" tagline="The Power of Football Inspiring the Next Generation" />
      </div>
    </LayoutStyles>
  )
}
