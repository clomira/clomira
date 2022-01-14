import { useEffect } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styles from "../styles/err.module.css";

const err = () => {
    const rout = useRouter();
    useEffect(() => {
        setTimeout(() => {
            rout.push("/");
        }, 3500)
    }, []);

    return (
        < div >
            <div >
                <header className={styles.topheader}>
                </header>
                <div>
                    <div className={styles.starsec}></div>
                    <div className={styles.starthird}></div>
                    <div className={styles.starfourth}></div>
                    <div className={styles.starfifth}></div>
                </div>
                <div className={styles.lamp__wrap}>
                    <div className={styles.lamp}>
                        <div className={styles.cable}></div>
                        <div className={styles.cover}></div>
                        <div className={styles.incover}>
                            <div className="bulb"></div>
                        </div>
                        <div className={styles.light}></div>
                    </div>
                </div>
                <section className={styles.error}>
                    <div className={styles.error__content}>
                        <div className={`${styles.error__message} ${styles.message}`}></div>
                        <h1 className={styles.message__title}>Page Not Found</h1>
                        <p className={styles.message__text}>We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                    </div>
                    <div className={`${styles.error__nav} ${styles.enav}`}>
                        <a href="/" className={styles.enav__link}></a>
                    </div>
                </section>
            </div >
        </ div>
    )
}

export default err

err.getLayout = function PageLayout(page: ReactNode) {
    return <div>{page}</div>;
};