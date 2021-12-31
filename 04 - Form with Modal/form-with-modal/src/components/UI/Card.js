/* eslint-disable import/no-anonymous-default-export */
import classes from './Card.module.css'

const Card = props => {

    return <div className={`${classes.card} ${props.className}`} style={{
        backgroundColor: props.color || ''
    }}> {props.children}</div >
}

export default Card;