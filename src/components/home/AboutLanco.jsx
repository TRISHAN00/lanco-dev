import React, {useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {gsap} from "gsap";
import Button from "../Button";
import SubTitle from "../SubTitle";
import reactHtmlParser from "react-html-parser";
import {Img} from "../Img";


const Counter = ({data}) => {
    // parallax animation
    useEffect(() => {
        gsap.utils.toArray(".boxxxx").forEach((section, i) => {
            gsap.to(section, {
                yPercent: -25,
                scrollTrigger: {
                    trigger: section,
                    // start: () => i ? "top bottom" : "top top",
                    // end: "bottom top",
                    scrub: true,
                    // invalidateOnRefresh: true // to make it responsive
                }
            })
        });
        gsap.utils.toArray(".boxxx").forEach((section, i) => {
            gsap.to(section, {
                yPercent: -10,
                scrollTrigger: {
                    trigger: section,
                    // start: () => i ? "top bottom" : "top top",
                    // end: "bottom top",
                    scrub: true,
                    // invalidateOnRefresh: true // to make it responsive
                }
            })
        });
    }, [data])

    return (
        <>
            <StyledDetail className='pt-150 pb-150'>
                <div className={'shadow'}>
                    <Img src={'/images/static/bg.png'}/>
                </div>
                <Container>
                    <SubTitle text={data?.section_data?.title} marginBottom={'80'} />
                    <Row>
                        <Col md={6} className={'counter-left pr-0 pb-150'}>
                            <div className="content">
                                <h5>{reactHtmlParser(data?.section_data?.subtitle)}</h5>
                            </div>
                        </Col>
                        <Col className={'counter-right'} md={6}>
                            <div className="content-top">
                                {reactHtmlParser(data?.section_data?.short_desc)}
                                <Button text={'Read More'}
                                        marginTop={60} background={'#18A354'}
                                        hoverBackground={'#535353'} src={'/about'}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} className={'bottom-left'}>
                            <div className={'image'}>
                                <Img src={data?.images?.list[0]?.full_path}/>
                                <div className={'image-top boxxxx'}>
                                    <Img src={data?.images?.list[1]?.full_path}/>
                                </div>
                            </div>
                        </Col>
                        <Col md={{offset:1, span:6}} className={'bottom-right'}>
                            <div className={'content-bottom'}>
                                <SubTitle borderWidth={30} text={'Lanco Promises'} fontSize={20} lineHeight={34} fontWeight={500} color={'#fff'}/>
                                {reactHtmlParser(data?.section_data?.description)}
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
  position: relative;
  .shadow{
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
  }
  .counter-left{
    .content{
      margin-right: 100px;
      margin-bottom: 85px;
      h5{
        color: #ffffff;
      }
    }
  }

  .counter-right{
    .content-top{
      p{
        font-size: 18px;
        line-height: 24px;
        color: #F9F9F9;
      }
      h6{
        margin-top: 20px;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        color: #F9F9F9;
      }
    }
  }

  .bottom-left{
    .image{
      background-color: #1c7430;
      position: relative;
      padding-top: calc(448 / 493 * 100%);
      width: 100%;
      height: 100%;
      top: -106px;

      .image-top{
        position: absolute;
        padding-top: calc(309 / 454 * 100%);
        width: 100%;
        height: auto;
        left: 72px;
        bottom: -90px;
      }
    }
  }
  .bottom-right{
    .content-bottom{
      margin-top: 94px;
      ul{
        margin-top: 60px;
        li{
          position: relative;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          color: #C9C9C9;
          margin-bottom: 30px;
          //border-bottom: 1px solid #656565;
        }
      }
    }
  }
  
  
  @media(max-width: 767px){
    .counter-left{
      padding-bottom: 0 !important;
      margin-right: 15px;
      .content{
        padding-bottom: 0;
        margin-right: 0;
        margin-bottom: 0;
        h5{
          font-size: 30px !important;
          line-height: 38px !important;
        }
      }
      
    }

    .counter-right{
      .content-top{
        margin-bottom: 180px;
        p{
          font-size: 18px;
          line-height: 24px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
    }

    .bottom-left{
      .image{
        padding-top: calc(339 / 308 * 100%);
        width: 308px;

        .image-top{
          padding-top: calc(173 / 255 * 100%);
          width: 100%;
          left: 50px;
        }
      }
    }
  }
  
  .bottom-right{
    .content-bottom{
      margin-top: 60px;
    }
  }
  
`;

export default React.memo(Counter);
