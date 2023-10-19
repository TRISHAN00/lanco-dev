import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom'
import {Img} from "../Img";
import {hover} from "../../styles/globalStyleVars";
import {gsap} from "gsap";



const MyComponent = ({data}) => {

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
        <StyledComponent className={'reel-values pt-150 pb-150'}>
            <Container>
                <Row>
                    {
                        data ?
                            <Col sm={12} className={'reel-values__boxes'}>
                                <Row>
                                    <Col sm={6}>
                                        <Link to={`project/${data[0]?.product_data?.slug}`}>
                                            <div className="reel-values__boxes__img">
                                                <Img src={data[0]?.images?.list?.filter(image => image?.slider === 'on')?.[0]?.full_path}/>
                                                <h4 className={'boxxxx'}>1</h4>
                                            </div>
                                            <p className={'split-up'}>{data[0]?.product_data?.title}</p>
                                            <ul>
                                                <li className={'split-up'}>{data[0]?.product_data?.type}</li>
                                                <li className={'dot'}></li>
                                                <li className={'split-up'}>{data[0]?.product_data?.location}</li>
                                            </ul>
                                        </Link>

                                    </Col>
                                    <Col sm={6}>
                                        <Link to={`project/${data[1]?.product_data?.slug}`}>
                                            <div className="reel-values__boxes__img">
                                                <Img src={data[1]?.images?.list?.filter(image => image?.slider === 'on')?.[0]?.full_path}/>
                                                <h4 className={'boxxxx'}>2</h4>
                                            </div>
                                            <p className={'split-up'}>{data[1]?.product_data?.title}</p>
                                            <ul>
                                                <li className={'split-up'}>{data[1]?.product_data?.type}</li>
                                                <li className={'dot'}></li>
                                                <li className={'split-up'}>{data[1]?.product_data?.location}</li>
                                            </ul>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Link to={`project/${data[2]?.product_data?.slug}`}>
                                            <div className="reel-values__boxes__img">
                                                <Img src={data[2]?.images?.list?.filter(image => image?.slider === 'on')?.[0]?.full_path}/>
                                                <h4 className={'boxxxx'}>3</h4>
                                            </div>
                                            <p className={'split-up'}>{data[2]?.product_data?.title}</p>
                                            <ul>
                                                <li className={'split-up'}>{data[2]?.product_data?.type}</li>
                                                <li className={'dot'}></li>
                                                <li className={'split-up'}>{data[2]?.product_data?.location}</li>
                                            </ul>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                            : ''
                    }
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #000000;
  .reel-values__title {
    position: relative;

    h3 {
      font-size: 120px;
      font-weight: 600;
      line-height: 120px;
      color: #fff;
      white-space: nowrap;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      //height: fit-content;
      //margin: auto;
      transform: rotate(-90deg) translateY(180px);
      //width: 120px;
    }
  }

 .row:not(:first-child){
   margin-top: -275px;
 }

  
  .reel-values__boxes {
    &__img {
        position: relative;
      padding-top: calc(470 / 470 * 100%);
    }
    .col-sm-6 {
      margin-top: 80px;
      margin-bottom: 80px;

      &:nth-of-type(odd) {
        padding-right: 70px;
      }

      &:nth-of-type(even) {
        padding-top: 300px;
        padding-left: 70px;
      }
      &:last-child{
        margin-bottom: 60px;
      }
    }

    &__img {
      padding-top: 100%;
      position: relative;

      h3 {
        font-size: 32px;
        line-height: 36px;
        font-weight: 600;
        color: #ffffff;
        position: absolute;
        left: 40px;
        right: 40px;
        bottom: 40px;

      }

      h4 {
        font-size: 160px;
        line-height: 120px;
        font-weight: 600;
        color: #fff;
        position: absolute;
        top: 0;
        left: 40px;
        z-index: 2;
        transform: translateY(-50%);
      }
    }

    p {
      font-size: 24px;
      line-height: 38px;
      font-weight: 500;
      color: #fff;
      margin-top: 20px;
      margin-bottom: 0;
    }
    ul{
      display: flex;
      align-items: center;
      //justify-content: center;
      li{
        //margin-right: 10px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #B1B0B0;
        text-transform: capitalize;
        &:last-child{
          //list-style: disc;
        }
      }
      .dot{
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #B1B0B0;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 991px) {
    .reel-values__boxes {
      .col-sm-6 {
        margin-bottom: 60px;

        &:nth-of-type(odd) {
          padding-right: 30px;
        }

        &:nth-of-type(even) {
          padding-top: 220px;
          padding-left: 30px;
        }
      }

      &__img h3 {
        font-size: 25px;
        line-height: 28px;
        left: 15px;
        right: 15px;
      }
    }
    .row:not(:first-child){
      margin-top: -135px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 70px;
    .reel-values__title {
      min-width: 100%;
      margin-bottom: 130px;

      h3 {
        transform: none;
        white-space: normal;
        position: relative;
        left: 0;
        right: auto;
        width: auto;
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
      }
    }

    .reel-values__boxes {
      min-width: 100%;
    }
    .row:not(:first-child){
      margin-top: 0;
    }

    
  }

  @media (max-width: 575px) {
    padding-bottom: 0 !important;
    .reel-values__boxes {
      .col-sm-6 {
        margin-bottom: 60px;
        padding: 0px !important;
      }

      &__img {
        h4 {
          left: 15px;
        }

      }


      p {
        padding-left: 15px;
        padding-right: 15px;
      }
      ul{
        padding-left: 15px;
      }
    }
  }

`;

export default React.memo(MyComponent);
