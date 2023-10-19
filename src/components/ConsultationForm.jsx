import React from 'react';
import styled from 'styled-components';
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "./Button";
import SubTitle from "./SubTitle";


const ListWithForm = () => {


    return (
        <StyledListWithForm className={'list_with_form pt-150 pb-150'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="list_with_form__list">
                            <div className="flex-box-wrapper">
                                <SubTitle text={'Get in touch'} borderWidth={'50'}/>
                                <div className="content_left_left">
                                    <h5>Contact Horizon Heights for More Information</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span:5, offset:1}}>
                        <div className="form_wrapper">
                            <h3 className="title">
                                Request a Consultation
                            </h3>
                            <Form className={'form'}>

                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Name*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control type="text" placeholder="Phone*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control  as="textarea"

                                                       name='msg' placeholder='Message'/>
                                    </Form.Group>
                                </div>


                                <div className={'form-group'}>
                                    <Button background={'#67A66D'} hoverBackground={'#535353'} text={'Submit Message'}/>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledListWithForm>
    )
};

const StyledListWithForm = styled.div`
  background: #F9F9F9;
  .sub_header{
    border-top: 1px solid #C4C4C4;
    padding-top: 40px;
    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #D80028;
    }
  }

  .content_left_left{
    margin-top: 30px;
    h5{
      color: #000000;
      margin: 0;
    }
  }
  .list_with_form__list {
    height: 100%;
    ul {
      li {
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.5);
        margin-bottom: 30px;
        &:last-child{
          padding-bottom: 0;
          margin-bottom: 0;
          border: none;
        }
        span {
          display: block;
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          flex: 0 0 20%;
          color: #D80028;
        }

        .item {
          flex: 0 0 80%;

          h4 {
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(79, 97, 107, 0.5);
            margin-bottom: 10px;
          }

          p {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            color: #4F616B;
          }
        }
      }
    }
  }

  .form_wrapper{
    background: #000000;
    padding: 60px;
    height: 100%;
    @media(max-width: 767px){
      padding: 30px;
      margin-top: 40px;
    }
    .title {
      font-size: 24px;
      font-weight: 4000;
      line-height: 28px;
      color: #F9F9F9;
      margin: 0 0 40px;
    }

    .form-group {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      .form-control {
        box-shadow: none;
        outline: 0;
        border-radius: 0;
        background: transparent;
        height: auto;
        border-left: none;
        border-right: none;
        border-top: none;
        border-color: rgba(246, 246, 247, 0.2);
        padding: 0 0 8px;
        color: #C4C4C4;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        &::placeholder {
          color: #C4C4C4;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }

  
    .filter__placeholder {
      color: #C4C4C4;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    .filter__control {
      height: 30px !important;
      padding: 0 !important;
      background: transparent !important;
      border-left: none !important;
      border-right: none !important;
      border-top: none !important;
      border-color: rgba(246, 246, 247, 0.2) !important;

      .filter__single-value {
        color: #C4C4C4 !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 20px !important;
      }

      .filter__indicator-separator {
        display: none;
      }

      .filter__value-container {
        padding: 0;
      }

      .filter__dropdown-indicator, .filter__input-container, .filter__placeholder {
        margin: 0;
      }
    }
  }

  @media(max-width: 767px){
    margin-left: 0;
    margin-top: 40px;
    h5{
      font-size: 30px;
      line-height: 38px;
    }
  }
`;


export default React.memo(ListWithForm);
