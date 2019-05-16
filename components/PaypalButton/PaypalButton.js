import classes from './PaypalButton.css'
import { Button } from '../../common/ButtonStyles'

export default function PaypalButton(props) {
  return (
    <div>
      <form className={classes.DonateForm} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="DonateForm">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="5PPY7MEKD8LMQ" />
      </form>
      <Button type="submit" form="DonateForm" value="Submit">{props.children}</Button>
    </div>
  )
}