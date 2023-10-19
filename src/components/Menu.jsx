import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Accordion, Col, Container, Row} from 'react-bootstrap';
import {  gsap, TimelineLite, CSSPlugin } from 'gsap';
import {Link, useLocation} from "react-router-dom";
gsap.registerPlugin(CSSPlugin);



const MenuV9 = () => {
    let [menuItems, setMenuItems] = useState('false');
    let [newClass, setNewClass] = useState('');
    let [mobileSlide, setMobileSlide] = useState('');
    const [tl] = useState(new TimelineLite());

    let handleMenuToggle = (e) => {
        e.stopPropagation();
        setMenuItems('toggled');
    };

    let handleClose = () => {
        setMenuItems('');
    };

    let {pathname} = useRef('/');

    const hamburgerRef = useRef(null)
    const menuRef = useRef(null)
    const mobileMenuRaf = useRef(null)
    const [aboutAccordionOpen, setAboutAccordionOpen] = useState(false);
    const [projectsAccordionOpen, setProjectsAccordionOpen] = useState(false);
    const [businessAccordionOpen, setBusinessAccordionOpen] = useState(false);



    //Sticky menu code,
    // sticky menu will be enabled if scroll position is greater than 100 & scroll backward
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMenuFixed, setIsMenuFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos < prevScrollPos && currentScrollPos > 100) {
                setIsMenuFixed(true);
                document.querySelector(".menu-bar").classList.remove('menu-trans');
                document.querySelector(".menu-bar").classList.add('menu-fixed');

            } else {
                document.querySelector(".menu-bar").classList.remove('menu-fixed');
                document.querySelector(".menu-bar").classList.add('menu-trans');
                setIsMenuFixed(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);





    useEffect(() => {
        // menu click on mobile
        hamburgerRef.current.addEventListener('click', () => {

            if (!mobileMenuRaf.current.classList.contains('menu-open')) {
                mobileMenuRaf.current.classList.add('menu-open');
                hamburgerRef.current.classList.add('menu-open');
                setTimeout(() => {
                    // body scroll lock
                    document.body.style.overflow = "hidden";
                    menuRef.current.style.cssText = `opacity:1`;
                }, 100)
                document.querySelector('.menu-bar').classList.add('menu-open')
            } else {
                menuRef.current.style.cssText = `opacity:0`;
                hamburgerRef.current.classList.remove('menu-open');
                setTimeout(() => {
                    mobileMenuRaf.current.classList.remove('menu-open')
                    // body scroll lock remove
                    document.body.style.overflow = "auto";
                }, 1000)
                document.querySelector('.menu-bar').classList.remove('menu-open')
            }
        })

        let getLinkTag = document.querySelectorAll('.mobile-menu__items__ul li a');

        for (let i of getLinkTag) {
            i.addEventListener('click', () => {
                menuRef.current.style.cssText = `opacity:0`;
                hamburgerRef.current.classList.remove('menu-open');
                setTimeout(() => {
                    mobileMenuRaf.current.classList.remove('menu-open')
                    // body scroll lock remove
                    document.body.style.overflow = "auto";
                }, 1000)
            })
        }

        // sub menu

        if (window.screen.width < 769) {
            let menuSub = document.querySelectorAll('.has-sub');
            let menuOpen = document.querySelector('.menu-down');
            let menuOpenInner = document.querySelector('.menu-down ul');

            for (let i of menuSub) {
                i.addEventListener('click', () => {

                    if (!i.classList.contains('menu-down')) {
                        let getLiLength = i.querySelectorAll('ul li').length * i.querySelector('ul li').offsetHeight - 20;
                        let ulSelect = i.querySelector('ul');
                        // console.log('getLiLength', getLiLength)
                        tl.to(ulSelect, {
                            duration: 0,
                            visibility: 'visible'
                        });

                        tl.to(ulSelect, {
                            duration: .4,
                            opacity: '1',
                            height: getLiLength,
                            marginTop: '30px'
                        });
                        i.classList.add('menu-down');
                    } else {
                        let hasMenuDown = i.querySelector('ul');
                        tl.to(hasMenuDown, {
                            duration: .4,
                            height: 0,
                            opacity: 0,
                            marginTop: '0px',
                            visibility: 'hidden'
                        });

                        setTimeout(() => {
                            i.classList.remove('menu-down')
                        }, 500)
                    }

                })

            }
        }


    }, [mobileMenuRaf]);


    //different logo for each business unit route
    const location = useLocation();
    const [logoPath, setLogoPath] = useState('/images/static/logo-d.svg');


    useEffect(() => {
        // Update logo path based on the current route
        if (location.pathname === '/sheygun-interior') {
            setLogoPath('/images/static/l1.svg');
        } else if (location.pathname === '/lanco-brokerage') {
            setLogoPath('/images/static/l2.svg');
        } else if (location.pathname === '/lanco-easy-term') {
            setLogoPath('/images/static/l3.svg');
        } else if (location.pathname === '/be-smart-with-lanco') {
            setLogoPath('/images/static/l6.svg');
        } else if (location.pathname === '/line-architects-ltd') {
            setLogoPath('/images/static/l5.svg');
        } else if (location.pathname === '/lanco-property-management') {
            setLogoPath('/images/static/l4.svg');
        } else {
            setLogoPath('/images/static/logo-d.svg'); // Default logo path
        }
    }, [location.pathname]);




    return (
        <StyledMenu className={'menu-bar'} isMenuFixed={isMenuFixed}>
            <Container>
                <Row className='desktop-menu'>
                    <Col sm={3} className='logo align-items-center d-flex'>
                        <Link to={'/'}><img height={100} width={100} src={logoPath} alt="mainLogo"/></Link>
                    </Col>

                    <Col sm={9}>
                        <ul className=''>
                            <li className='has-sub'>About Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                                      <path id="Polygon_2" data-name="Polygon 2" d="M4,0,8,5H0Z" fill="#f9f9f9"/>
                                    </svg>
                                </span>
                                <ul>
                                    <li className={pathname === '/about' ? 'active' : ''}><Link
                                        to={'/about'}>About</Link></li>
                                    <li className={pathname === '/landowner' ? 'active' : ''}><Link to={'/landowner'}>
                                        Landowner</Link></li>
                                    <li className={pathname === '/buyer' ? 'active' : ''}><Link to={'/buyer'}>
                                        Buyer</Link></li>
                                </ul>
                            </li>
                            <li className='has-sub'>Projects
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                                      <path id="Polygon_2" data-name="Polygon 2" d="M4,0,8,5H0Z" fill="#f9f9f9"/>
                                    </svg>
                                </span>
                                <ul>
                                    <li className={pathname === '/project?status=ongoing' ? 'active' : ''}><Link
                                        to={'/project?status=ongoing'}>Ongoing</Link></li>
                                    <li className={pathname === '/project?status=upcoming' ? 'active' : ''}><Link
                                        to={'/project?status=upcoming'}>Upcoming</Link></li>
                                    <li className={pathname === '/project?status=completed' ? 'active' : ''}><Link
                                        to={'/project?status=completed'}>Completed</Link></li>
                                </ul>
                            </li>
                            <li className='has-sub'>Business Units
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                                      <path id="Polygon_2" data-name="Polygon 2" d="M4,0,8,5H0Z" fill="#f9f9f9"/>
                                    </svg>
                                </span>
                                <ul>
                                    <li className={pathname === '/sheygun-interior' ? 'active' : ''}><Link
                                        to={'/sheygun-interior'}>Sheygun Interior</Link></li>
                                    <li className={pathname === '/lanco-brokerage' ? 'active' : ''}><Link to={'/lanco-brokerage'}>
                                        Lanco Brokerage</Link></li>
                                    <li className={pathname === '/lanco-easy-term' ? 'active' : ''}><Link to={'/lanco-easy-term'}>
                                        Lanco Easy Term</Link></li>
                                    <li className={pathname === '/lanco-property-management' ? 'active' : ''}><Link to={'/lanco-property-management'}>
                                        Lanco Property Management</Link></li>
                                    <li className={pathname === '/line-architects-ltd' ? 'active' : ''}><Link to={'/line-architects-ltd'}>
                                        Line Architects Ltd</Link></li>
                                    <li className={pathname === '/be-smart-with-lanco' ? 'active' : ''}><Link to={'/be-smart-with-lanco'}>
                                        Be Smart with Lanco</Link></li>
                                </ul>
                            </li>
                            <li className={pathname === '/news' ? 'active' : ''}><Link to={'/news'}>Media Center</Link></li>

                            <li className={pathname === '/career' ? 'active' : ''}><Link to={'/career'}>Career</Link>
                            </li>
                            <li className={pathname === '/contact-us' ? 'active' : ''}><Link to={'/contact-us'}>Contact Us</Link></li>
                        </ul>
                    </Col>

                </Row>

                <Row className="mobile-menu" ref={mobileMenuRaf}>
                    <Col className='logo'>
                        <Link to={'/'}><img height={100} width={100} src={logoPath} alt="mainLogo"/></Link>
                    </Col>

                    <Col className='hamburger' ref={hamburgerRef}>
                        <img src={'/images/static/ham.svg'} alt="ham"/>
                        <img src={'/images/static/close.svg'} alt="close"/>
                    </Col>

                    <div className="mobile-menu__items" ref={menuRef}>
                        <ul className='mobile-menu__items__ul'>
                            <li><Link to={'/'}>Home</Link></li>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => setAboutAccordionOpen(!aboutAccordionOpen)}>About Us
                                        {aboutAccordionOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                                <g id="Group_21730" data-name="Group 21730" transform="translate(-21.5 -0.5)">
                                                    <line id="Line_52" data-name="Line 52" x1="18" transform="translate(22 10)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(31 1)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                </g>
                                            </svg>

                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                            <g id="Group_21731" data-name="Group 21731" transform="translate(0.5 0.5)">
                                            <line id="Line_52" data-name="Line 52" x1="18" transform="translate(0 9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1" opacity="0"/>
                                            </g>
                                            </svg>
                                        )}

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li><Link to={'/about'}>About</Link></li>
                                            <li><Link to={'/landowner'}>Landowner</Link></li>
                                            <li><Link to={'/buyer'}>Buyer</Link></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => setProjectsAccordionOpen(!projectsAccordionOpen)}>Projects
                                        {projectsAccordionOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                                <g id="Group_21731" data-name="Group 21731" transform="translate(0.5 0.5)">
                                                    <line id="Line_52" data-name="Line 52" x1="18" transform="translate(0 9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1" opacity="0"/>
                                                </g>
                                            </svg>

                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                                <g id="Group_21730" data-name="Group 21730" transform="translate(-21.5 -0.5)">
                                                    <line id="Line_52" data-name="Line 52" x1="18" transform="translate(22 10)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(31 1)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                </g>
                                            </svg>
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <ul>
                                            <li><Link to={'/project'}>Ongoing</Link></li>
                                            <li><Link to={'/project'}>Upcoming</Link></li>
                                            <li><Link to={'/project'}>Completed</Link></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() => setBusinessAccordionOpen(!businessAccordionOpen)}>Business Units
                                        {businessAccordionOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                                <g id="Group_21731" data-name="Group 21731" transform="translate(0.5 0.5)">
                                                    <line id="Line_52" data-name="Line 52" x1="18" transform="translate(0 9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(9)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1" opacity="0"/>
                                                </g>
                                            </svg>

                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                                <g id="Group_21730" data-name="Group 21730" transform="translate(-21.5 -0.5)">
                                                    <line id="Line_52" data-name="Line 52" x1="18" transform="translate(22 10)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_3875" data-name="Line 3875" y2="18" transform="translate(31 1)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                </g>
                                            </svg>
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <ul>
                                            <li><Link to={'/sheygun-interior'}>Sheygun Interior</Link></li>
                                            <li><Link to={'/lanco-brokerage'}>Lanco Brokerage</Link></li>
                                            <li><Link to={'/lanco-easy-term'}>Lanco Easy Term</Link></li>
                                            <li><Link to={'/lanco-property-management'}>Lanco Property Management</Link></li>
                                            <li><Link to={'/line-architects-ltd'}>Line Architechts Ltd</Link></li>
                                            <li><Link to={'/be-smart-with-lanco'}>Be Smart with Lanco</Link></li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>


                                <li><Link to={'/news'}>Media Center</Link></li>

                                <li><Link to={'/career'}>Career</Link></li>
                                <li><Link to={'/contact-us'}>Contact Us</Link></li>
                            </Accordion>

                        </ul>
                        <ul className='mobile-menu__items__social'>
                            <li>
                                <a href={'/facebook'} target={'_blank'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <g id="Group_21709" data-name="Group 21709" transform="translate(2463)">
                                            <rect id="Rectangle_5835" data-name="Rectangle 5835" width="18" height="18" transform="translate(-2463)" fill="#67a66d" opacity="0"/>
                                            <g id="facebook-app-symbol" transform="translate(-2458)">
                                                <path id="f_1_" d="M11.836,18V9.79h2.755L15,6.589H11.836V4.546c0-.926.256-1.558,1.586-1.558h1.693V.125A22.961,22.961,0,0,0,12.648,0,3.856,3.856,0,0,0,8.532,4.229v2.36H5.769v3.2H8.532V18Z" transform="translate(-5.769)" fill="#b1b0b0"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href={'/linkedin'} target={'_blank'}>
                                    <svg id="_x31_0.Linkedin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path id="Path_6021" data-name="Path 6021" d="M23.122,22.9V16.305c0-3.24-.7-5.715-4.478-5.715a3.907,3.907,0,0,0-3.533,1.935h-.045V10.882H11.49V22.9h3.735V16.935c0-1.575.292-3.083,2.227-3.083,1.912,0,1.935,1.778,1.935,3.173v5.85h3.735Z" transform="translate(-5.123 -4.897)" fill="#b1b0b0"/>
                                        <path id="Path_6022" data-name="Path 6022" d="M3.39,10.98H7.125V23H3.39Z" transform="translate(-3.097 -4.995)" fill="#b1b0b0"/>
                                        <path id="Path_6023" data-name="Path 6023" d="M5.16,3A2.171,2.171,0,1,0,7.32,5.16,2.161,2.161,0,0,0,5.16,3Z" transform="translate(-3 -3)" fill="#b1b0b0"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href={'/youtube'} target={'_blank'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Group_21711" data-name="Group 21711" transform="translate(2378)">
                                            <rect id="Rectangle_5837" data-name="Rectangle 5837" width="20" height="20" transform="translate(-2378)" fill="#67a66d" opacity="0"/>
                                            <g id="youtube" transform="translate(-2378 3)">
                                                <path id="youtube-2" data-name="youtube" d="M19.583,1.963A2.5,2.5,0,0,0,17.821.2C16.256-.228,10-.228,10-.228s-6.259,0-7.823.412A2.556,2.556,0,0,0,.412,1.963,26.4,26.4,0,0,0,0,6.772a26.3,26.3,0,0,0,.412,4.809,2.505,2.505,0,0,0,1.762,1.762c1.581.428,7.824.428,7.824.428s6.259,0,7.823-.412A2.505,2.505,0,0,0,19.584,11.6,26.4,26.4,0,0,0,20,6.788a25.056,25.056,0,0,0-.412-4.826ZM8,9.77v-6l5.2,3Zm0,0" transform="translate(0 0.228)" fill="#b1b0b0"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href={'/twitter'} target={'_blank'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21712" data-name="Group 21712" transform="translate(2324)">
                                            <rect id="Rectangle_5838" data-name="Rectangle 5838" width="18" height="18" transform="translate(-2324)" fill="#67a66d" opacity="0"/>
                                            <g id="_x30_4.Twitter" transform="translate(-2323 2)">
                                                <path id="_x30_4.Twitter-2" data-name="_x30_4.Twitter" d="M19.733,4.8a7.57,7.57,0,0,1-2.115.585,3.6,3.6,0,0,0,1.62-2.047,7.771,7.771,0,0,1-2.34.9,3.693,3.693,0,0,0-6.39,2.52,3.374,3.374,0,0,0,.09.833A10.387,10.387,0,0,1,3.015,3.738,3.7,3.7,0,0,0,4.14,8.665a3.543,3.543,0,0,1-1.665-.45,3.729,3.729,0,0,0,2.948,3.667,4.05,4.05,0,0,1-1.665.067A3.705,3.705,0,0,0,7.2,14.515a7.434,7.434,0,0,1-5.467,1.53A10.409,10.409,0,0,0,7.4,17.71,10.408,10.408,0,0,0,17.887,7.225a3.323,3.323,0,0,0-.022-.473A7.324,7.324,0,0,0,19.733,4.8Z" transform="translate(-1.732 -3.063)" fill="#b1b0b0"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </Row>

            </Container>
        </StyledMenu>
    )
};

const StyledMenu = styled.section`
  position: ${props => props.isMenuFixed ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isMenuFixed ? '0px' : '133px'};
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: end;
  transform: ${props => props.isMenuFixed ? 'translate3d(0, -120%, 0)' : 'translate3d(0, 0, 0)'};
  transition: transform 0.2s ease-in-out;
  
  
  &.menu-trans{
    //height: 133px;
    background-color: rgba(0, 0, 0, 0.5);
    //transform: translate3d(0, 0%, 0);
    transition: transform 0.2s ease-in-out, background-color 1s ease;
  }
  
  &.menu-fixed{
    height: 133px;
    background-color: #222222;
    transform: translate3d(0, 0%, 0);
    transition: transform 1s ease-in-out, background-color 1s ease;
    @media(max-width: 767px){
      height: 95px;
    }
  }

  .logo{
    position: relative;
    height: 120px;
    margin-bottom: 15px;
    @media(max-width: 767px){
      height: 93px;
    }
  }

  .desktop-menu {
    ul {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      align-items: flex-end;
      li {
        display: flex;
        height: 80px;
        align-items: center;
        color: #ffffff;
        font-size: 15px;
        margin-right: 30px;
        cursor: pointer;
        
        span{
          svg {
            transition: transform 0.3s ease; 
          }
        }

        &:hover {
          color: #cfcdcc !important;
        }
        a {
          display: flex;
          height: 80px;
          align-items: center;
          color: #ffffff;
          font-size: 15px;

          &:hover {
            color: #cfcdcc !important;
          }
        }

        &:nth-last-child(1) {
          margin-right: 0;
        }

        &.has-sub {
          position: relative;

          span {
            margin-left: 10px;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            border: 1px solid #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &:after {
              content: '';
              height: 0;
              width: 0;
              //background-color: #18A354;
              position: absolute;
              border-radius: 50%;
              transition: all .3s ease;
            }

            img {
              height: 4px;
              z-index: 3;
            }
          }

          ul {
            height: auto;
            opacity: 0;
            position: absolute;
            visibility: hidden;
            top: 80px;
            min-width: 150px;
            background-color: #fff;
            padding: 20px;
            justify-content: start;
            transition: all .6s ease;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 6px 30px rgb(0 0 0 / 24%);
            

            li {
              height: auto;
              margin: 0;
              padding-left: 15px;
              padding-right: 15px;
              margin-bottom: 10px;
              width: 100%;
              border-bottom: 1px solid rgb(0 0 0 / 20%) !important;
              &:hover {
                color: rgba(255, 255, 255, 0.6) !important;
              }

              a {
                color: #000;
                height: auto;
                font-size: 14px;
                margin: 0 0 10px 0;
                white-space: nowrap;

                &:hover {
                  color: #000 !important;
                  opacity: 60%;
                }
              }

              &:last-child {
                border-bottom: 0 !important;
              }
            }

          }


        }


        &:hover {
          span {
            svg{
              position: relative;
              z-index: 1;
              transform: rotate(180deg);
            }

            &:after {
              height: 100%;
              width: 100%;
            }
          }

          ul {
            opacity: 1;
            visibility: visible;
          }
        }

        &:nth-last-child(1) {
          ul {
            left: -109px;

            &:after {
              right: 50px;
            }
          }
        }
      }

    }
  }

  .mobile-menu {
    display: none;
    height: 95px;

    .logo img {
      height: 93px;
      padding-bottom: 10px;
    }

    .hamburger {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        position: absolute;
        right: 15px;
        height: 25px;

        &:nth-of-type(2) {
          display: none;
        }
      }

      &.menu-open img {
        &:nth-of-type(1) {
          display: none;
        }

        &:nth-of-type(2) {
          display: block;
          right: 20px;
          position: relative;
          z-index: 100;
        }
      }
    }

    &__items {
      display: none;
      position: absolute;
      opacity: 0;
      background-color: #000000;
      height: 100vh;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
      padding: 120px 15px 60px 15px;
      overflow: auto;
      transition: opacity .5s ease;
      &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 768px;
        background-image: url('/images/static/menu-bg.png');
        background-size: cover;
        z-index: -1;
      }

      ul {
        li {
          padding-bottom: 15px;
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          text-transform: capitalize;

          a {
            color: #ffffff;
          }
        }
      }
      &__social{
        position: absolute;
        display: flex;
        bottom: 56px;
        li{
          border-bottom: 0 !important;
          margin-right: 30px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }

    &.menu-open {

      .mobile-menu__items {
        display: block;
      }

    }

    //accordion
    .accordion-header {
      .accordion-button {
        background-color: transparent;
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: #ffffff;
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        padding: 0;
        box-shadow: none;
        border: none;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(255 255 255 / 30%);

        img {
          height: 20px;
        }

        &.collapsed {
          border-bottom: 0!important;
        }
      }


    }

    .accordion-body {
      margin-bottom: 40px;
      margin-top: 30px;

      ul {
        li {
          border: none;
          margin-bottom: 20px;
          padding-bottom: 0;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;

          &:after {
            display: none;
          }
        }
      }
    }


  }

  &.menu-fixed, &.menu-open {
    background-color: #1c1c1c;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.24);
  }

  .active a {
    color: #cfcdcc !important;
  }


  @media (max-width: 769px) {
    background-color: rgba(0, 0, 0, 0.1);
    height: 95px;
    overflow: visible;
    .desktop-menu {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }
  }
  


`;


export default React.memo(MenuV9);
