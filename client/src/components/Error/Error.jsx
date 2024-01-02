import styles from "./error.module.css"

const Error = () => {
    return (
        <div className={styles.box}>
            <div className={styles.error}>Something Went Wrong</div>
        </div>
    )
}

export default Error