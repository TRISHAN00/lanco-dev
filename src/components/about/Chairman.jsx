import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Swiper} from "swiper/react";
import ReactHtmlParser from "react-html-parser";
import {blue} from "../../styles/globalStyleVars";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import Button from "../Button";
import Modal from "react-bootstrap/Modal";
import SimpleBar from "simplebar-react";

const MyComponent = ({background, data, id}) => {

    // const [isTruncated, setIsTruncated] = useState(true);

    const nextRef = useRef()
    const prevRef = useRef()
    const [current, setCurrent] = useState('1')
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [offset, setOffset] = useState(90)

    useEffect(() => {
        setOffset(document.querySelector(' .container').offsetLeft)
    }, [])


    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.sustain .swiper-pagination-current')) {
                setCurrent(document.querySelector('.sustain .swiper-pagination-current').innerHTML)
            }
        }, 200)
    }


    const [show, setShow] = useState(false);
    const [winWidth, setWinWidth] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <StyledComponent className={'pt-150'}>

            <Container className={'p-0'}>
                <h4 className={'title-mob'}>{data?.section_data?.title}</h4>
                <div className="testimonials__slider d-flex">
                    <Col sm={6} className={'testimonials__slider__content'}>
                        <h4 className={'split-up'}>{data?.section_data?.title}</h4>
                        <p className={'split-up'}>
                            {reactHtmlParser(data?.section_data?.description)}
                        </p>

                        <h5 className={'split-up'}>{data?.section_data?.subtitle}</h5>
                        <span className={'split-up'}>{data?.section_data?.short_desc}</span>

                    </Col>
                    <Col sm={6}>
                        <div className="testimonials__slider__img">
                            <Img src={data?.images?.list?.[0]?.full_path}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="95.667" height="82" viewBox="0 0 95.667 82">
                                <path id="blockquote-symbol"
                                      d="M94.085,82V42.852H76.164L95.667,0H75.11L53.236,39.942V82ZM40.849,82V42.852H22.928L42.431,0H21.874L0,39.942V82Z"
                                      fill="#18A354"/>
                            </svg>
                        </div>
                    </Col>
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="gph_modal popup-version-one"
                >
                    <Modal.Body>
                        <Container className={''}>
                            <Row className={'for-close justify-content-end'}>
                                <div onClick={handleClose} className="modal-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="21.414"
                                         viewBox="0 0 21.414 21.414">
                                        <g id="Group_13675" data-name="Group 13675"
                                           transform="translate(-1247.293 -31.293)">
                                            <g id="Group_13674" data-name="Group 13674"
                                               transform="translate(22.5 -11.5)">
                                                <line id="Line_1" data-name="Line 1" x2="28.284"
                                                      transform="translate(1225.5 43.5) rotate(45)" fill="none"
                                                      stroke="#000" strokeLinecap="round" strokeWidth="1"/>
                                                <line id="Line_2" data-name="Line 2" x2="28.284"
                                                      transform="translate(1225.5 63.5) rotate(-45)" fill="none"
                                                      stroke="#000" strokeLinecap="round" strokeWidth="1"/>
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                            </Row>
                        </Container>
                        <Container className={'pb-150'}>
                            <Row>


                                <div className="modal-data d-flex">
                                    <Col md={6} className='modal-data__content'>
                                        <div className="scroll-div">
                                            <h2>Chairman Message</h2>
                                            <p>Hello and a warm welcome to the fascinating world of LANCO!

                                                Life is an incredible journey full of challenges, excitement, hardships,
                                                celebrations and
                                                special moments that will ultimately lead us to our destination and it
                                                is our core objective
                                                to deliver the best of the value proposition to our customers within our
                                                scope of operation
                                                and to be recognized as the undisputed market leader in the real estate
                                                sector of Bangladesh.<br/><br/>

                                                Luxury is all about elegance and sophistication. If you are successful,
                                                you need to have an
                                                opulent lifestyle and live to the fullest, therefore, each of our
                                                projects Luxury is all about
                                                elegance and sophistication. If you are successful, you need to have an
                                                opulent lifestyle and
                                                live to the fullest, therefore, each of our projects Luxury is all about
                                                elegance and
                                                sophistication. If you are successful, you need to have an opulent
                                                lifestyle and live to the
                                                fullest, therefore, each of our projects Luxury is all about elegance
                                                and sophistication.<br/><br/>

                                                If you are successful, you need to have an opulent lifestyle and live to
                                                the fullest,
                                                therefore, each of our projects If you are successful, you need to have
                                                an opulent lifestyle
                                                and live to the fullest, therefore, each of our projects If you are
                                                successful, you need to
                                                have an opulent lifestyle and live to the fullest, therefore, each of
                                                our projects If you are
                                                successful, you need to have an opulent lifestyle and live to the
                                                fullest, therefore, each
                                                of our projects If you are successful, you need to have an opulent
                                                lifestyle and live to the
                                                fullest, therefore, each of our projects If you are successful, you need
                                                to have an opulent
                                                lifestyle and live to the fullest, therefore, each of our projects If
                                                you are successful,
                                                you need to have an opulent lifestyle and live to the fullest,
                                                therefore, each of our projects.
                                            </p>
                                            <div className={'designation'}>
                                                <h5>ASM Mahfuzur Rahman</h5>
                                                <p>Chairman, Lanco Development</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={{span: 5, offset: 1}} className="modal-data__img">
                                        <div className={'image-wrapper'}>
                                            <Img src={'/images/dynamic/about/chairman.jpg'}/>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section` {

  background-color: #000;
  overflow: hidden;

  .container {
    position: relative;
  }

  .title-mob {
    display: none;
  }

  .testimonials__slider {
    &__img {
      position: relative;
      padding-top: calc(620 / 470 * 100%);
      margin-left: 52px;

      svg {
        position: absolute;
        left: -55px;
        top: -50px;
      }

      @media (max-width: 767px) {
        margin-left: 0;
      }
    }
  }

  .testimonials__slider__content {
    padding-bottom: 70px;

    p {
      margin-top: 60px;
      font-size: 16px;
      line-height: 20px;
      color: #f9f9f9;
      margin-bottom: 0;
    }

    p.truncated {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 50; /* Adjust the number of lines you want to show */
      -webkit-box-orient: vertical;
    }

    span.eclipse {
      cursor: pointer;
      color: #18A354;
    }

    h4 {
      position: relative;
      line-height: 50px;
      color: #fff;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      //&:before {
      //  position: absolute;
      //  content: '';
      //  height: 0.5px;
      //  width: 100%;
      //  bottom: 0;
      //  left: 0;
      //  background-color: #F9F9F9;
      //}

      @media (max-width: 767px) {
        display: none;
      }
    }

    h5 {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
      font-weight: 500;
      color: #fff;
    }

    span {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  ul {
    position: absolute;
    bottom: 0;
    left: 15px;
    z-index: 150;
    display: flex;

    li {
      cursor: pointer;

      svg {
        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
        }

        line {
          stroke: #170C3D;
        }


        &:hover {
          #Ellipse_4378 {
            fill: #EF94BE;
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 26;
          }

          g {
            line {
              stroke: #f9f9f9;
            }
          }
        }
      }
    }

    li:first-child {
      padding-right: 20px;
    }
  }
}


  @media (max-width: 767px) {
    .d-flex {
      flex-wrap: wrap;
    }

    .title-mob {
      padding-left: 15px;
      padding-right: 15px;
      opacity: 1;
      position: relative;
      font-size: 32px;
      line-height: 40px;
      color: #fff;
      padding-bottom: 20px;
      margin-bottom: 40px;

      &:before {
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        bottom: 0;
        background-color: #F9F9F9;
      }
    }

    .testimonials__slider {
      flex-direction: column-reverse;

      .col-sm-6 {
        min-width: 100%;
      }
    }

    .testimonials__slider__img {
      margin-right: 0;
      margin-top: 40px;

      svg {
        //height: 32px;
        //width: 32px;
        left: 0;
        top: 0;
        transform: translateY(-50%);

        path {
          //fill: #fff;
        }
      }
    }

    .testimonials__slider__content {
      //margin-top: 40px !important;
    }
  }


`;

export default React.memo(MyComponent);
