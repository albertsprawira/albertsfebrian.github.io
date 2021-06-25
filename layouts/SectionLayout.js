import styles from "../styles/Section.module.scss";

const SectionLayout = ({children,title=""}) => {
    return (  
        <>
            <section className={`${styles.section}`}>
                {title !== "" ?
                    <h2 data-aos="flip-up">{title}</h2>
                    :
                    null
                }
                {children}
            </section>
        </>
    );
}
 
export default SectionLayout;