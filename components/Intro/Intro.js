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
                            Hi, My Name is Alberts Febrian Prawira. I graduated from Bina Nusantara University with a Bachelor of Science degree in Information Technology.
                        </p>
                        <p data-aos="fade-up">
                            I'm currently working as a Network Administrator and Technical Support in Software Laboratory Center at Bina Nusantara University which is located in Jakarta, Indonesia . I'm a full stack programmer and have had several projects on making responsive websites. I love learning and keep on challenging myself.
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