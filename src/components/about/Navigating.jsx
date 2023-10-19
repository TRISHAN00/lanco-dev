import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";


const MyComponent = ({data}) => {
    return (
        <StyledComponent className={'navigating pt-150'}>
            <Container>
                <Row>
                    <Col md={12} className={'navigating__top split-up'}>
                        <h5>{data?.section_data?.title}</h5>
                    </Col>
                    <Col md={6} className={'navigating__bottom-left reveal'}>
                        <div className={'image-wrapper'}>
                            <Img src={data?.images?.list?.[0]?.full_path}/>
                        </div>
                    </Col>
                    <Col md={6} className={'navigating__bottom-right split-up'}>
                        {reactHtmlParser(data?.section_data?.description)}
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    background-color: #000;
  padding-bottom: 100px;
  .navigating{
    &__top{
      margin-bottom: 60px;
      //padding: 0;
      h5{
        color: #FFFFFF;
        width:  60%;
      }
    }
    &__bottom-left{
      //padding-left: 0;
      //padding-right: 30px;
      .image-wrapper{
        position: relative;
        padding-top: calc(420 / 570 * 100%);
        height: 100%;
      }
    }
    &__bottom-right{
      //padding-left: 0;
      //padding-right: 0;
      p{
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color: #F9F9F9;
        margin-bottom: 40px;
        
        &:last-child{
          padding-top: 15px;
          margin-bottom: 0;
        }
      }
    }
    
    @media(max-width: 767px){
      &__top{
        margin-bottom: 40px;
        padding-left: 15px;
        padding-right: 15px;
        h5{
          font-size: 30px;
          line-height: 38px;
          width: 100%;
        }
      }
      &__bottom-right{
        padding-right: 15px;
        padding-left: 15px;
      }
      &__bottom-left{
        padding-right: 15px;
        .image-wrapper{
          padding-top: calc(250 / 345 * 100%);
        }
        margin-bottom: 40px;
      }
    }
  }
  
  
`;

export default React.memo(MyComponent);
