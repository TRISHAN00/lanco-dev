import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectBox from "../ProjectBox";


const MyComponent = () => {
    return (
        <StyledComponent>
            <Container className={'ongoing__slider'}>
                <Row>
                    <Col>
                        <ul className={'arrows'}>
                            <li className={'prev_swipper hover'} id={'prev_swipper'}>
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
                            <li className={'next_swipper hover'} id={'next_swipper'}>
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
                    </Col>
                    <Col>
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation, A11y]}
                            slidesPerView={2}
                            // slidesPerGroup={1}
                            spaceBetween={30}
                            loop={true}
                            speed='2000'
                            grabCursor={true}
                            navigation={{
                                prevEl: '#prev_swipper',
                                nextEl: '#next_swipper',
                            }}


                        >

                            <SwiperSlide>
                                <ProjectBox soldout title={"Laboni's Dream"} address={'Bashundhara R/A'} type={'Residential'}
                                            image={'/images/dynamic/project/pl1.jpg'}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProjectBox title={"Madhubi Garden"} address={'Bashundhara R/A'} type={'Residential'}
                                            image={'/images/dynamic/project/pl2.jpg'} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProjectBox soldout title={"Laboni's Dream"} address={'Bashundhara R/A'} type={'Residential'}
                                            image={'/images/dynamic/project/pl1.jpg'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectBox soldout title={"Laboni's Dream"} address={'Bashundhara R/A'} type={'Residential'}
                                            image={'/images/dynamic/project/pl2.jpg'}/>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>

    );
};

const StyledComponent = styled.section`
  
  .ongoing__slider{
    transform: translateY(-50%);
  }
  .swiper{
    margin-top: 80px;
    overflow: visible;
  }
 
`;

export default MyComponent;
