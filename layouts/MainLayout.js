import Head from 'next/head'

const MainLayout = ( {children} ) => {
    return (  
        <>
            <Head>
                <title>Alberts Febrian P</title>
                <meta name="description" content="Alberts Febrian Prawira, Software Engineer" />
                <meta name="keywords" content="Alberts, Alberts Febrian, Alberts Prawira, Alberts Febrian Prawira" />
                <meta name="author" content="Alberts Febrian Prawira" />
                <link rel="icon" href="/icon.png" />
            </Head>
            {children}
        </>
    );
}
 
export default MainLayout;