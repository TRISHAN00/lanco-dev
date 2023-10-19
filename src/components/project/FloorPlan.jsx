import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Img} from "../Img";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import 'react-modal-video/css/modal-video.min.css'
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";


const FloorPlan = ({data, padding}) => {



    // navigation
    const prev = () => {
        document.querySelector('.floor-plan .swiper-button-prev').click();
    };

    const next = () => {
        document.querySelector('.floor-plan .swiper-button-next').click();
    };


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <StyledFloorPlan id={'plan'} className={`floor-plan ${padding ? padding : 'pt-120 pb-120'}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="floor-plan__head">
                            <h5>Floor Plan</h5>
                            {
                                windowWidth > 767 ?
                                    '' :
                                    <div className="navigation">
                                        <ul>
                                            <li onClick={prev} className={'hover'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                                     viewBox="0 0 7.828 12.828">
                                                    <g id="Group_6" data-name="Group 6"
                                                       transform="translate(1.414 11.414) rotate(-90)">
                                                        <line id="Line_4" data-name="Line 4" y1="5" x2="5" fill="none" stroke="#fff"
                                                              strokeLinecap="round" strokeWidth="2"/>
                                                        <line id="Line_5" data-name="Line 5" x1="5" y1="5" transform="translate(5)"
                                                              fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                                                    </g>
                                                </svg>


                                            </li>
                                            <li onClick={next} className={'hover'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                                     viewBox="0 0 7.828 12.828">
                                                    <g id="Group_6" data-name="Group 6"
                                                       transform="translate(-92.086 454.914) rotate(-90)">
                                                        <line id="Line_4" data-name="Line 4" x2="5" y2="5"
                                                              transform="translate(443.5 93.5)" fill="none" stroke="#fff"
                                                              strokeLinecap="round" strokeWidth="2"/>
                                                        <line id="Line_5" data-name="Line 5" x1="5" y2="5"
                                                              transform="translate(448.5 93.5)" fill="none" stroke="#fff"
                                                              strokeLinecap="round" strokeWidth="2"/>
                                                    </g>
                                                </svg>

                                            </li>
                                        </ul>
                                    </div>
                            }


                        </div>
                        <div className="floor-plan__content">
                            <LightgalleryProvider>
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation]}
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    loop={true}
                                    speed='1000'
                                    grabCursor={true}
                                    watchSlidesProgress={true}
                                    mousewheelControl={true}
                                    keyboardControl={true}
                                    navigation
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}

                                    className="mySwiper"
                                >
                                    {
                                        data?.[0]?.images && data?.[0]?.images?.length > 0 &&
                                        data?.[0]?.images.map((element, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="slide-inner">
                                                        <LightgalleryItem group="any" src={element?.full_path}>
                                                            <div className="slide-inner__img reveal">
                                                                <Img src={element?.full_path}/>
                                                            </div>
                                                        </LightgalleryItem>
                                                        <p>{element?.short_title}</p>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })
                                    }

                                </Swiper>
                            </LightgalleryProvider>
                        </div>
                    </Col>

                </Row>
            </Container>
        </StyledFloorPlan>
    );
};
const StyledFloorPlan = styled.section`
  background-color: #FFFFFF;
  overflow: hidden;

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  .slide-inner {
    p {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      margin-top: 30px;
      color: #222222;
    }
  }

  .floor-plan {
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 60px;

      h5 {
        color: #000;
        @media (max-width: 767px) {
          font-size: 30px;
          line-height: 38px;
        }
      }
    }

    &__content {
      .slide-inner {
        &__img {
          padding-top: calc(300 / 370 * 100%);
          position: relative;
          cursor: pointer;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .navigation {

    ul {
      gap: 24px;
      position: relative;
      display: flex;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;

        &.hover:after {
          background-color: #67A66D;
        }


        position: relative;
        border-radius: 50%;
        height: 52px;
        width: 52px;

        svg {
          position: relative;

          #Ellipse_4378 {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 0;
          }

          &:hover {
            #Ellipse_4378 {
              transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
              r: 26px;
            }
          }
        }
      }
    }
  }


  @media (max-width: 767px) {
    .floor-plan {
      &__head {
        margin-bottom: 40px;
        display: block;

        h5 {
          margin-bottom: 30px !important;
        }
      }
    }

    &__content {
      .slide-inner {
        &__img {
          padding-top: calc(345 / 280 * 100%);
        }
      }
    }
  }
}


`;
export default React.memo(FloorPlan);
