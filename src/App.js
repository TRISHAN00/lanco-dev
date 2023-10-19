import {Route, Switch, useLocation} from 'react-router-dom';
import Error from './pages/404';
import GlobalStyle from "./styles/globalStyle";
import {ImageReveal} from "./components/animations/ImageReveal";
import {Parallax, ParallaxImg} from "./components/animations/Parallax";
import {gsap} from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {lazy, Suspense} from "react";


// page imports
import Components from './pages/components';

import ProjectDetail from './pages/project/single';
import {SplitUp} from "./components/animations/TextAnimation";
import {useEffect, useLayoutEffect, useRef} from "react";
import PageTransition from "./components/animations/PageTransition";
import NewsDetail from './pages/news/single';
import Career from "./pages/career";
import Landowner from "./pages/landowner";
import Buyer from "./pages/buyer";
import ContactUs from "./pages/contactUs";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Call from "./components/Call";
import Calculator from "./components/Calculator";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import beSmart from "./pages/businessUnits/be-smart";


const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Project = lazy(() => import("./pages/project"));
const News = lazy(() => import("./pages/news"));
const Sheygun = lazy(() => import("./pages/businessUnits/sheygun"));
const Brokerage = lazy(() => import("./pages/businessUnits/brokerage"));
const EasyTerm = lazy(() => import("./pages/businessUnits/easy-term"));
const Property = lazy(() => import("./pages/businessUnits/property"));
const line = lazy(() => import("./pages/businessUnits/line"));



function App() {

    const location = useLocation();
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


    // smooth scroll init
    const el = useRef();

    useEffect(() => {
        let smoother = ScrollSmoother.create({
            smooth: 1.7,
        });

        return () => {
            smoother.kill();
        };
    }, [location.pathname]);

    // route change scroll top & page class
    useEffect(() => {
        if (location.pathname === '/') {
            document.body.classList.add('in-home-page')
        } else {
            document.body.classList.remove('in-home-page')
        }

        window.scroll(0, 0)
    }, [location.pathname])


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth > 767) {

            // parallax
            let container = gsap.utils.toArray(".image-parallax");
            container.forEach((cont) => {
                let img = cont.querySelector("svg");
                gsap.to(img, {
                    yPercent: 40,
                    // y: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cont,
                        // markers: true,
                        scrub: true
                    }
                });
            });
        }

    }, [null])

    // animation functions
    ImageReveal()
    Parallax()
    ParallaxImg()
    SplitUp()
    PageTransition()

    return (
        <>
            <GlobalStyle/>
            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>
            <Menu/>
            {/*<ScrollPopup/>*/}
            {/*page transition */}
            <div className="page-transition">
                <img className={'logo'} src="/images/static/logo.svg" alt="logo"/>
            </div>
            <div className="App" >
                <div id="smooth-content">
                    <Suspense fallback={<p>Loading page...</p>}>
                        <Switch location={location} key={'location.pathname'}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/components" component={Components}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path={`/project`} component={Project}/>
                            <Route exact path={`/project/:slug`} component={ProjectDetail}/>
                            <Route exact path={`/news`} component={News}/>
                            <Route exact path={`/news/:slug`} component={NewsDetail}/>
                            <Route exact path={`/sheygun-interior`} component={Sheygun}/>
                            <Route exact path={`/lanco-brokerage`} component={Brokerage}/>
                            <Route exact path={`/lanco-easy-term`} component={EasyTerm}/>
                            <Route exact path={`/lanco-property-management`} component={Property}/>
                            <Route exact path={`/line-architects-ltd`} component={line}/>
                            <Route exact path={`/be-smart-with-lanco`} component={beSmart}/>
                            <Route exact path={`/career`} component={Career}/>
                            <Route exact path={`/landowner`} component={Landowner}/>
                            <Route exact path={`/buyer`} component={Buyer}/>
                            <Route exact path={`/contact-us`} component={ContactUs}/>
                            <Route component={Error}/>
                        </Switch>
                    </Suspense>
                    <Footer/>
                </div>
                <Call/>
                {
                    location.pathname === '/lanco-easy-term' ?
                        <Calculator/>
                        : ''
                }

            </div>
        </>


    );
}

export default App;
