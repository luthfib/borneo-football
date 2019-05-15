import classes from './Button.css'
import classNames from 'classnames/bind';
import overrideDefault from '../../utils/Overrides'

let cx = classNames.bind(classes)

export default function Button(props) {
  let combinedClasses = overrideDefault(props.theme, { DonateButton: true})
  let className = cx(combinedClasses)

  return (
    <button className={className} type="submit" form="DonateForm" value="Submit">{props.children}</button>
  )
}