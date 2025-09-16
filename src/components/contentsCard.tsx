import styles from './contentsCard.module.css';

interface ContentsCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const lineBreak = (text: string) => {
    return text.split('\n').map((line, index) => (
        <p className={styles.description} key={index}>
            {line}
        </p>
    ));
}

export const ContentsCard = ({ title, description, imageUrl }: ContentsCardProps) => {
    return (
        <div className={styles.contentsCardWrapper}>
            <img className={styles.image} src={imageUrl} alt={title} />
            <div className={styles.textContainer}>
                <h2 className={styles.heading}>{title}</h2>
                {lineBreak(description)}
            </div>
        </div>
    )
}