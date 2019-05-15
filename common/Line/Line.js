import classes from './Line.css'

export default function Line(props) {
  return (
        <hr className={props.theme || classes.RedLine} />
  )
}