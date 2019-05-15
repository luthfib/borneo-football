import classes from './Header.css'
import PaypalButton from '../PaypalButton/PaypalButton'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <div className={classes.Header} style={classes}>
      <Logo src='/static/images/Logo.png' height="175px"></Logo>
      <div>
        <a>HOME</a>
        <a>ABOUT US</a>
        <a>OUR WORK</a>
        <a>GET INVOLVED</a>
        <a>PARTNER</a>
        <a>CONTACT</a>
      </div>
      <PaypalButton>DONATE NOW</PaypalButton>
    </div>
  )
}
