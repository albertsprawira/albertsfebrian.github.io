import SectionLayout from "../../layouts/SectionLayout";
import { skillList } from "../../variables/skillList";
import styles from "./Skills.module.scss"

const Skills = () => {
    return ( 
        <>
            <SectionLayout title={"Skills"}>
                <div className={`${styles.row} ${styles.skillList}`}>
                    {
                        skillList.map( (skill,index)=>{
                            return(
                                <div className={`${styles['col-6']} ${styles['col-md-4']} ${styles['col-lg-3']}`} data-aos="zoom-in-up" key={index}>
                                    <div className={styles.skill}>
                                        <span>{skill}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </SectionLayout>
        </>
    );
}
 
export default Skills;