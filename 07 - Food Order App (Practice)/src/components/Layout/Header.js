import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';


const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Guilherme's Meals</h1>
                <HeaderCartButton />
            </header>

            <div className={styles['main-image']}>
                <img src={mealsImage} />
            </div>
        </>
    );
}

export default Header;