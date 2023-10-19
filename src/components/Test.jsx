import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";
import {Img} from "./Img";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import Button from "./Button";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";

const BannerSlider = ({data}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // Update the window width when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [current, setCurrent] = useState('1')

    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.banner-slider .swiper-pagination-current')) {
                setCurrent(document.querySelector('.banner-slider .swiper-pagination-current').innerHTML)
            }
        }, 200)
    }


    return (
        <StyledBanner className="banner-slider">
            <div>
                <div className={"navigation"}>
                    <ul className={'arrows'}>
                        <li className={'prev_swipper hover'} id={'parenting-prev'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41.207" height="21.414" viewBox="0 0 41.207 21.414">
                                <g id="Group_5743" data-name="Group 5743" transform="translate(0.707 0.707)">
                                    <line id="Line_59" data-name="Line 59" x1="10" y2="10" fill="none" stroke="#fff"
                                          strokeLinecap="round" stroke-width="1"/>
                                    <line id="Line_60" data-name="Line 60" x1="10" y1="10" transform="translate(0 10)"
                                          fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    <line id="Line_61" data-name="Line 61" x2="40" transform="translate(0 10)" fill="none"
                                          stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                </g>
                            </svg>

                        </li>
                        <li>
                            <span>{current}/3</span>
                        </li>
                        <li className={'next_swipper hover'} id={'parenting-next'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41.207" height="21.414" viewBox="0 0 41.207 21.414">
                                <g id="Group_5742" data-name="Group 5742" transform="translate(-1838 688.207)">
                                    <line id="Line_59" data-name="Line 59" x2="10" y2="10" transform="translate(1868.5 -687.5)"
                                          fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    <line id="Line_60" data-name="Line 60" y1="10" x2="10" transform="translate(1868.5 -677.5)"
                                          fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    <line id="Line_61" data-name="Line 61" x1="40" transform="translate(1838.5 -677.5)"
                                          fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                </g>
                            </svg>

                        </li>
                    </ul>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, A11y]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={false}
                    speed='2000'
                    grabCursor={true}
                    navigation={{
                        prevEl: '#parenting-prev',
                        nextEl: '#parenting-next',
                    }}
                    pagination={{
                        // el: '.swiper-pagination',
                        type: "fraction",
                    }}
                    onSlideChange={(s) => handleSliderCurrent()}

                >
                    <SwiperSlide>
                        <div className="banner-slider__single">
                            {
                                windowWidth > 767 ?
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                                    :
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner-mob.jpg'}/>
                            }
                            <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                            <Container>
                                <div className={'contents'}>
                                    <div className={'top-content'}>
                                        <h4>
                                            Home is not just
                                            a place, it’s a feeling
                                        </h4>

                                    </div>
                                    <div className={'bottom-content'}>
                                        <div>
                                            <h4>Saffron Garden</h4>
                                            <p>North Dhanmondhi, Kalabagan</p>
                                        </div>
                                        <div onClick={handleShow}>
                                            <Button text={'Discover'} icon/>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-slider__single">
                            {
                                windowWidth > 767 ?
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                                    :
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner-mob.jpg'}/>
                            }
                            <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                            <Container>
                                <div className={'contents'}>
                                    <div className={'top-content'}>
                                        <h4>
                                            Home is not just<br/>
                                            a place, it’s a feeling
                                        </h4>

                                    </div>
                                    <div className={'bottom-content'}>
                                        <div>
                                            <h4>Saffron Garden</h4>
                                            <p>North Dhanmondhi, Kalabagan</p>
                                        </div>
                                        <div onClick={handleShow}>
                                            <Button text={'Discover'} icon/>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-slider__single">
                            {
                                windowWidth > 767 ?
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                                    :
                                    <Img layout={"fill"} src={'/images/dynamic/home/banner-mob.jpg'}/>
                            }
                            <Img layout={"fill"} src={'/images/dynamic/home/banner1.jpg'}/>
                            <Container>
                                <div className={'contents'}>
                                    <div className={'top-content'}>
                                        <h4>
                                            Home is not just<br/>
                                            a place, it’s a feeling
                                        </h4>

                                    </div>
                                    <div className={'bottom-content'}>
                                        <div>
                                            <h4>Saffron Garden</h4>
                                            <p>North Dhanmondhi, Kalabagan</p>
                                        </div>
                                        <div onClick={handleShow}>
                                            <Button text={'Discover'} icon/>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Modal show={show} className='home-modal' onHide={handleClose}>
                <Modal.Body>
                    <Row className={'ongoing'}>
                        <Col md={{offset:2, span:5}} className={'ongoing-img'}>
                           <div className={'image-wrap'}>
                               <Img src={'/images/dynamic/home/po.jpg'}/>
                           </div>
                        </Col>
                        <Col md={5} className={'ongoing-data'}>
                            <div className={'ongoing-data__top'}>
                                <h4>Safron Garden</h4>
                                <p>North Dhanmondi, Kolabagan</p>
                                <ul>
                                    <li>
                                        <p>
                                            A harmonious blend of modern luxury and serene living. Nestled amidst lush landscapes,
                                            our thoughtfully designed homes offer a perfect retreat from the bustling city life.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Size: A-1788, B-1330, C-1418<br/>
                                            Tentative handover:  July 2024
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={'ongoing-data__bottom'}>
                                <div className="form_wrapper">
                                    <h4 className="title">
                                        Schedule a visit
                                    </h4>
                                    <Form className={'form'}>

                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Name*"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Email*"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control type="text" placeholder="Phone*"/>
                                            </Form.Group>
                                        </div>
                                        <div className={'form-group button d-flex'} onClick={handleClose}>
                                            <Button background={'#67A66D'} hoverBackground={'#222222'} text={'Submit'}/>
                                            <Button text={'Explore More'} icon/>
                                        </div>

                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </StyledBanner>
    );
};

