import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import VisibilitySensor from "react-visibility-sensor";
import {Img} from "../Img";
import SubTitle from "../SubTitle";
import React from "react";
const RandomSliderV1 = ({Data, data}) => {





    // SwiperCore.use([Autoplay]);
    let leftRef = useRef();
    let rightRef = useRef();
    let mLeftRef = useRef();
    let mRightRef = useRef();
    let containerRef = useRef();
    let sliderRef = useRef();

    let [offset, setOffset] = useState(90)
    let [theWidth, SetTheWidth] = useState(0)
    let [activeNumber, setActiveNumber] = useState(1)
    let [totalNumber, setTotalNumber] = useState(1)

    useEffect(() => {

        leftRef.current.addEventListener('click', () => {
            if (document.querySelector('.swiper-button-prev')) {
                document.querySelector('.swiper-button-prev').click()
            }
        });
        rightRef.current.addEventListener('click', () => {
            if (document.querySelector('.swiper-button-next')) {
                document.querySelector('.swiper-button-next').click()
            }
        });
        setOffset(document.querySelector(' .container').offsetLeft)

    }, [])


    useEffect(() => {
        setOffset(containerRef.current?.offsetLeft)
        window.addEventListener('resize', () => {
            setOffset(containerRef.current?.offsetLeft)
            SetTheWidth(window.innerWidth)
        })

        // slider number
        const getActiveItem = document.querySelector('.swiper-pagination-current')?.innerHTML
        const getTotalItem = document.querySelector('.swiper-pagination-total')?.innerHTML
        setActiveNumber(getActiveItem)
        setTotalNumber(getTotalItem)
    }, [Data])


    useEffect(() => {
        // document.querySelector('.swiper-container').style.paddingLeft = offset + 'px'
    }, [offset, sliderRef])


    useEffect(() => {
        if (sliderRef.current) {
            const swiperInstance = sliderRef.current.swiper;
            if (swiperInstance) {
                setTotalNumber(swiperInstance.slides.length);
            }
        }
    }, [Data])
    const [swiperIndex, setSwiperIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setSwiperIndex(swiper.realIndex);
    };


    console.log(data)


    return (
        <StyledLeader offset={offset} className='leader-slider pt-150 pb-150'>
            <Container ref={containerRef}>
                <Row>
                    <Col md={12}>
                        <SubTitle text={data?.section_data?.title} marginBottom={'30'} borderWidth={'30'}/>
                    </Col>
                    <Col sm={12} className={'split-up'}>
                        <div className="leader-button">
                            <h5>{data?.section_data?.short_desc}</h5>
                            <div className="slider-nav">
                                <ul>
                                    <li className='hover' ref={leftRef}><BsChevronLeft/></li>
                                    <li className='hover' ref={rightRef}><BsChevronRight/></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <VisibilitySensor offset={{top: -150}}>
                <div className={` fade-up leader-slider__slider-wrap`}>
                    <div className="leader-slider__slider-wrap__inner">
                        {
                            data?.posts?.list ?
                                <Swiper

                                    loop={true}
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    freeMode={true}
                                    speed={2000}
                                    slidesPerGroup={1}
                                    keyboardControl={true}
                                    modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                                    navigation
                                    onSlideChange={handleSlideChange}
                                    pagination={{
                                        type: 'fraction',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,

                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,

                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    ref={sliderRef}
                                    className="mySwiper"
                                >
                                    {
                                        data?.posts?.list?.length> 0 &&
                                        data?.posts?.list?.map((e, i)=>{
                                            return(
                                                <SwiperSlide key={i}>
                                                    <div className='leader-single'>
                                                        <div className="leader-single__inner">
                                                            <Img src={e?.images?.[0]?.full_path}/>
                                                        </div>
                                                        <div className="leader-single__text">
                                                            <h5>{e?.data?.title}</h5>
                                                            <p>{e?.data?.short_desc}</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>
                                : ''
                        }

                    </div>

                </div>
            </VisibilitySensor>
        </StyledLeader>
    );
};

const StyledLeader = styled.section`

  .leader-title {
    position: relative;
    
    p {
      position: absolute;
      top: 0;
      right: 0;

    }

  }

  .leader-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    align-items: flex-end;
    
    h5 {
      font-weight: 500;
      color: #000000;
      width: 60%;
    }

    .slider-nav {
      ul {
        display: flex;
      }

      li {
        height: 40px;
        width: 40px;
        background-color: #070524;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

        &:nth-of-type(1) {
          margin-right: 25px;
        }

        svg {
          color: #ffffff;
          z-index: 2;
          width: 15px;
          height: 15px;
        }
      }
    }
  }


  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: red;
  }

  .swiper-button-next, .swiper-button-prev, .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-initialized {
    margin-left: ${props => props.offset + 15}px;
    margin-right: ${props => props.offset + 15}px;
  }

  .slider-nav-mobile {
    display: none;
  }

  .leader-slider {
    &__slider-wrap {
      &__inner {
        .leader-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }

  .leader-single__text {
    margin-top: 15px;
    h5 {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      color: #000000;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #535353;
    }
  }

  .leader-single__inner {
    padding-top: calc(320 / 270 * 100%);
    position: relative;
    img{
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
      transition: transform 0.3s ease; 
      transform-origin: center center;
      &:hover{
        transform: scale(1.01); 
      }
    }

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 3;
    }

    &__content {
      &:after {
        content: '';
        height: 100%;
        width: 100%;
        background-color: #000000;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: height .4s ease;
      }

      &__top {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: rgba(240,237,227,0.8);
          position: absolute;
          left: 40px;
          bottom: 40px;
          z-index: 2;
          right: 40px;
          margin: 0;
          transform: translateY(-30px);
          opacity: 0;
          transition: all .6s ease;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        h5 {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          color: #F0EDE3;
          margin: 0;
          transition: all .3s ease;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }

      &__bottom {
        position: absolute;
        margin: 0;
        top: 40px;
        left: 40px;
        right: 40px;
        display: flex;
        justify-content: space-between;
        z-index: 2;

        h4 {
          font-size: 60px;
          font-weight: 600;
          color: #F0EDE3;
          line-height: 60px;
          transition: color .3s ease;
        }

        p {
          font-size: 12px;
          color: #F0EDE3;
          text-align: left;
          font-weight: 600;
          line-height: 18px;
          transition: color .3s ease;

          span {
            display: block;
            color: #F0EDE3;
          }
        }
      }
    }

    &:hover {
      .leader-single__inner__content:after {
        height: 0;
      }
      .leader-single__inner__content__top {
        h5 {
          opacity: 0;
          transform: translateY(-20px);
        }

        p {
          transform: none;
          opacity: 1;
        }
      }

      .leader-single__inner__content__bottom {
        border-color: #FFF;

        h4 {
          color: #F0EDE3;
        }

        p {
          color: #F0EDE3;

          span {
            color: #F0EDE3;
          }
        }
      }
    }

  }



  @media (max-width: 767px) {
    .leader-slider{
      margin-bottom: 80px;
      .subtitle{
        &:after{
          width: 100%;
        }
      }
    }
    .leader-single__inner__content__top {
      p, h2 {
        left: 30px;
        right: 30px;
        bottom: 30px;
      }
    }

    .leader-single__inner{
      padding-top: calc(382 / 270 * 100%);
    }

    .leader-single__inner__content__bottom h4, .leader-single__inner__content__bottom p {
      left: 30px;
      right: 30px;
      top: 30px;
    }

    .swiper-initialized {
      margin-left: 0;
      margin-right: 0;
    }

    .leader-slider {
      &__slider-wrap {
        margin-left: 15px;
        margin-right: 15px;

        .slider-nav-mobile {
          margin-top: 40px;

          ul {
            display: flex;
          }

          li {
            height: 50px;
            width: 50px;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:nth-of-type(1) {
              margin-right: 20px;
            }

            svg {
              color: #ffffff;
              z-index: 2;
            }
          }
        }
      }
    }

    .leader-button {
      display: block;
      margin-bottom: 40px;
      h5 {
        font-size: 30px;
        line-height: 38px;
        font-weight: 600;
        width: 100%;
      }
      .slider-nav {
        margin-top: 30px;
      }
    }

    .slider-nav-mobile {
      display: block;
    }

  }

`;
export default React.memo(RandomSliderV1);