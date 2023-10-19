import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Img} from "../Img";
import Slick from "react-slick";
import reactHtmlParser from "react-html-parser";


const MyComponent = ({data}) => {
    const [offset, setOffset] = useState(90)
    const [activeSlide, setactiveSlide] = useState(0)
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [total, settotal] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);

        // settotal(slider2.current.props.children.length)
    }, [data]);

    useEffect(() => {
        setOffset(document.querySelector(' .container').offsetLeft)
        settotal(slider2?.current?.props?.children?.length)

    }, [data])


    return (
        <StyledComponent className={`SliderCount`}>

            <Container fluid className={'p-0'}>
                <Row>
                    <Col md={6} className={'p-0'}>
                        <div className="slider-wrapper-left">
                            <div className="slider-wrapper-left__init">
                                {
                                    data?.posts?.list ?
                                        <Slick asNavFor={nav2} speed={1200}
                                               arrows={false} ref={slider1}>
                                            {
                                                data?.posts?.list?.length>0 && data?.posts?.list?.map((e,i)=>{
                                                    return(
                                                        <div className="single-item reveal" key={i}>
                                                            <div className="image-wrapper ">
                                                                <Img src={e?.images[0]?.full_path}/>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }

                                        </Slick>
                                        : ''
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={'p-0'}>
                        <div className="slider_wrapper_right">
                            <div className="slider_wrapper_right__init" style={{paddingRight: offset + 15 + 'px'}}>
                                {
                                    data?.posts?.list ?
                                        <Slick asNavFor={nav1}
                                               ref={slider2}
                                               arrows={false}
                                               dots={false}
                                               speed={1200}
                                               slidesToShow={1}
                                               swipeToSlide={true}
                                               focusOnSelect={true}
                                               afterChange={current => document.querySelector('#current-slider').innerHTML = current + 1}
                                        >
                                            {
                                                data?.posts?.list?.length>0 && data?.posts?.list?.map((e,i)=>{
                                                    return(
                                                        <div key={i} className="single-item_content">
                                                            <h3 className={''}>{e?.data?.title}</h3>
                                                            <p className={''}>
                                                                {reactHtmlParser(e?.data?.description)}
                                                            </p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </Slick>
                                        : ''
                                }



                                <div className="footer">
                                    <div className="count">
                                        <p><span id={'current-slider'} className="current">1</span>/ <span
                                            className="total">{total}</span></p>
                                    </div>
                                    <ul className="slider-nav">
                                        <li onClick={() => slider2?.current?.slickPrev()}
                                            className={'prev_swipper hover'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                                 viewBox="0 0 7.828 12.828">
                                                <g id="Group_6" data-name="Group 6"
                                                   transform="translate(1.414 11.414) rotate(-90)">
                                                    <line id="Line_4" data-name="Line 4" y1="5" x2="5" fill="none"
                                                          stroke="#fff"
                                                          strokeLinecap="round" stroke-width="2"/>
                                                    <line id="Line_5" data-name="Line 5" x1="5" y1="5"
                                                          transform="translate(5)"
                                                          fill="none" stroke="#fff" strokeLinecap="round"
                                                          stroke-width="2"/>
                                                </g>
                                            </svg>


                                        </li>
                                        <li onClick={() => slider2?.current?.slickNext()}
                                            className={'next_swipper hover'}>
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
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background: #000000;
  position: relative;
  overflow: hidden;


  .container, .container-fluid {
    position: relative;
    z-index: 2;
  }


  .slider-wrapper-left {
    &__init {
      @media (max-width: 992px) {
        .slick-list {
          margin-bottom: -8px !important;
        }
      }

      .single-item {
        .image-wrapper {
          padding-top: calc(520 / 698 * 100%);
          position: relative;

          //@media (max-width: 1124px) {
          //  padding-top: calc(700 / 728 * 100%);
          //}
          @media (max-width: 992px) {
            height: 100%;

          }

          .content {
            position: absolute;
            z-index: 99;
            top: 70px;

            @media (max-width: 992px) {
              display: none;
            }

            p {
              font-size: 40px;
              line-height: 48px;
              color: #E9E4DC;

            }
          }

        }
      }
    }
  }

  .slider_wrapper_right {
    height: 100%;


    .slider_wrapper_right__init {
      background: #f4f4f4;
      padding: 70px 0 70px 70px;
      height: calc(100% - 20%);
      position: relative;

      .single-item_content {
        h3 {
          //display: none;
          font-size: 24px;
          line-height: 34px;
          font-weight: 500;
          margin-bottom: 30px;
          color: #000000;
        }

        p {
          color: #000000;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

        }
      }
    }
  }

  .top_text {
    p {
      font-size: 32px;
      line-height: 44px;
      color: #191818;
      margin-bottom: 60px;
    }
  }

  .footer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 70px;
    bottom: 40px;

    .count {
      p {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
      }

      .current {
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        color: #000;
        margin-right: 8px;
      }

      .total {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
      }


    }

    //.slider-nav {
    //  display: flex;
    //
    //  li:first-child {
    //    margin-right: 30px;
    //  }
    //
    //  li {
    //    svg {
    //      cursor: pointer;
    //
    //      #Ellipse_16 {
    //        transition: 0.7s all ease;
    //      }
    //
    //      
    //    }
    //  }
    ////}
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


  //responsive

  @media (max-width: 1124px) {

    .slider-wrapper-left {
      &__init {
        .single-item {
          .image-wrapper {
            padding-top: calc(700 / 728 * 100%);

            .content {
            }

          }
        }
      }
    }
  }
  @media (max-width: 992px) and (min-width: 768px) {
    .slider-wrapper-left {
      height: 100%;

      .slider-wrapper-left__init {
        height: 100%;

        .slick-slider {
          height: 100%;

          .slick-list {
            height: 100%;

            .slick-track {
              height: 100%;

              .slick-slide {
                height: 100%;

                > div {
                  height: 100%;
                }

                .single-item {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    &:after {
      height: 100px;
      z-index: 0;
    }

    .slider-wrapper-left {
      &__init {
        .slick-list {
          margin-bottom: -8px !important;
        }

        .single-item {
          .image-wrapper {
            height: 100%;

            .content {
              display: none;
            }

          }
        }
      }
    }


    .slider_wrapper_right {
      .slider_wrapper_right__init {
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        padding: 70px 30px;

        .single-item_content {
          h3 {
            display: block;
            font-size: 24px;
            line-height: 30px;
            color: #000;
            margin: 0 0 30px;
          }
        }

      }
    }


    .footer {
      position: relative;
      margin-top: 0;
      margin-bottom: 30px;
      padding: 0;
      left: unset;
      right: unset;
      bottom: unset;
      flex-direction: row-reverse;

      .count {
        padding-right: 15px;
      }

      .slider-nav {
        li {
          &:first-child {
            position: relative;
            left: unset;
            transform: unset;
            top: 0;
          }

          &:last-child {
            position: relative;
            left: 0px;
            right: unset;
            transform: unset;
            top: 0;
          }
        }
      }

      .slick-slider {
        margin: 0 0 -10px;
      }
    }

  }

`;

export default React.memo(MyComponent);
