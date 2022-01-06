import { useContext } from 'react';
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const meal = props.meal;
    const price = `R$${meal.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={styles.meal}>
            {/* <h3> {meal.name} </h3>
            <p> {meal.description} </p> */}

            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;