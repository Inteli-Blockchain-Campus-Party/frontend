import React from "react";

import styles from "./NotFoundScreen.module.css";

const IndexScreen = () => {
    return (
        <main className={styles.content}>
            <h1 className={styles.mainText}>
                404
            </h1>
            <p className={styles.subText}>
                Page not found
            </p>
        </main>
    )
}

export default IndexScreen