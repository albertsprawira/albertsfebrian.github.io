import Link from "next/link";
import styles from '../styles/Home.module.scss'
import ReactRotatingText from "react-rotating-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigationList } from "../variables/navigationList";
import { homeSocialList } from "../variables/homeSocialList";
import { rotatingText } from "../variables/rotatingList";

export default function Home() {
  return (
    <main className={styles.home + " container"}>
      <div className={styles.intro} data-aos="fade-up">
        <span className={styles.h2}>Hello, My Name is</span>
        <span className={styles.h1}>ALBERTS FEBRIAN PRAWIRA</span>
        <span className={styles.h2}>I&apos;m a&nbsp;
          <span>
            <ReactRotatingText 
              items={rotatingText} 
              pause={2000} 
              typingInterval={100}/>
          </span>
        </span>
      </div>
      <div className={styles.menu}>
        {
          navigationList.map( (navItem, index)=>{
            const animate = index%2==0 ? "fade-up-left" : "fade-up-right";
            if(navItem.name === "Home") return;
            return(
              <Link href={navItem.link} key={navItem.name} passHref>
                <span className={styles.h1} data-aos={animate}>{navItem.name}</span>
              </Link>
            );
          })
        }
      </div>
      <div className={styles.social} data-aos="zoom-in-up">
        {
          homeSocialList.map( (social)=>{
            return(
              <a href={social.link} target="_blank" rel="noreferrer" key={social.name}>
                <div>
                  <FontAwesomeIcon icon={social.icon}/>
                </div>
              </a>
            )
          })
        }
      </div>
    </main>
  )
}
