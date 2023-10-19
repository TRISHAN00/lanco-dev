import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {Img} from "../Img";

import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import SubTitle from "../SubTitle";
import reactHtmlParser from "react-html-parser";


const Feature = ({data}) => {

    const sliderRef = useRef(null); // Create a ref for the slider component

    // Function to handle left arrow click
    const handleLeftArrowClick = () => {
        sliderRef.current.slickPrev(); // Call slickPrev to go to the previous slide
    };

    // Function to handle right arrow click
    const handleRightArrowClick = () => {
        sliderRef.current.slickNext(); // Call slickNext to go to the next slide
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

    const settings = {
        dots: true,
        rows: windowWidth < 767 ? 1 : 2,
        slidesPerRow: 1,
        infinite: false,
        autoplay: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,     // Show 1 slide at a time on mobile
                    slidesToScroll: 1,
                    slidesPerRow: 1// Scroll 1 slide at a time on mobile
                }
            }
        ]
    };

    let leftRef = useRef();
    let rightRef = useRef();


    return (
        <StyledComponent id={'photo'} className='feature pb-150 pt-150'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <SubTitle text={'Photo Highlights'} borderWidth={'30'} marginBottom={30}/>
                        <div className="leader-button">
                            <h5>{reactHtmlParser(data?.[0]?.data?.description)}</h5>
                            <div className="slider-nav">
                                <ul>
                                    <li className='hover' onClick={handleLeftArrowClick} ref={leftRef}><BsChevronLeft/>
                                    </li>
                                    <li className='hover' onClick={handleRightArrowClick} ref={rightRef}>
                                        <BsChevronRight/></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>


                <div className="slider" style={{width: '100%'}}>
                    {
                        data?.[0]?.images ?
                            <LightgalleryProvider>

                                <Slider {...settings} ref={sliderRef}>

                                    {
                                        data?.[0]?.images?.length > 0 &&
                                        data?.[0]?.images?.map((e, i) => {
                                            return (

                                                <LightgalleryItem src={e?.full_path} key={i}>
                                                    <div className='feature__single'>
                                                        <div className='feature__single__img reveal'>
                                                            <Img src={e?.full_path}/>
                                                        </div>
                                                    </div>
                                                </LightgalleryItem>
                                            );
                                        })
                                    }
                                </Slider>
                            </LightgalleryProvider>
                            : ''
                    }

                </div>
            </Container>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  .row {
    justify-content: center;
  }

  background-color: white;


  .leader-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    align-items: center;

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
        background-color: black;
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

    @media (max-width: 767px) {
      display: block;
      h5 {
        font-size: 30px;
        line-height: 38px;
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  .feature {
    &__title {
      display: flex;
      justify-content: center !important;
      align-items: center;
      margin-bottom: 42px;

      h2 {
        @media (max-width: 767px) {
          font-size: 40px !important;
          line-height: 40px !important;
          //margin-top: 40px;
        }
      }
    }

    &__single {
      //padding-right: 30px;
      padding-bottom: 30px;
      background-color: white;
      position: relative;

      @media (max-width: 767px) {
        margin-bottom: 0;
      }

      h2 {
        font-size: 20px;
        line-height: 22px;
        font-weight: bold;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        position: absolute;
        top: 135px;
        left: 20px;
        right: 20px;
        color: #252e47;
      }

      &__img {

        position: relative;
        padding-top: 100%;
      }
    }
  }

  .slick-dots li button:before {
    display: none;
    color: transparent;
    border: 1px solid #252E47;
    opacity: 1;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .slick-dots li.slick-active button:before {
    background-color: #252E47;
    border-color: #C19A5B;
    height: 20px;
    width: 20px;
  }

  .slick-slide {
    border: 0 !important;
    margin-right: 30px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .slick-slide > div:nth-of-type(1) {
    border: 0 !important;
  }

  @media (max-width: 991px) {
    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(75%);

      svg {
        width: 40%;
      }
    }

    .shadow-left {
      transform: translateX(-20%);
      left: 0;

      svg {
        width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 120px !important;
    .feature__single__img {
      top: 10px;
    }

    .feature__single h2 {
      top: 110px;
    }
  }

  .slick-track {
    display: flex !important;
    height: 100%;
  }

  .slick-slide {
    height: auto;

    .slick-slide > div {
      height: 100%;

      .myItemClass {
        height: 100%;
      }
    }
  }
  
  .slick-list{
    margin-right: 0; 
  }
  
  .slick-slide:nth-child(3n){
    margin-right: 30px;
  }

  .slick-slide {
    border-right: 1px solid #F2EEE8;
    border-top: 1px solid #F2EEE8;
    border-bottom: 1px solid #F2EEE8;

    > div:nth-of-type(1) {
      border-bottom: 1px solid #F2EEE8;
    }

    &:nth-of-type(1) {
      border-left: 1px solid #F2EEE8;
    }

    @media (max-width: 767px) {
      &:nth-of-type(1) {
        border-left: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .title {
      margin-bottom: 0;
    }

    .subtitle {
      &:after {
        width: 70%;
      }
    }
  }

  .slick-dots {
    bottom: -65px;
  }

`;
export default React.memo(Feature);
