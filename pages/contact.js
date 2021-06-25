import styles from '../styles/Contact.module.scss'
import ContentLayout from "../layouts/ContentLayout";
import { contactList } from '../variables/contactList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <ContentLayout header={"Contact"}>
      <div className={styles.text} data-aos="zoom-in-up">
        <span>I'm very interested in getting opportunities for collaboration or discuss about technology in computer science.&nbsp;</span>
        <span>Feel free to hit me up via any platform below:</span>
      </div>
      <div className={`${styles.row} ${styles.contact}`}>
        {
          contactList.map( (contact)=>{
            return(
              <a href={contact.link} target="_blank" rel="noreferrer" className={`${styles['col-12']} ${styles['col-md-6']} ${styles['col-lg-4']}`} data-aos="flip-up" key={contact.name}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={contact.icon}/>
                  </div>
                  <span className={styles.h3}>{contact.title}</span>
                  <span>{contact.content}</span>
                </div>
              </a>
            )
          })
        }
      </div>

    </ContentLayout>
  )
}
