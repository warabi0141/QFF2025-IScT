import styles from './Hero.module.css';
import qffLogo from '../assets/Badge_Dark.svg';
import heroBackground from '../assets/HeroBackground.svg';

export const Hero = () => {
    return (
        <div className = {styles.hero}>
            <img src={qffLogo} alt="QFF Logo" className={styles['svg-logo']} />
            <img src={heroBackground} alt="Hero Background" className={styles['svg-bg']} />
            <p className={styles['hero-text']}>@ScienceTokyo</p>
        </div>
    )
}