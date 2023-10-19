import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import NewsBox from "../NewsBox";
import ProjectBox from "../ProjectBox";


const MyComponent = ({data, list}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let [offset, setOffset] = useState(90)
    let containerRef = useRef();
    let [theWidth, SetTheWidth] = useState(0)

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

    useEffect(() => {
        setOffset(containerRef.current?.offsetLeft)
        window.addEventListener('resize', () => {
            setOffset(containerRef.current?.offsetLeft)
            SetTheWidth(window.innerWidth)
        })
    }, [data])

    return (
        <StyledComponent>
            <div className={'ongoing__bottom'}>
                {
                    windowWidth > 767 ?
                        <img src={data?.images?.list?.filter(image => image.desktop === 'on')?.[0]?.full_path}/>
                        :
                        <img src={data?.images?.list?.filter(image => image.mobile === 'on')?.[0]?.full_path}/>
                }
            </div>
            <Container className={'ongoing__top pt-150 '}>
                <Row>
                    <Col md={6} className={'ongoing__top__left'}>
                        <div className={'ongoing__top__left__items'}>
                            <h3 className={'split-up'}>{reactHtmlParser(data?.section_data?.subtitle)}</h3>
                            <p className={'split-up'}>
                                {reactHtmlParser(data?.section_data?.description)}
                            </p>
                            <ul className={'arrows'}>
                                <li className={'prev_swipper hover'} id={'prev_ongoing'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                         viewBox="0 0 7.828 12.828">
                                        <g id="Group_6" data-name="Group 6"
                                           transform="translate(1.414 11.414) rotate(-90)">
                                            <line id="Line_4" data-name="Line 4" y1="5" x2="5" fill="none" stroke="#000"
                                                  strokeLinecap="round" stroke-width="2"/>
                                            <line id="Line_5" data-name="Line 5" x1="5" y1="5" transform="translate(5)"
                                                  fill="none" stroke="#000" strokeLinecap="round" stroke-width="2"/>
                                        </g>
                                    </svg>

                                </li>
                                <li className={'next_swipper hover'} id={'next_ongoing'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                         viewBox="0 0 7.828 12.828">
                                        <g id="Group_6" data-name="Group 6"
                                           transform="translate(-92.086 454.914) rotate(-90)">
                                            <line id="Line_4" data-name="Line 4" x2="5" y2="5"
                                                  transform="translate(443.5 93.5)" fill="none" stroke="#000"
                                                  strokeLinecap="round" stroke-width="2"/>
                                            <line id="Line_5" data-name="Line 5" x1="5" y2="5"
                                                  transform="translate(448.5 93.5)" fill="none" stroke="#000"
                                                  strokeLinecap="round" stroke-width="2"/>
                                        </g>
                                    </svg>

                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} className={'ongoing__top__right'}>
                        <p className={'split-up'}>
                            {reactHtmlParser(data?.section_data?.description)}
                        </p>
                    </Col>
                    <Col md={12} className={'ongoing__top__slider'}>
                        {
                            list ?
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation, A11y]}
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    loop={false}
                                    speed='2000'
                                    grabCursor={true}
                                    navigation={{
                                        prevEl: '#prev_ongoing',
                                        nextEl: '#next_ongoing',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            // spaceBetween: 30,
                                            slidesPerGroup: 1

                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                            // slidesPerGroup: 1

                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                            slidesPerGroup: 2

                                        },
                                    }}
                                >
                                    {
                                        list?.length>0 && list?.map((e, i)=>{
                                            return(
                                                <SwiperSlide key={i}>
                                                    <ProjectBox data={e}/>
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
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  .ongoing__bottom{
    position: absolute;
    width: 100%;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .ongoing__top{
    &__left{
      h3 {
        color: #F9F9F9;
      }

      p {

        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #F9F9F9;
        display: none;
      }

      &__items {
        ul {
          margin-top: 160px;
          gap: 24px;
          position: relative;
          display: flex;

          li {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;

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
      }
    }
    &__right {
      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #F9F9F9;
      }
    }
  }
  
  .swiper-slide{
    max-width: 41.67%;
    @media(max-width: 767px){
      max-width: 100% !important;
    }
  }
  
  .swiper{
    margin-top: 80px;
    overflow: visible;
  }
  .project-box__single {
    position: relative;
    //margin-bottom: 60px;
    //@media(max-width: 767px){
    //  margin-bottom: 0;
    //}

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      cursor: pointer;
    }

    &:hover {
      .global-image {
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
        transform: scale(1.06);
      }
    }

    &__image {
      position: relative;
      padding-top: calc(650 / 470 * 100%) !important;
      overflow: hidden;

      .global-image {
        filter: grayscale(100%);
        overflow: hidden;
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
      }
      &:after {
        position: absolute;
        content: '';
        background-color: #0d0a0a;
        opacity: 30%;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
      }
      &:hover {
        .global-image {
          filter: none;
        }
        &:after{
          opacity: 20%;
          transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
        }
      }
    }

    &__text {
      position: absolute;
      bottom: 40px;
      left: 30px;

      h6 {
        font-size: 24px;
        line-height: 38px;
        color: #FFFF;
        font-weight: 500;
      }

      p {
        display: flex;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 0;
      }
    }

    &__icon {
      position: absolute;
      top: 30px;
      left: 0;
      //transform: translate(-50% , -50%);
      cursor: pointer;
      z-index: 999999;


      p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: #fff;
        background-color: #FF0000;
        padding: 12px 42px 16px 35px;
      }
    }

  }
  .dot {
    display: flex;
    justify-content: end;
    align-items: end;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFFFFF;
    margin-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 767px) {
    .ongoing__bottom{
      position: absolute;
      width: 100%;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .ongoing__top{
      &__left{
        h3{
          font-size: 38px;
          line-height: 40px;
          font-weight: 600;
          margin-bottom: 40px;
        }
        p{
          display: initial;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }
        &__items{
          ul{
            margin-top: 40px;
          }
        }
      }
      &__right{
        display: none;
      }
      &__slider{
        padding-left: 0 ;
        padding-right: 0;
      }
    }
  }
`;

export default MyComponent;
