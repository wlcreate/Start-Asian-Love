import styles from '../styles/AllyshipList.module.css';

export const Allyship = () => {
    return (
        <div className={styles.main}>
            <p>I am the Allyship Component.</p>
            <h1>Who are these resources for?</h1>
            <button>Everyone</button>
            <button>Asian/AAPI</button>
            <button>BIPOC</button>
        </div>
    )
}