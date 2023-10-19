import React, {useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Button from "./Button";
import reactHtmlParser from "react-html-parser";
gsap.registerPlugin(ScrollTrigger);


const Counter = ({ title, src, bg, data, desc}) => {


    useEffect(() => {

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


            // fade up
            let allAnim = document.querySelectorAll('.fade-up');
            allAnim.forEach((el, index) => {
                gsap.fromTo(el, {
                    autoAlpha: 0,
                    y: 50,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        // start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    }
                })
            })


        }

    }, [null])


    return (
        <>
            <StyledDetail bg={bg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="968" height="556" viewBox="0 0 968 556">
                    <g id="Group_22896" data-name="Group 22896" transform="translate(-199 -5811)" opacity="0.25">
                        <g id="Union_20" data-name="Union 20" transform="translate(10446.102 577)" fill="none" opacity="0.6">
                            <path d="M-9642.1,5495.146H-9945v-58.97h.4V5234h60.5v202.175h242V5234h60.5v261.145Z" stroke="none"/>
                            <path d="M -9582.6025390625 5494.1455078125 L -9582.6025390625 5235.00048828125 L -9641.1015625 5235.00048828125 L -9641.1015625 5437.17578125 L -9885.103515625 5437.17578125 L -9885.103515625 5235.00048828125 L -9943.603515625 5235.00048828125 L -9943.603515625 5437.17578125 L -9944 5437.17578125 L -9944 5494.1455078125 L -9582.6025390625 5494.1455078125 M -9581.6025390625 5495.1455078125 L -9945 5495.1455078125 L -9945 5436.17578125 L -9944.603515625 5436.17578125 L -9944.603515625 5234.00048828125 L -9884.103515625 5234.00048828125 L -9884.103515625 5436.17578125 L -9642.1015625 5436.17578125 L -9642.1015625 5234.00048828125 L -9581.6025390625 5234.00048828125 L -9581.6025390625 5495.1455078125 Z" stroke="none" fill="#c9c9c9"/>
                        </g>
                        <g id="Union_18" data-name="Union 18" transform="translate(199 5811)" fill="none" opacity="0.6">
                            <path d="M968,556H0V0H60.5V497.03h847V0H968V556ZM756.25,408.573h-605V0h60.5V349.6h544.5V0h60.5V408.573Z" stroke="none"/>
                            <path d="M 967 555.0001831054688 L 967 1.00006103515625 L 908.499267578125 1.00006103515625 L 908.499267578125 498.0296020507812 L 59.49988174438477 498.0296020507812 L 59.49988174438477 1.00006103515625 L 1 1.00006103515625 L 1 555.0001831054688 L 967 555.0001831054688 M 815.74951171875 407.5728759765625 L 815.74951171875 1.00006103515625 L 757.2496337890625 1.00006103515625 L 757.2496337890625 350.602294921875 L 210.7503509521484 350.602294921875 L 210.7503509521484 1.00006103515625 L 152.2495269775391 1.00006103515625 L 152.2495269775391 407.5728759765625 L 815.74951171875 407.5728759765625 M 968 556.0001831054688 L 0 556.0001831054688 L 0 6.103515625e-05 L 60.49988174438477 6.103515625e-05 L 60.49988174438477 497.0296020507812 L 907.499267578125 497.0296020507812 L 907.499267578125 6.103515625e-05 L 968 6.103515625e-05 L 968 556.0001831054688 Z M 816.74951171875 408.5728759765625 L 151.2495269775391 408.5728759765625 L 151.2495269775391 6.103515625e-05 L 211.7503509521484 6.103515625e-05 L 211.7503509521484 349.602294921875 L 756.2496337890625 349.602294921875 L 756.2496337890625 6.103515625e-05 L 816.74951171875 6.103515625e-05 L 816.74951171875 408.5728759765625 Z" stroke="none" fill="#c9c9c9"/>
                        </g>
                        <g id="Rectangle_5969" data-name="Rectangle 5969" transform="translate(667.735 5811)" fill="none" stroke="#c9c9c9" stroke-width="1" opacity="0.6">
                            <rect width="60.5" height="111.514" stroke="none"/>
                            <rect x="0.5" y="0.5" width="59.5" height="110.514" fill="none"/>
                        </g>
                    </g>
                </svg>
                <Container>
                    <Row>
                        <Col md={6} className={'counter-left pr-0'}>
                            <div className="content">
                                <div><h5>{reactHtmlParser(data?.[0]?.data?.title ? data?.[0]?.data?.title : title )}</h5></div>
                                <div>
                                    {
                                        src ?
                                            <Button text={'Download Brochure'} background={'#FFFFFF'} color={'#000'}/>
                                            : ''
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col className={'counter-right'} md={6}>
                            <div className="content">
                                <p>
                                    {reactHtmlParser(data?.[0]?.data?.description ? data?.[0]?.data?.description : desc)}
                                </p>
                                {
                                    src ?
                                        <Button text={'Download Brochure'} background={'#FFFFFF'} color={'#000'} marginTop={'60'}/>
                                        : ''
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledDetail>
        </>

    );
};

const StyledDetail = styled.section`
  background-color: ${p => p.bg || "#1C1C1C"};
  position: relative;
  padding-top: 110px;
  padding-bottom: 125px;  
  svg{
    position: absolute;
    padding-top: 10px;
    padding-bottom: 30px;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .counter-left {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin-right: 100px;

      h5 {
        color: #fff;
        width: 80%;
      }

      .dc-btn {
        align-self: flex-end; /* Align the button to the bottom right */
        margin-top: auto;
      }
    }
  }

  .counter-right {
    .content {
      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: #fff;
      }
      .dc-btn{
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    .counter-left {
      .content {
        h5 {
          font-size: 30px !important;
          line-height: 38px !important;
        }
        .dc-btn{
          display: none;
        }
      }
    }

    .counter-right {
      .content {
        p {
          font-size: 18px;
          line-height: 24px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .dc-btn{
          display: unset;
        }
      }
    }
  }
`;

export default React.memo(Counter);
