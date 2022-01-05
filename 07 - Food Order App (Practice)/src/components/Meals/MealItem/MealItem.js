import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = props => {
    const meal = props.meal;
    const price = `R$${meal.price.toFixed(2)}`;
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
                <MealItemForm id={props.id} />
            </div>
        </li>
    )
}

export default MealItem;