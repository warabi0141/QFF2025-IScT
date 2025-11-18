import styles from './Photo.module.css';
import eventPhoto from '@/assets/event_image.JPG';

export const Photo = () => {
    return (
        <div className={styles.photoWrapper}>
            <h2 className={styles.heading}>イベント当日の様子</h2>
            <img src={eventPhoto} alt="イベント当日の様子" className={styles.photoImage} />
        </div>
    )
}