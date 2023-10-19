import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";


const MyComponent = ({data}) => {

    console.log(data)


    const office = data?.posts?.list?.filter(e => e?.data?.slug === 'office-address')?.[0];
    const sales = data?.posts?.list?.filter(e => e?.data?.slug === 'sales')?.[0];
    const land = data?.posts?.list?.filter(e => e?.data?.slug === 'for-land')?.[0];


    console.log(office)
    return (
        <StyledComponent>
            <Container className={'address'}>
                <Row>
                    <Col md={5} className={'address__title'}>
                        <h4 className={'split-up'}>{data?.section_data?.title}</h4>
                    </Col>
                    <Col md={{offset:2, span: 10}}>
                        <div className={'address__info'}>
                            <div className={'address__info__single'}>
                                <h5 className={'split-up'}>{office?.data?.title}</h5>
                                {
                                    reactHtmlParser(office?.data?.description)
                                }
                                {
                                    reactHtmlParser(office?.data?.subtitle)
                                }
                                {
                                    reactHtmlParser(office?.data?.short_desc)
                                }
                            </div>
                            <div className={'address__info__single'}>
                                <h5 className={'split-up'}>{sales?.data?.title}</h5>
                                {
                                    reactHtmlParser(sales?.data?.subtitle)
                                }
                                {
                                    reactHtmlParser(sales?.data?.short_desc)
                                }
                            </div>
                            <div className={'address__info__single'}>
                                <h5 className={'split-up'}>{land?.data?.title}</h5>
                                {
                                    reactHtmlParser(sales?.data?.subtitle)
                                }
                                {
                                    reactHtmlParser(sales?.data?.short_desc)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #000000;
  .address{
    &__title{
      h4{
        font-size: 40px;
        line-height: 48px;
        font-weight: 500;
        color: #fff;
      }
    }
    &__info{
      display: flex;
      &__single{
        margin-top: 80px;
        margin-right: 30px;
        h5{
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          color: #F9F9F9;
          margin-bottom: 15px;
        }
        p{
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          a{
            color: #C9C9C9;
          }
        }
        &:nth-child(2n){
          margin-right: 95px;
        }
        &:last-child{
          margin-right: 0;
        }
      }
      @media(max-width: 767px){
        display: block;
        &__single{
          margin-top: 40px;
        }
      }
    }
  }
`;

export default React.memo(MyComponent);
