import styles from './About.module.css';
import { ContentsCard } from './contentsCard';
import qiskitImage from '../../public/Qiskit_03.png';
import cropFutureImage from '../../public/Crop_Future.png';
import beginnerImage from '../../public/sdesign_00048.png.webp';

export const About = () => {
    return (
        <div className={styles.aboutWrapper}>
            <h2 className={styles.heading}>量子コンピューティングを学ぶ、第一歩</h2>
            <p>Qiskit Fall Festでは実践的に量子コンピューティングを学ぶことができます</p>
            <ContentsCard
                title="Qiskitを使用"
                description="QiskitはIBMが開発した量子コンピューティングのためのオープンソースフレームワークです。Pythonから利用でき、多機能なので一度習得すると様々な場面で利用できます。"
                imageUrl={qiskitImage}
            />
            <ContentsCard
                title="ハンズオン形式"
                description="Qiskit Fall Festでは、実際に手を動かして学ぶことができます。講義を聞くだけでなく、実際にコードを書いて量子コンピュータを動かすことで、理解が深まります。"
                imageUrl={cropFutureImage}
            />
            <ContentsCard
                title="初心者大歓迎"
                description="Qiskit Fall Festは初心者の方でも安心して参加できるように設計されています。量子コンピューティングに関する知識がなくても大丈夫です。"
                imageUrl={beginnerImage}
            />
        </div>
    )
}