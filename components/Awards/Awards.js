import SectionLayout from "../../layouts/SectionLayout";
import { awardList } from "../../variables/awardList";
import styles from "./Awards.module.scss";
import Image from "next/image";
import { useState } from "react";

const Awards = () => {
    const [currentImage, setCurrentImage] = useState(awardList[0].image);
    const [active, setactive] = useState(0);

    const handlerActive=(index)=>{
        document.getElementById(`award-${active}`)?.classList.remove(styles.active);
        document.getElementById(`awardImg-${active}`)?.classList.remove(styles.show);

        setactive(index);
        setCurrentImage(awardList[index].image);

        document.getElementById(`award-${index}`)?.classList.add(styles.active);
        document.getElementById(`awardImg-${index}`)?.classList.add(styles.show);
    }

    return ( 
        <>
            <SectionLayout title={"Awards"}>
                <div className={`${styles.row} ${styles.awardContainer}`}>
                    <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-8']}`}>
                        {
                            awardList.map( (award,index)=>{
                                return(
                                    <div onClick={ ()=>handlerActive(index)} 
                                        onMouseOver={ ()=>handlerActive(index)} 
                                        id={`award-${index}`}
                                        className={`${styles.award} ${index==0 ? styles.active : ""}`} key={index} data-aos="zoom-in-up">
                                        <div className={styles.information}>
                                            <span>{award.title}</span>
                                            <span>{award.content}</span>
                                            <span>{award.date}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']} ${styles.imgContainer}`} data-aos="fade-up">
                        {
                            awardList.map( (award,index) =>{
                                return(
                                    <div id={`awardImg-${index}`} key={index}
                                        className={`${styles.image} ${index==0 ? styles.show : ""}`}>
                                        <Image src={award.image} layout="fill" objectFit="contain" alt="Award" placeholder="blur"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}
 
export default Awards;