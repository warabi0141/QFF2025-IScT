import styles from './Information.module.css'

export const Information = () => {
    return (
        <div className={styles.informationWrapper}>
            <h2 className={styles.heading}>イベントの詳細</h2>
            <table className={styles.informationTable}>
                <tbody>
                    <tr><td>開催場所</td><td>東京科学大学 Taki Plaza</td></tr>
                    <tr><td>開催日時</td><td>1日目 11月13日（木）17:20 ~ 20:00  2日目 11月14日（金）17:20 ~ 20:00</td></tr>
                    <tr><td>参加対象</td><td>東京科学大学の学生・教職員（参加には事前登録が必要です）</td></tr>
                    <tr><td>主催</td><td>科学大学学生チーム</td></tr>
                    <tr><td>協力</td><td>IBM Quantum</td></tr>
                </tbody>
            </table>
        </div>
    )
}