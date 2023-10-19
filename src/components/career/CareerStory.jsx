import React, {useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Title from "../Title";
import Button from "../Button";
import reactHtmlParser from "react-html-parser";
gsap.registerPlugin(ScrollTrigger);


const Counter = ({url, title, src, data}) => {



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
            <StyledDetail className='pt-150 pb-150'>
                <Container>
                    <Row>
                        <Col md={6} className={'counter-left pr-0'}>
                            <div className="content">
                                <h5 className={'split-up'}>{reactHtmlParser(data?.section_data?.title)}</h5>
                            </div>
                        </Col>
                        <Col className={'counter-right'} md={6}>
                            <div className="content">
                                <p className={'split-up'}>
                                    {data?.section_data?.description}
                                </p>
                                {
                                    src ?
                                        <Button text={'Visit Website'} marginTop={60}/>
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
  background-color: #000000;
  .counter-left{
    .content{
      margin-right: 100px;
      h5{
        width: 70%;
        color: #FFFFFF;
      }
    }
  }

  .counter-right{
    .content{
      p{
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
  }

  @media(max-width: 767px){
    .counter-left{
      .content{
        h5{
          width:100%;
          font-size: 30px !important;
          line-height: 38px !important;
        }
      }
    }

    .counter-right{
      .content{
        p{
          font-size: 18px;
          line-height: 24px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
    }
  }
`;

export default React.memo(Counter);
