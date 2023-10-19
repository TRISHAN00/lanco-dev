import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";

import Select, {components} from "react-select";
import Title from "../Title";
// import {bgColor_2, text} from "../../styles/globalStyleVars";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import Subtitle from "../SubTitle";
import Button from "../Button";
import {postForm} from "../../api/redux/landowner";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {Controller, useForm} from "react-hook-form";

const MyComponent = ({title}) => {




    const type = [
        {value: 'type1', label: 'Type 1'},
        {value: 'type2', label: 'Type 2'},
    ]

    const category = [
        {value: 'select1', label: 'Select 1'},
        {value: 'select2', label: 'Select 2'},
    ]


    const customStyles = {
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? `#000000` : '#535353',
            backgroundColor: state.isSelected ? `rgba(232, 231, 231, 0.6)` : '#FFF',
            margin: 0,
            fontSize: 14,
            cursor: 'pointer',
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: state.isSelected ? 700 : 400,
            "&:hover": {
                backgroundColor: `#000000`,
                color: '#FFF',
                cursor: 'pointer'
            },

        }), menu: (provided, state) => ({
            ...provided,
            color: '#FFF',
            backgroundColor: state.isSelected ? `#000000` : 'rgba(255,255,255,0)',
            margin: 0,
            borderRadius: 5,
            fontSize: 14,
            // width: 200,
        }), menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#191818' : '#FFF',
            borderRadius: 0,
            fontWeight: '400',
            color: '#FFF',
            fontSize: 14,
        }),

    };

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon/>
            </components.DropdownIndicator>
        );
    };



    const CaretDownIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="13.414" height="7.414" viewBox="0 0 13.414 7.414">
            <g id="Group_15659" data-name="Group 15659" transform="translate(1479.207 -192.793) rotate(90)">
                <line id="Line_3883" data-name="Line 3883" x2="6" y2="6" transform="translate(193.5 1466.5)" fill="none" stroke="#231f20" strokeLinecap="round" stroke-width="1"/>
                <line id="Line_3884" data-name="Line 3884" y1="6" x2="6" transform="translate(193.5 1472.5)" fill="none" stroke="#231f20" strokeLinecap="round" stroke-width="1"/>
            </g>
        </svg>
            ;
    };


    //offset left container

    const [offset, setOffset] = useState()
    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft)
    }, [])


    // form submit start

    const dispatch = useDispatch();
    const responseData = useSelector(state => state.landowner);

    const {register, handleSubmit ,formState,reset,control} = useForm({mode: 'all'});


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

        let api_services = apiEndPoints.LANDOWNER_FORM;

        var formData = new FormData();
        formData.append('location', e?.location);
        formData.append('address', e?.address);
        formData.append('size_of_land', e?.landsize);
        formData.append('plot_facing', e?.plot);
        formData.append('select_catagory', e?.category?.value);
        formData.append('select_type', e?.type?.value);
        formData.append('Width_of_the_road_in_front', e?.road);
        formData.append('name_of_the_landowner', e?.name);
        formData.append('contact_person', e?.poc);
        formData.append('contact_number',e?.phone);
        formData.append('email', e?.email);
        formData.append('form_id', 'landowner-form');

        if (e.email !== '' && e.name !== '' && e.contact_number !== '' && e?.poc !== '' && e?.location !== '' && e?.address !== '') {
            dispatch(postForm([api_services, formData]));
            reset();
        }
        console.log(e?.landsize)
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





    //Form Submit end


    return (
        <StyledComponent offset={offset}>
            <div className={'landowner-form'}>
                <Container fluid className={'land'}>
                    <div className={'land-form pt-120 pb-120'}>
                        <Form className={'form'} >
                            <Row>
                                <Col className={'contact-map__left form-gap'} md={5}>
                                    <div className="contact-map__form">
                                        <div className="contact-map__form-title">
                                            <h4>A. Land Information</h4>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control className={formState?.errors?.location?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                              {...register("location",{
                                                                  required: 'Location is required',
                                                                  pattern: {
                                                                      // value: /([A-Z])\w+/,
                                                                      message: 'Name must contain only letters',
                                                                  },

                                                              })}
                                                    type="text" placeholder="Location *"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.address?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("address",{
                                                        required: 'Address is required',
                                                        pattern: {
                                                            // value: /([A-Z])\w+/,
                                                            message: 'Name must contain only letters',
                                                        },

                                                    })}
                                                    type="text" placeholder="Address *"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control
                                                    className={formState?.errors?.landsize?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("landsize",{
                                                        required: 'Size is required',
                                                        pattern: {
                                                            // value: true,
                                                            message: 'Size must contain only Integers',
                                                        },

                                                    })}
                                                    type="text" placeholder="Size of the Land *"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control
                                                    className={formState?.errors?.plot?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("plot",{
                                                        required: 'Plot is required',
                                                        pattern: {
                                                            // value: /([A-Z])\w+/,
                                                            message: 'Select plot facing',
                                                        },

                                                    })}
                                                    type="text" placeholder="Plot Facing *"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Controller
                                                    control={control}
                                                    name="category"
                                                    defaultValue={null}
                                                    render={({ field }) => (
                                                        <Select
                                                            classNamePrefix="filter"
                                                            isSearchable={false}
                                                            placeholder='Select Category *'
                                                            styles={customStyles}
                                                            components={{ DropdownIndicator }}
                                                            options={category}
                                                            {...field}
                                                            onChange={(selectedOption) => {
                                                                // Update the form field value
                                                                field.onChange(selectedOption);
                                                            }}
                                                        />
                                                    )}
                                                />


                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Controller
                                                    control={control}
                                                    name="type"
                                                    defaultValue={null}
                                                    render={({ field }) => (
                                                        <Select
                                                            classNamePrefix="filter"
                                                            name={'interesred'}
                                                            isSearchable={false}
                                                            placeholder='Select Type *'
                                                            styles={customStyles}
                                                            components={{ DropdownIndicator }}
                                                            options={type}
                                                            {...field}
                                                            onChange={(selectedOption) => {
                                                                // Update the form field value
                                                                field.onChange(selectedOption);
                                                            }}
                                                        />
                                                    )}
                                                />

                                                {/*className={validInterest ? 'has-error form-select ' : 'form-select '}*/}

                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control
                                                    className={formState?.errors?.road?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("road",{
                                                        required: 'width is required',
                                                        pattern: {
                                                            // value: true,
                                                            message: 'Width must contain only integer',
                                                        },

                                                    })}
                                                    type="text" placeholder="Width of the road in front *"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={'contact-map__right contact-map__form'} md={{span: 5, offset:2}}>
                                    <div className="contact-map__form">
                                        <div className="contact-map__form-title">
                                            <h4>B. Landowner’s Profile</h4>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("name",{
                                                        required: 'landowner is required',
                                                        pattern: {
                                                            value: /([A-Z])\w+/,
                                                            message: 'Name must contain only letters',
                                                        },

                                                    })}
                                                    type="text" placeholder="Name of the land owner *"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.poc?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("poc",{
                                                        required: 'person is required',
                                                        pattern: {
                                                            value: /([A-Z])\w+/,
                                                            message: 'Name must contain only letters',
                                                        },

                                                    })}
                                                    type="text" placeholder="Contact Person"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("phone",{
                                                        required:{
                                                            // value:true,
                                                            message:'please enter your phone first'
                                                        },
                                                        pattern:{
                                                            value: /^01[0-9]{9}$/,
                                                            message:'please enter a valid 11 digit phone number'
                                                        }
                                                    })}
                                                    type="number" placeholder="Contact Number *"
                                                />
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
                                                    type="email" placeholder="Email"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className={"dc-btn"} onClick={handleSubmit(onSubmit,onError)}>
                                            <Button text={'Submit'} width={'400'} background={'#18A354'} hoverBackground={'#1c1c1c'}/>

                                        </div>

                                    </div>

                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </div>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`

  .landowner-form{
    background-color: #000;
    position: relative;
    &:after{
      position: absolute;
      content: '';
      width: 100%;
      height: 40%;
      bottom: 0;
      left: 0;
      background-color: #fff;
      
    }
  }
  
  .land{
    padding-left: ${props => props.offset}px;
    padding-right: 0;
    .land-form{
      background-color: #F2F2F2;
      padding-left: ${props => props.offset + 85}px;
      padding-right: ${props => props.offset + 85}px;
      position: relative;
      z-index: 999;
      @media(max-width: 767px){
        padding-right: 15px;
        padding-left: 15px;
      }
    }
    @media(max-width: 767px){
      padding: 0;
    }
  }
  
  .fade-up {
    transform: translateY(0px) !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
 
 
  
  .contact-map__form-title{
    margin-bottom: 40px;
    @media(max-width: 767px){
      margin-bottom: 30px;
    }
    
    h4{
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      color: #000000;
    }
  }
  
  @media (min-width: 1550px) {
    .subtitle{
      h2{
        font-size: 24px;
      }
    }
  }

  .css-2b097c-container {
   margin-bottom: 40px;
  }
 
`
export default React.memo(MyComponent);