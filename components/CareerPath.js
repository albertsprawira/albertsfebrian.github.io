import DateDiff from "../utils/dateDiff";
import styles from "../styles/CareerPath.module.scss";

const CareerPath = ({careerList}) => {
    return (  
        <div className={styles.careerPath}>
            {
                careerList?.map( (career, index) =>{
                    const dateEnd = career.end=="Present" ? new Date() : new Date(career.end)
                    const workDuration = DateDiff(new Date(career.start), dateEnd);
                    return (
                        <div className={styles.experience} key={index} data-aos="zoom-in-up">
                            <div className={styles.bubble}>
                                <div></div>
                            </div>
                            <div className={styles.information}>
                                <span>{career.title}</span>
                                <span>{`${career.start} - ${career.end} (${workDuration})`}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default CareerPath;