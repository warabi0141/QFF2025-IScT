import styles from "./Sponsorship.module.css";
import Logo from "../assets/Quantum_Universe_logo.webp";

export const Sponsorship = () => {
    return (
        <div className={styles.sponsorshipWrapper}>
            <h2 className={styles.heading}>協賛</h2>
            <div className={styles.content}>
                <a href="https://altema.is.tohoku.ac.jp/q_universe/">
                    <img src={Logo} alt="Quantum Universe Logo" className={styles.logo} />
                </a>
            </div>
        </div>
    )
}