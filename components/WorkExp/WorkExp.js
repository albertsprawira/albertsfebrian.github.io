import SectionLayout from "../../layouts/SectionLayout";
import styles from "./WorkExp.module.scss";
import Image from "next/image";
import SortByYear from "../../utils/sortByYear";
import DateDiff from "../../utils/dateDiff";
import { experienceList } from "../../variables/experienceList";
import CareerPath from "../CareerPath";

const WorkExp = () => {
    return ( 
        <>
            <SectionLayout title={"Working Experience"}>
                {
                    experienceList.map( (exp,index)=>{
                        const careerList = SortByYear(exp.career);
                        const firstDate = careerList[careerList.length-1].start;
                        const workDuration = DateDiff(new Date(firstDate), new Date());
                        return(
                            <div key={index} className={styles.company}>
                                <div className={styles.experience} data-aos="zoom-in-up">
                                    <div className={styles.image}>
                                        <Image src={exp.image} alt="Logo" placeholder="blur" layout="fill" objectFit="cover"/>
                                    </div>
                                    <div className={styles.information}>
                                        <span>{exp.name}</span>
                                        <span>{workDuration}</span>
                                    </div>
                                </div>
                                <CareerPath careerList={careerList}/>
                            </div>
                        )
                    })
                }
            </SectionLayout>
        </>
    );
}
 
export default WorkExp;