import '../styles/globals.scss'
import AOS from 'aos';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import "aos/dist/aos.css";
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  
NProgress.configure({ showSpinner: false });


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 0,
      duration: 600,
    });
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps}/>
    </MainLayout>
  )
}

export default MyApp
