import styles from './Timetable.module.css';

export const Timetable = () => {
    return (
        <div className={styles.timetableWrapper}>
            <h2 className={styles.heading}>タイムテーブル</h2>
            <p>Qiskit Fall Festは2日間にわたって開催されます。ハンズオン形式のワークショップを通じて、量子コンピューティングの基礎から量子アルゴリズムの応用まで学ぶことができます。</p>
            <div className={styles.timetable}>
                <h3>1日目 : 量子コンピューティングの基礎知識</h3>
                <p>量子力学の基本から量子コンピューティングの基本までを学びます</p>
                <p>17:20~ TBD</p>
                <p>18:00~ TBD</p>
                <p>19:00~ TBD</p>
            </div>
            <div className={styles.timetable}>
                <h3>2日目 : 量子アルゴリズム</h3>
                <p>1日目で学んだ基礎知識を応用して、量子アルゴリズムの仕組みと応用について学びます</p>
                <p>17:20~ TBD</p>
                <p>18:00~ TBD</p>
                <p>19:00~ TBD</p>
            </div>
        </div>
    )
}