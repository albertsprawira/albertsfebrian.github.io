import SectionLayout from "../../layouts/SectionLayout";
import Image from "next/image";
import styles from "./Intro.module.scss"
import profileImg from "../../public/alberts.jpg";

const Intro = () => {
    return ( 
        <>
            <SectionLayout>
                <div className={`${styles.row}`}>
                    <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-8']} ${styles.content}`}>
                        <div>
                        <p data-aos="fade-up">
                            Hi, My Name is Alberts Febrian Prawira, Graduated from Bina Nusantara University Majoring in
                            Computer Science. I'm a Hard worker and Innovative programmer who wants to keep learning, and
                            continue to challenging myself. 
                        </p>
                        <p data-aos="fade-up">
                            I Based in Jakarta, Indonesia. Currently, I working as "Network Administrator and Technical Support" at Software Laboratory Center, Bina Nusantara University and I worked on several responsive website projects.
                        </p>
                        </div>
                    </div>
                    <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']} ${styles.content}`} data-aos="fade-up">
                        <div className={styles.profileImg}>
                        <Image src={profileImg} layout="fill" objectFit="contain" alt="My Picture" placeholder="blur"/>
                        {/* <img src="/alberts.jpg" alt="Myself"/> */}
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}
 
export default Intro;