const StyledBanner = styled.section`
  position: relative;
  height: 100vh;
  .banner-slider{
    
  }
  .navigation{
    bottom: 35%;
    right: 10%;
    position: absolute;
    ul{
      display: flex;
      li{
        margin-right: 20px;
        span{
          color: #fff;
          z-index: 111;
          position: relative;
        }
        &:last-child{
          margin-right: 0;
        }
      }
    }
    @media(max-width: 767px){
      top: 15%;
      bottom: 0;
      left: 5%;
    }
  }
  .banner-slider__single {
    position: relative;
    height: 100vh;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      z-index: 1;
      left: 0;
      top: 0;
    }

    video {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
    }
    

    .container {
      position: relative;
      z-index: 9;
      height: 100%;
      //bottom: 90px;
      margin-bottom: auto;

      .contents {
        position: absolute;
        bottom: 0;
        width: calc(100% - 30px);
        margin-bottom: 90px;

        .top-content {
          //position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid #f9f9f9;
          padding-bottom: 20px;
          //bottom: 200px;
          margin-bottom: 40px;
          width: 100%;

          h4 {
            color: #f9f9f9;
            width: 50%;
          }

          ul {
            display: flex;

            li {
              cursor: pointer;
              margin-right: 20px;

              &:last-child {
                margin-right: 0;
              }

              span {
                color: #FFFFFF;
                display: flex;
                position: absolute;
                top: 80px;
                right: 65px;

                p {
                  color: #FFFFFF;
                }
              }
            }
          }
        }

        .bottom-content {
          //position: absolute;
          //bottom: 90px;
          width: 50%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          h4 {
            font-size: 20px;
            line-height: 40px;
            font-weight: 600;
            color: #FFFFFF;
          }

          p {
            font-size: 20px;
            font-weight: 300;
            color: #FFFFFF;
            margin: 0;
          }
        }
      }
    }
  }
}


@media (max-width: 991px) {
  height: 100vh;
  .banner-slider__single {
    height: 100vh;
    .container {
      
    }
  }
}


@media (max-width: 767px) {
  .banner-slider__single {
    //padding-top: calc(768 / 375 * 100%);
    height: 100vh;

    .container {
      .contents {
        .top-content {
          h4{
            width: 100%;
          }
        }

        .bottom-content {
          display: block;

          .dc-btn {
            margin-top: 20px;
          }
        }
      }
    }
  }
`;
export default React.memo(BannerSlider);
