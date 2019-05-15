import classes from './Logo.css'

export default function Logo(props) {
  return (
        <img className={classes.Logo} alt="Brand" src={props.src} height={props.height} />
  )
}