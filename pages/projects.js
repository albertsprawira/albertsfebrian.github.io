import styles from '../styles/Projects.module.scss'
import ContentLayout from "../layouts/ContentLayout";
import { projectList } from '../variables/projectList';
import Image from "next/image";

export default function Projects() {
  return (
    <ContentLayout header={"Projects"}>
      <div className={`${styles.row} ${styles.projects}`}>
        {
          projectList.map( (project,index)=>{
            return(
              <a href={project.link} target="_blank" rel="noreferrer" className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']}`} data-aos="flip-up" key={index}>
                <div className={styles.card} style={{background:`${project.background}`}}>
                  <div className={styles.image}>
                    <Image src={project.image} layout="fill" objectFit="contain" alt={project.title} placeholder="blur"/>
                  </div>
                  {/* <img src={project.image} alt={project.title} height={176} width={"auto"}/> */}
                  <div className={styles.detail}>
                    <div>
                      <span className={styles.h3}>{project.title}</span>
                      <span>{project.content}</span>
                    </div>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>

    </ContentLayout>
  )
}
