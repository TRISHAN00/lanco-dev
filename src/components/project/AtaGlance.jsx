import React  from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";

const AtGlance = ({data}) => {


    return (
        <StyledAtGlance id={'glance'} className={'at-glance pt-120 pb-120'}>
            <Container>
                <Row>
                    <Col md={6} className='at-glance__content '>
                        <div className='at-glance__content__title'>
                            <h4 className={'split-up'}>{reactHtmlParser(data?.[0]?.data?.title)}</h4>
                            <div>
                                {reactHtmlParser(data?.[0]?.data?.description)}
                            </div>
                        </div>
                    </Col>
                    <Col md={{span:5,offset:1}} className='at-glance__image '>
                        <div className="">
                            <div className="at-glance__img reveal ">
                                <Img src={data?.[0]?.images?.[0]?.full_path}/>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </StyledAtGlance>
    );
};
const StyledAtGlance = styled.section`
  overflow: hidden;
  background-color: #1C1C1C;

  .at-glance {
    &__img {
      position: relative;
      padding-top: calc(740 / 500 * 100%);
    }

    &__content {
      color: #252E47;
      display: flex;

      &__title {
        width: 100%;

        h4 {
          color: #FFFFFF;
          margin-bottom: 40px;
        }
        

        table {
          tr {
            display: flex;
            width: 100%;
            border-bottom: 1px solid rgb(177 176 176 / 60%);
            padding-top: 20px;
            padding-bottom: 20px;
            //justify-content: space-between;

            &:first-child{
              padding-top: 0;
            }
            &:last-child {
              td {
                padding-bottom: 0;
              }
            }
          }
          &:last-child {
            margin-bottom: 0;

          }

          td {
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            color: #F9F9F9;

            &:first-child {
              font-weight: 400;
              flex: 0 0 40%;
              padding-left: 0px;
              color: #F9F9F9;

            }
            &:last-child {
              flex-basis: 60%;
              padding-left: 100px;
              @media(max-width: 991px){
                padding-left: 25px;
              }
            }

          }
        }
      }
    }
  }
  
  
  
  @media(max-width: 767px){
    .at-glance{
      &__img{
        margin-top: 60px;
        padding-right: 15px !important;
        padding-top: calc(512 / 345 * 100%);
        
      }
      &__content{
        margin-top: 30px;
        padding-left: 15px !important;
        table{
          tr{
            //flex-direction: column;
            padding-bottom: 15px;
            td{
              &:first-child{
                font-size: 18px;
                margin-bottom: 0px;
                flex-basis: 40%;
              }
              &:last-child {
                padding-left: 0;
                flex-basis: 60%;
              }
            }
          }
        }
      }
    }
  }

`;
export default React.memo(AtGlance);
