import Header from '../Header/Header'
import Tagline from '../Tagline/Tagline'
import classes from './Layout.css';

export default function Layout(props) {
  return (
    <div className={classes.Layout}>
      <Header />
      <Tagline foundationName="Borneo Football" tagline="The Power of Football Inspiring the Next Generation"/>
    </div>
  )
}
