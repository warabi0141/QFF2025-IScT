import styles from './InterestForm.module.css';
import {
  Button,
} from "@chakra-ui/react"


export const InterestForm = () => {
    return (
        <div className={styles.interestFormWrapper}>
            <h2 className={styles.heading}>参加登録はこちらから</h2>
            <p>本イベントは事前登録が必要です</p>
            <p>下のリンクからフォームにアクセスし、参加登録をお願いします</p>
            <Button colorPalette='purple' size='xl' m="1rem auto" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeigFIa7Ud6gzbphf3m7hymdYutM0byiNo3241AJ_BDNGFBBA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    参加登録フォームへ
                </a>
            </Button>
        </div>
    )
}