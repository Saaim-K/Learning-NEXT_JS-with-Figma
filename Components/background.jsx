import styles from '@/styles/Background.module.css'

const background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.rectangle}>
                <div className={styles.pyxis}></div>
                <div className={styles.logo}></div>
                <div className={styles.text}>
                    <p>Advanced Search-Find your smartest<br /> way to the buyer.</p>
                    <p className={styles.subtext}>Start your company in minutes</p>
                </div>
            </div>
        </div>
    )
}

export default background