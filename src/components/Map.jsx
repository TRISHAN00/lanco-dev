import React, { useEffect} from 'react';
import styled from 'styled-components';
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "./Button";
import {Img} from "./Img";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {postForm} from "../api/redux/contact";
import {apiEndPoints} from "../api/network/apiEndPoints";


const ListWithForm = ({link, img}) => {

    const dispatch = useDispatch();
    const responseData = useSelector(state => state.contact);

    const {register, handleSubmit ,formState,reset} = useForm({mode: 'all'});


    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const onSubmit = (e) => {

        let api_services = apiEndPoints.CONTACT_FORM;

        var formData = new FormData();
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('message', e?.message);
        formData.append('form_id', 'contact-form');

        if (e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));
            reset();
        }
    };
    let count=0;

    const onError = (errors) => {
        Object.values(errors).forEach((error) => {
            count++;
        });
        if(count>0){
            toast.error('please fill out the correct inputs');
        }
        count=0;
    };
    useEffect(() => {
        if (responseData && responseData?.error !== '') {
            error(responseData?.error)
        }
        if (responseData && responseData?.success !== '') {
            success(responseData?.success)
        }

    }, [responseData])

    return (
        <StyledListWithForm id={'map'} className={'list_with_form'}>
            <Container fluid>
                <Row>
                    <Col md={7} className={'map-image'}>
                        <div className="list_with_form__list">
                            <div className="flex-box-wrapper reveal">
                               <a href={link} target={'_blank'}>
                                   <Img src={img}/>
                               </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="form_wrapper">
                            <h3 className="title">
                                Request a Consultation
                            </h3>
                            <Form className={'form'}>

                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                            {...register("name",{
                                                required: 'Name is required',
                                                pattern: {
                                                    value: /([A-Z])\w+/,
                                                    message: 'Name must contain only letters',
                                                },

                                            })}
                                            type="text" placeholder="Name*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                            {...register("email",{
                                                required:{
                                                    value:true,
                                                    message:'please enter your email'
                                                },
                                                pattern:{
                                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:'please enter a valid email address'
                                                }
                                            })}
                                            type="email" placeholder="Email*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control
                                            className={formState?.errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                            {...register("phone",{
                                                required:{
                                                    value:true,
                                                    message:'please enter your phone first'
                                                },
                                                pattern:{
                                                    value:/^01[0-9]{9}$/,
                                                    message:'please enter a valid 11 digit phone number'
                                                }
                                            })}
                                            type="text" placeholder="Phone*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control
                                            className={formState?.errors?.message?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                            {...register("message",{
                                                required:{
                                                    // value:true,
                                                    message:'please enter your Message'
                                                },

                                            })}
                                            type="textarea" placeholder="Message"/>
                                    </Form.Group>
                                </div>


                                <div className={'form-group'}>
                                    <div onClick={handleSubmit(onSubmit,onError)}>
                                        <Button background={'#18A354'} hoverBackground={'#535353'} text={'Submit Message'}/>
                                    </div>

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

  .map-image{
    padding: 0;
  }
  .col-md-5{
    padding: 0;
  }

  .form_wrapper{
    background: #F2F2F2;
    padding: 60px 100px 60px 60px;
    height: 100%;
    @media(max-width: 767px){
      padding: 30px;
      margin-top: 40px;
    }
    .title {
      font-size: 24px;
      font-weight: 4000;
      line-height: 28px;
      color: #1C1C1C;
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
        border-color: #C9C9C9;
        padding: 0 0 8px;
        color: #C4C4C4;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        &::placeholder {
          color: #656565;
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
