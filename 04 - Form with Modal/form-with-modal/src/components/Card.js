/* eslint-disable import/no-anonymous-default-export */
import './Card.css'

const Card = props => {
    const classes = 'card ' + props.className;

    return <div className={classes} style={{
        backgroundColor: props.color || ''
    }}> {props.children}</div >
}

export default Card;