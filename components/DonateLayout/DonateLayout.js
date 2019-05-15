import Button from '../../common/Button/Button'
import classes from './DonateLayout.css';
import overrides from './Overrides.css'



export default function DonateLayout(props) {
  return (
    <div className={classes.DonateLayout}>
      
      <Button theme={overrides}>DONATE</Button>
      <h2>Your gift will help these children reach their life goals!</h2> 
    </div>
  )
}
