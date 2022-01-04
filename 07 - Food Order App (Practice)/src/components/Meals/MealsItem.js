const MealsItem = props => {
    const meal = props.meal
    return (
        <li >
            {meal.name}
        </li>
    )
}

export default MealsItem;