import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";
import reactHtmlParser from "react-html-parser";
import {Col, Container, Modal, Row} from "react-bootstrap";
import {gsap} from "gsap";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "../Img";

const Slider = ({padding, data, id}) => {

    console.log(data)

    const subtitle = data?.section_data?.subtitle;
    const title = data?.section_data?.short_desc;
    const desc = data?.section_data?.description;
    const slide = data?.posts?.list;
    const [show, setShow] = useState(false);

    // offset get
    const [offset, setOffset] = useState(90)


    const NewsgoPrev = () => {
        // document.querySelector('.slider_left .swiper-button-prev').click();
        document.querySelector('.right_side .swiper-button-prev').click();

    };

    const NewsgoNext = () => {
        // document.querySelector('.slider_left .swiper-button-next').click();
        document.querySelector('.right_side .swiper-button-next').click();

    };

    useEffect(() => {
        window.addEventListener('load', function () {
            setOffset(document.querySelector(' .container').offsetLeft)

        })
        window.addEventListener('resize', function () {
            setOffset(document.querySelector(' .container').offsetLeft)

        })

        setOffset(document.querySelector(' .container').offsetLeft)


    }, [])

    return (

        <StyledBox id={`${id ? id : 'SliderBox'}`} className={`slider_component ${padding ? padding : 'pt-160 pb-160'}`}>
            <Container fluid className={'version_one p-0'}>
                <Row>
                    <Col md={4} className={'slider_left'}>
                        <div style={{paddingLeft: offset + 15 + 'px'}} className="left_side_content_wrapper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                slideNextClass={'.next'}
                                allowSlideNext={true}
                                slidePrevClass={'.prev'}
                                allowSlidePrev={true}
                                loopp={true}
                                allowTouchMove={true}
                                longSwipesMs={900}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                }}
                                navigation={true} modules={[Navigation]}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide key="0">
                                    <div className="content_wrapper_slider" >
                                        <h3 className={'split-up'}>{data?.section_data?.subtitle}</h3>
                                        <div className='split-up'>
                                            {
                                                data?.section_data?.description &&
                                                <p className={''}>{reactHtmlParser(data?.section_data?.description)}</p>
                                            }

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>


                        <ul style={{left: offset + 30 + 'px'}} className="slider_nav desktop d-flex">
                            <li onClick={NewsgoPrev} className={'slider_prev hover'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                     viewBox="0 0 7.828 12.828">
                                    <g id="Group_6" data-name="Group 6"
                                       transform="translate(1.414 11.414) rotate(-90)">
                                        <line id="Line_4" data-name="Line 4" y1="5" x2="5" fill="none" stroke="#fff"
                                              strokeLinecap="round" stroke-width="2"/>
                                        <line id="Line_5" data-name="Line 5" x1="5" y1="5" transform="translate(5)"
                                              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>
                                    </g>
                                </svg>


                            </li>
                            <li onClick={NewsgoNext} className={'slider_next hover'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                     viewBox="0 0 7.828 12.828">
                                    <g id="Group_6" data-name="Group 6"
                                       transform="translate(-92.086 454.914) rotate(-90)">
                                        <line id="Line_4" data-name="Line 4" x2="5" y2="5"
                                              transform="translate(443.5 93.5)" fill="none" stroke="#fff"
                                              strokeLinecap="round" stroke-width="2"/>
                                        <line id="Line_5" data-name="Line 5" x1="5" y2="5"
                                              transform="translate(448.5 93.5)" fill="none" stroke="#fff"
                                              strokeLinecap="round" stroke-width="2"/>
                                    </g>
                                </svg>



                            </li>
                        </ul>
                    </Col>
                    <Col md={{span: 8}} className='right_side'>
                        {
                            data?.posts?.list ?
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={2}
                                    slideNextClass={'.next'}
                                    allowSlideNext={true}
                                    slidePrevClass={'.prev'}
                                    allowSlidePrev={true}
                                    allowTouchMove={true}
                                    longSwipesMs={1500}
                                    loopp={true}
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
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    navigation={true} modules={[Navigation]}
                                    onSwiper={(swiper) => console.log(swiper)}

                                >
                                    {
                                        data?.posts?.list?.length>0 &&
                                        data?.posts?.list?.map((e, i)=>{
                                            return(
                                                <SwiperSlide className={'single_image_image'} key={i}>
                                                    <div className="full_wrapp">
                                                        <h6 className={'split-up'}>{e?.data?.title}</h6>
                                                        <img src={e?.images?.[0]?.full_path}/>
                                                        <span>{i+1}</span>
                                                    </div>

                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>
                                : ''
                        }
                    </Col>
                </Row>
            </Container>



        </StyledBox>

    )
};


const StyledBox = styled.section`
  background: #fff;
  overflow: hidden;
  .swiper-button-prev, .swiper-button-next {
    opacity: 0;
    visibility: hidden;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  .slider_left {
    //padding-right: 30px;

    h3 {
      line-height: 48px;
      font-size: 40px;
      font-weight: 500;
      color: #020C1E;
      margin-bottom: 30px;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #4F616B;
    }
  }

  .right_side {

    .swiper-initialized{
      padding-right: 100px;
      @media(max-width: 992px){
        padding-right: 0;
      }


    }


  }

  ul{
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
      height: 40px;
      width: 40px;

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
  

  .version_one {
    .title {
      flex-direction: column-reverse;
    }

    .row {
      position: relative;
    }

    .slider_left {
      position: relative;
      @media (max-width: 767px) {
        padding: 0px 15px !important;
      }

      .slider_nav {
        position: absolute;
        left: 15px;
        bottom: 0;
        z-index: 3;
      }
    }

    .full_wrapp {
      background: #F2F2F2;
      //padding: 40px;
      margin-bottom: 90px;
      position: relative;
      cursor: pointer;
      height: 100%;
      span {
        font-size: 160px;
        font-weight: 500;
        line-height: 160px;
        color: #000;
        opacity: 20%;
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        left: 0;
        right: 0;
      }

      h6 {
        font-family: Suisse Intl;
        padding-top: 40px;
        font-size: 24px;
        color: #000000;
        font-weight: 500;
        margin-bottom: 34px;
        text-align: center;
      }

      img{
        width: 100% !important;
      }
      //.single_image_image_wrp {
      //  position: relative;
      //  padding-top: calc(370 / 370 * 100%);
      //  //margin-bottom: 50px;
      //  img{
      //    object-fit: contain;
      //  }
      //}
    }


  }


  @media(max-width: 1180px) and (min-width: 768px){

    .slider_nav{
      bottom: -90px !important;
    }
  }
  @media(max-width: 992px) and (min-width: 768px){
    .version_one .slider_left , .version_one .right_side {
      flex: 0 0 50%;
      max-width: 50%;
    }

  }

  @media (max-width: 767px) {
    .container-fluid {
      padding: 0 15px !important;
    }

    .left_side_content_wrapper {
      padding: 0 !important;
    }
    .slider_nav{
      margin: 40px 0;
      position: relative !important;
      left: 0 !important;
    }

    .mobile {
      margin-top: 30px;
      display: flex !important;
    }



    overflow: hidden;
  }


`;


export default React.memo(Slider);