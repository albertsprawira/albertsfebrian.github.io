import SectionLayout from "../../layouts/SectionLayout";
import { educationList } from "../../variables/educationList";
import styles from "./Education.module.scss";
import Image from "next/image";

const Education = () => {
    return ( 
        <>
            <SectionLayout title={"Education"}>
                {
                    educationList.map( (edu,index)=>{
                        return(
                            <div className={styles.education} key={index} data-aos="zoom-in-up">
                                <div className={styles.image}>
                                    <Image src={edu.image} alt="Logo" placeholder="blur" layout="fill" objectFit="cover"/>
                                </div>
                                <div className={styles.information}>
                                    <span>{edu.name}</span>
                                    <span>{`${edu.information} (${edu.yearStart}-${edu.yearEnd})`}</span>
                                    <span>{`GPA : ${edu.GPA.toPrecision(3)}/${edu.maxGPA.toPrecision(3)}`}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </SectionLayout>
        </>
    );
}
 
export default Education;