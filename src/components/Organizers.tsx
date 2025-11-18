import { ContentsCard } from './contentsCard';
import styles from './Organizers.module.css';
import profileImage1 from '../../public/profileImage1.png';
import profileImage2 from '../../public/profileImage2.jpg';
import profileImage3 from '../../public/profileImage3.jpg';

export const Organizers = () => {
    return (
        <div className={styles.organizersWrapper}>
            <h2 className={styles.heading}>運営メンバー</h2>
            <ContentsCard 
                title="鈴木　泰雅 / Taiga Suzuki"
                description={`Lead Organizer\n
                所属：理学院物理学系\n
                Contact: suzuki.t.da27@m.isct.ac.jp`}
                imageUrl={profileImage1}
            />
            <div className={styles.coOrganizers}>
                <ContentsCard
                    title="長谷川　駿 / Shun Hasegawa"
                    description={`Co-Organizer\n
                    所属：情報理工学院数理計算科学系\n
                    Contact: hasegawa.s.6c08@m.isct.ac.jp`}
                    imageUrl={profileImage2}
                />
                <ContentsCard
                    title="松尾　泰晟 / Taisei Matsuo"
                    description={`Co-Organizer\n
                    所属：理学院物理学系\n
                    Contact: matsuo.t.170a@m.isct.ac.jp`}
                    imageUrl={profileImage3}
                />
            </div>
        </div>
    )
}