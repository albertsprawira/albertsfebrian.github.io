import Navbar from "../components/Navbar";
import style from "../styles/Content.module.scss";
import Head from "next/head";

const ContentLayout = ({children, header=""}) => {
    return (  
        <>
            <Head>
                <title>{`Alberts Febrian P | ${header}`}</title>
            </Head>
            <Navbar/>
            <main className={`${style.content} container`}>
                <div id={style.header} data-aos="fade-right">
                    <div>
                        <h1>{header}</h1>
                    </div>
                </div>
                {children}
            </main>
        </>
    );
}
 
export default ContentLayout;