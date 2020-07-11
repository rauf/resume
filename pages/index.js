    
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import resumeData from '../static/resumeData';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className="App">
        <Head>
            <title>Abdul Rauf | Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link rel="stylesheet" href="/static/css/default.css" />
            <link rel="stylesheet" href="/static/css/layout.css" />
            <link rel="stylesheet" href="/static/css/media-queries.css" />
            <link rel="stylesheet" href="/static/css/magnific-popup.css" />
        </Head>
        
        <Header data={resumeData.main}/>
        {/* <About data={resumeData.main}/> */}
        {/* <Resume data={resumeData.resume}/> */}
        {/* <Portfolio data={resumeData.portfolio}/> */}
        {/* <Testimonials data={resumeData.testimonials}/> */}
        {/* <Contact data={resumeData.main}/> */}
        {/* <Footer data={resumeData.main}/> */}

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script type="text/javascript" src="/static/js/jquery-1.10.2.min.js"></script>')</script>
        <script type="text/javascript" src="/static/js/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="/static/js/jquery.flexslider.js"></script>
        <script type="text/javascript" src="/static/js/jquery.fittext.js"></script>
        <script type="text/javascript" src="/static/js/waypoints.js"></script>
        <script type="text/javascript" src="/static/js/magnific-popup.js"></script>
        <script type="text/javascript" src="/static/js/init.js"></script>
    </div>
  );
};

export default HomePage;