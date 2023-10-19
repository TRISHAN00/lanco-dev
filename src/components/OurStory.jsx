import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Button from "./Button";
import SubTitle from "./SubTitle";
import reactHtmlParser from "react-html-parser";


const Counter = ({src, data}) => {
    return (
        <>
            <StyledDetail className='pt-150 pb-150'>
                <Container>
                    <SubTitle text={data?.section_data?.subtitle} marginBottom={'80'} />
                    <Row>
                        <Col md={6} className={'counter-left pr-0'}>
                            <div className="content">
                                <h5 className={'split-up'}>{reactHtmlParser(data?.section_data?.title)}</h5>
                            </div>
                        </Col>
                        <Col className={'counter-right'} md={6}>
                            <div className="content">
                                <p className={'split-up'}>
                                    {reactHtmlParser(data?.section_data?.description)}
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
  .counter-left{
    .content{
      margin-right: 100px;
      h5{
        color: #000000;
      }
    }
  }

  .counter-right{
    .content{
      p{
        font-size: 18px;
        line-height: 24px;
        color: #656565;
      }
    }
  }
  
  @media(max-width: 767px){
    .counter-left{
      .content{
        h5{
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
