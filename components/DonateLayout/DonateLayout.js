import { BlueButton } from '../../common/ButtonStyles'
import classes from './DonateLayout.css';


export default function DonateLayout(props) {
  return (
    <div className={classes.DonateLayout}>
      <BlueButton >DONATE</BlueButton>
      <h2>Your gift will help these children reach their life goals!</h2> 
    </div>
  )
}
