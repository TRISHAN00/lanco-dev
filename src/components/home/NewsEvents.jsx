import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Row} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import {Autoplay, Navigation, Pagination, A11y} from "swiper";
import Title from "../Title";
import NewsBox from "../NewsBox";
import Button from "../Button";


const ParentingTools = ({data}) => {

    return (
        <StyledComponent className={`parenting-tools pt-150 pb-150 `}>
            <Container>
                <Row>
                    <Col md={12} className={'slider_left'}>
                        <div className={'top d-flex'}>
                            <Title text= {'News & Events'}
                                   color={'#F0EDE3'} textTransform={'inherit'}/>
                            <ul className={'arrows'}>
                                <li className={'prev_swipper hover'} id={'prev_swipper'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                         viewBox="0 0 7.828 12.828">
                                        <g id="Group_6" data-name="Group 6"
                                           transform="translate(1.414 11.414) rotate(-90)">
                                            <line id="Line_4" data-name="Line 4" y1="5" x2="5" fill="none" stroke="#000"
                                                  strokeLinecap="round" strokeWidth="1"/>
                                            <line id="Line_5" data-name="Line 5" x1="5" y1="5" transform="translate(5)"
                                                  fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"/>
                                        </g>
                                    </svg>

                                </li>
                                <li className={'next_swipper hover'} id={'next_swipper'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828"
                                         viewBox="0 0 7.828 12.828">
                                        <g id="Group_6" data-name="Group 6"
                                           transform="translate(-92.086 454.914) rotate(-90)">
                                            <line id="Line_4" data-name="Line 4" x2="5" y2="5"
                                                  transform="translate(443.5 93.5)" fill="none" stroke="#000"
                                                  strokeLinecap="round" strokeWidth="1"/>
                                            <line id="Line_5" data-name="Line 5" x1="5" y2="5"
                                                  transform="translate(448.5 93.5)" fill="none" stroke="#000"
                                                  strokeLinecap="round" strokeWidth="1"/>
                                        </g>
                                    </svg>

                                </li>
                            </ul>
                        </div>
                    </Col>


                    <Col>
                        {
                            data ?
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation, A11y]}
                                    slidesPerView={3}
                                    // slidesPerGroup={1}
                                    spaceBetween={30}
                                    loop={true}
                                    speed='2000'
                                    grabCursor={true}
                                    navigation={{
                                        prevEl: '#prev_swipper',
                                        nextEl: '#next_swipper',
                                    }}

                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            // spaceBetween: 30,
                                            slidesPerGroup: 1

                                        },
                                        768: {
                                            slidesPerView: 1,
                                            // spaceBetween: 30,
                                            slidesPerGroup: 1

                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                            slidesPerGroup: 2

                                        },
                                    }}
                                >
                                    {
                                        data?.length>0 && data?.map((e, i)=>{
                                            return(
                                                <SwiperSlide key={i}>
                                                    <NewsBox  data={e}/>
                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>
                                : ''
                        }

                    </Col>

                    <Col md={12}>
                        <div className="mobile_explore_btn">
                            <Button text={'View All'} marginTop={60} background={'#18A354'} hoverBackground={'#535353'} src={'/news'}/>
                        </div>
                    </Col>

                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #1C1C1C;
.awards{
  &__top{
    .content{
      padding-bottom: 80px;

    }
  }
  &__title{
    max-width: 100%;
    flex: 0 0 100%;
    .content{
      width: 100%;
      padding-bottom: 80px;

    }
  }

}


  .headings {
    display: flex;
    justify-content: space-between;
    margin: 0 0 40px 0;
    align-items: flex-end;

    &__nav-mobile {
      display: none;
    }


  }

  .headings__btn{
    height: 51px;
    width: 150px;
    a{
      span{
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
      }
    }
  }

  .box-image__single {
    margin-top: 0 !important;
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  .row {
    position: relative;

    .swiper-initialized {
      //margin: 0 15px 0 15px;
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


  .mobile_explore_btn{
    margin-top: 20px;
    //display: none;
  }

  .slider_left{
    margin-bottom: 50px !important;
    @media(max-width: 767px){
      .top{
        display: block !important;
      }
    }
  }

  @media (max-width: 768px) {

    .headings{
      margin-bottom: 30px;
      &__title{
        .title{
          h2{
            margin-bottom: 0;
          }
        }
      }
    }
    .headings__btn {
      display: none;
    }
    .headings__nav-mobile{
      display: block;
    }
    .desktop-nav{
      display: none;
    }

    .mobile_explore_btn{
      display: block;
      margin-top: 30px;
      //.dc-btn{
      //  width: 100%;
      //  height: 60px;
      // 
      //  a{
      //    background: #FCB940;
      //    span{
      //      color: black;
      //    }
      //  }
      //}
    }

    .swiper {
      //padding-right: 25%;
    }

    .row {
      .navigation {
        padding: 0 15px;
        //margin-bottom: 40px;

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
    }
  }
  .about-section__bottom__single{
    border: 1px solid rgb(255 255 255 / 50%);
  }

`;

export default React.memo(ParentingTools);
