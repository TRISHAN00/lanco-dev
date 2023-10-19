import React  from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import Subtitle from "./SubTitle";
import {Link} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, list}) => {


    return (
        <StyledComponent>
            <Container className={'associates pt-150 pb-150'}>
                <Row>
                    <Col md={12}>
                        <Subtitle text={'Business Units'} marginBottom={80}/>
                        <h5>{reactHtmlParser(data?.section_data?.subtitle)}</h5>
                    </Col>
                </Row>
                <Row className={'unit d-flex'}>
                    {
                        list?.list && list?.list?.length>0 &&
                        list?.list?.map((e, i)=>{
                            return(
                                <Col md={4} className={'unit__single'} key={i}>
                                    <div className={'unit__single__img'}>
                                        <div className={'image-wrapper'}>
                                            <img src={e?.images?.list[0]?.full_path}/>
                                        </div>
                                        <div className={'content'}>
                                            <p>
                                                {e?.page_data?.short_desc}
                                            </p>
                                            <span>
                                    <Link to={e?.page_data?.slug}>
                                        <h6>Read More</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31.207" height="17.414" viewBox="0 0 31.207 17.414">
                                          <g id="Group_5742" data-name="Group 5742" transform="translate(-1838 688.207)">
                                            <line id="Line_59" data-name="Line 59" x2="8" y2="8" transform="translate(1860.5 -687.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_60" data-name="Line 60" y1="8" x2="8" transform="translate(1860.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_61" data-name="Line 61" x1="29" transform="translate(1838.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                          </g>
                                        </svg>
                                    </Link>
                                </span>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  h5{
    color: #222222;
  }
  .unit{
    margin-top: 60px;
    &__single{
      margin-bottom: 30px;
      &__img{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
        margin: auto;
        height: 250px;
        width: 100%;
        transition: background-color 0.5s ease-in-out, padding 0.5s ease-in-out;;
        image{
          width: 100%;
          height: 100%;
        }
        @media(max-width: 767px){
          height: 220px;
        }
        .content{
          transition: 0.7s ease-in-out;
          display: none;
          p{
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            margin-bottom: 40px;
            color: #F9F9F9;
          }
          span{
            a{
              display: flex;
              h6{
                margin-right: 10px;
                color: #F9F9F9;
              }
            }
          }
        }
        &:hover{
          .image-wrapper{
            display: none;
          }
          .content{
            display: block;
            transition: 0.7s ease-in-out;
            padding: 30px 80px 40px 30px;
          }
          background-color: #0d0a0a;
          
        }
      }
      @media(max-width: 767px){
        margin-bottom: 20px;
      }
      h6{
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
      }
    }
    @media(max-width: 767px){
      margin-top: 40px;
    }
  }

`;




export default React.memo(MyComponent);
