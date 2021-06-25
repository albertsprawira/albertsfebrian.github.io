import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationList } from "../variables/navigationList";


const Navbar = () => {
    return (  
        <>
            <header className={styles.navbarColor}>
                <div className={`${styles.navbar} container`}>
                    {
                        navigationList.map((navItem)=>{
                            return(
                                <Link href={navItem.link} key={navItem.name} passHref>
                                    <div className={styles.navItem}>
                                        <FontAwesomeIcon icon={navItem.icon}/>
                                        <span>{navItem.name}</span>
                                    </div>
                                </Link>
                            )
                        })

                    }
                </div>
            </header>
        </>
    );
}
 
export default Navbar;