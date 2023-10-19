import React, {useEffect, useRef, useState} from "react";
import Select, {components} from "react-select";
import {black, hover, text} from "../../styles/globalStyleVars";
import {BsChevronDown, BsX} from "react-icons/bs";
import styled from "styled-components";
import {Accordion, Col, Container, Form, Modal, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import Button from "../Button";
import SubTitle from "../SubTitle";
import {useDispatch, useSelector} from "react-redux";
import {Controller,useForm} from "react-hook-form";
import {postForm} from "../../api/redux/career";
import {toast} from "react-toastify";
import {apiEndPoints} from "../../api/network/apiEndPoints";



const IndustrialLube = ({queryParam, data}) => {
    const [show, setShow] = useState(false);
    const [winWidth, setWinWidth] = useState(true)
    const [postTitle, setPostTitle] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activeIndex, setActiveIndex] = useState(0); // Keep track of the active index



    useEffect(() => {
        let getLists = document.querySelector(".desktop-lists");
        let getLi = getLists?.querySelectorAll("li"); // Check if getLists exists
        if (getLi && typeof queryParam === "undefined") {
            getLi[0]?.classList.add("active"); // Initially set the first li to active
            if (data && data.length > 0) {
                setSelectedType(data[0]?.data?.category_title || ""); // Set the first category as the default
            }
        } else if (getLi) {
            getLi[0]?.classList.remove("active");
        }
    }, [queryParam, data]);

    const handleLiClick = (index, categoryTitle) => {
        const getLists = document.querySelector(".desktop-lists");
        const previousActiveLi = getLists?.querySelector("li.active"); // Check if getLists exists
        if (previousActiveLi) {
            previousActiveLi.classList.remove("active");
        }

        const getLi = getLists?.querySelectorAll("li"); // Check if getLists exists
        if (getLi) {
            getLi[index]?.classList.add("active");
            setActiveIndex(index);
            setSelectedType(categoryTitle); // Update selectedType when a user clicks
        }
    };


    // Function to handle the Apply button click
    const handleApplyClick = (title) => {
        setPostTitle(title); // Store the title in the state
        handleShow(); // Show the modal
    }


    //dropdown -from

    const [selectType, setSelectType] = useState(data?.data?.[0]?.category_title || "");
    const selectTypeInputRef = useRef(null); // Add this line to define the ref

    const handleType = (e) => {
        setSelectType(e);
        // selectLocationInputRef?.current?.select?.clearValue();
    }


    const customStyles = {
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? `${text}` : '#221F1F',
            backgroundColor: state.isSelected ? `rgba(232, 231, 231, 0.6)` : '#fff',
            margin: 0,
            fontSize: 14,
            cursor: 'pointer',
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: state.isSelected ? 700 : 400,
            "&:hover": {
                backgroundColor: `${text}`,
                color: '#FFF',
                cursor: 'pointer'
            },

        }), menu: (provided, state) => ({
            ...provided,
            color: '#FFF',
            backgroundColor: state.isSelected ? `${text}` : 'rgba(255,255,255)',
            margin: 0,
            borderRadius: 5,
            fontSize: 14,
            zIndex: 10
            // width: 200,
        }), menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#000' : '#FFF',
            borderRadius: 5,
            fontWeight: '400',
            color: '#FFF',
            fontSize: 14,
        }),

    };

    // eslint-disable-next-line no-undef
    const DropdownIndicator = (props) => {
        return (
            <div {...props}>
                <BsChevronDown/>
            </div>
        );
    };

    const CaretDownIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="13.414" height="7.414" viewBox="0 0 13.414 7.414">
            <g id="Group_15659" data-name="Group 15659" transform="translate(1479.207 -192.793) rotate(90)">
                <line id="Line_3883" data-name="Line 3883" x2="6" y2="6" transform="translate(193.5 1466.5)" fill="none"
                      stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                <line id="Line_3884" data-name="Line 3884" y1="6" x2="6" transform="translate(193.5 1472.5)" fill="none"
                      stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
            </g>
        </svg>
            ;
    };

    // const [selectedType, setSelectedType] = useState(data?.[0]?.data?.category_title || ''); // Set the first category as the default
    const [selectedType, setSelectedType] = useState(""); // Initialize with an empty string

    useEffect(() => {
        if (data && data.length > 0) {
            setSelectedType(data[0]?.data?.category_title); // Set the first category as the default
        }
    }, [data]);
    //Uploaded file name
    const [selectedFileName, setSelectedFileName] = useState('');
    const [cv, setCv] = useState(null)
    const cvRef = useRef()
    const handleFileChange = (event) => {
        // const file = event.target.files[0];
        setCv(event.target.files[0])
        setSelectedFileName(event.target.files[0].name);
    };


    // Filtered data based on selected type
    const filteredData = data && data.length > 0
        ? data.filter(item => item?.data?.category_title === selectedType)
        : null;

    console.log(filteredData)



    let handleMobileSelect = (selectedOption) => {
        setSelectedType(selectedOption.value);
    }

    const options = data
        ? data.reduce((uniqueOptions, category) => {
            const categoryTitle = category?.data?.category_title;
            const existingOption = uniqueOptions.find(
                (option) => option.value === categoryTitle
            );

            if (!existingOption) {
                uniqueOptions.push({
                    value: categoryTitle,
                    label: reactHtmlParser(categoryTitle),
                });
            }

            return uniqueOptions;
        }, [])
        : [];


    //Form Validation & Submit

    const dispatch = useDispatch();
    const responseData = useSelector(state => state.career);

    const {register, handleSubmit ,formState,reset, control} = useForm({mode: 'all'});


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
        formData.append('position', postTitle)
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('message', e?.message);
        formData.append('file', cv);
        formData.append('form_id', 'career-form');

        if (e.position !== '' && e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));
            reset();
        }
        setSelectedFileName('');
        setSelectedType('');
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
        <StyledFaq className="job-lists pt-100 pb-150">

            <Container>

                <Row>
                    <Col sm={{offset: 2, span: 4}} className='job-lists__sidebar'>
                        <div className="job-lists__sidebar__mobile-dropdown">
                            <Select onChange={handleMobileSelect}
                                    components={{DropdownIndicator}}
                                    className='select-here files'
                                    placeholder={'Select'}
                                    options={options}/>
                        </div>
                        <ul className='desktop-lists'>
                            {data && data?.length > 0 && (
                                data.reduce((uniqueCategories, e) => {
                                    const categoryTitle = e?.data?.category_title;
                                    if (!uniqueCategories.includes(categoryTitle)) {
                                        uniqueCategories.push(categoryTitle);
                                    }
                                    return uniqueCategories;
                                }, []).map((categoryTitle, i) => {
                                    const firstItemWithCategory = data.find(
                                        (e) => e?.data?.category_title === categoryTitle
                                    );
                                    const isActive = i === activeIndex;
                                    return (
                                        <li
                                            key={i}
                                            className={isActive ? "active" : ""}
                                            onClick={() => handleLiClick(i, categoryTitle)} // Update selectedType when clicked
                                        >
                                            <a>
                                                {reactHtmlParser(firstItemWithCategory?.data?.category_title)}
                                            </a>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </Col>

                    <Col sm={6} className='job-lists__content'>
                        <Accordion defaultActiveKey="0">
                            {filteredData && filteredData?.length > 0 && (
                                filteredData.map((e, i) => {
                                    const typeMatches = e?.data?.category_title === selectedType;
                                    return (
                                        <Accordion.Item eventKey={`${i}`} key={i}>
                                            <Accordion.Header>
                                                {reactHtmlParser(e?.data?.title)}
                                                <span><BsChevronDown/></span>
                                            </Accordion.Header>
                                            {typeMatches && ( // Render the items only if the type matches
                                                <Accordion.Body>
                                                    {reactHtmlParser(e?.data?.description)}
                                                    <div className="button-group d-flex" onClick={() => handleApplyClick(e?.data?.title)}>
                                                        <Button text={'Apply'} background={'#18A354'} hoverBackground={'#1c1c1c'}/>
                                                    </div>
                                                </Accordion.Body>
                                            )}
                                        </Accordion.Item>
                                    );
                                })
                            )}
                        </Accordion>
                    </Col>

                </Row>


            </Container>
            <Modal show={show} className='apply-modal' onHide={handleClose}>
                <Modal.Body>
                    <div className="modal-data">
                        <div onClick={handleClose} className="modal-close dc-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.274" height="22.274" viewBox="0 0 22.274 22.274">
                                <g id="Group_21714" data-name="Group 21714" transform="translate(-889.01 -960.428) rotate(45)">
                                    <line id="Line_388" data-name="Line 388" x2="30" transform="translate(1323.5 35.5) rotate(90)" fill="none" stroke="#535353" stroke-width="1.5"/>
                                    <line id="Line_389" data-name="Line 389" x1="30" transform="translate(1308.5 50.5)" fill="none" stroke="#535353" stroke-width="1.5"/>
                                </g>
                            </svg>
                        </div>
                        <Container className='modal-data__content'>
                            <h3>{reactHtmlParser(postTitle)}</h3>
                            <Col md={{offset: 2, span: 10}}>
                                <SubTitle text={'Apply for this position'}/>
                                <Form>

                                    <div className={'d-flex'}>
                                        <Form.Control className="form-control-lg"
                                                      value={reactHtmlParser(postTitle)} // Bind the value to postTitle
                                                      readOnly
                                                      type="text"
                                                      placeholder="Current Position" />
                                        <Form.Control className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                      {...register("name",{
                                                          required: 'Name is required',
                                                          pattern: {
                                                              value: /([A-Z])\w+/,
                                                              message: 'Name must contain only letters',
                                                          },

                                                      })}
                                                      type="text" placeholder="Name"/>
                                    </div>
                                    <div className="form__phoneEmail">
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
                                            type="number" placeholder="Phone Number*"/>
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
                                    </div>
                                    <Form.Control
                                        className={formState?.errors?.message?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("message",{
                                            required:{
                                                // value:true,
                                                message:'please enter your Message'
                                            },

                                        })}
                                        type="textarea" placeholder="Message"/>

                                    <div className="button-group">
                                        <div className="attachCvName">
                                            <div className="attach-cv">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20"
                                                     viewBox="0 0 26.268 24"
                                                     style={{display: selectedFileName ? "none" : "block"}}>
                                                    <g id="Group_15866" data-name="Group 15866"
                                                       transform="translate(-12252 -863)">
                                                        <path id="Path_6994" data-name="Path 6994"
                                                              d="M129.092,23.561a4.6,4.6,0,0,0-3.3-1.463h-.057a4.7,4.7,0,0,0-3.2,1.384l-.009.008L110.8,35.42a2.822,2.822,0,0,0,0,4.1,2.878,2.878,0,0,0,2.044.892h0a2.9,2.9,0,0,0,2.061-.9l8.11-8.285a1.026,1.026,0,0,0-1.466-1.435l-8.106,8.281a.862.862,0,0,1-.6.283.828.828,0,0,1-.586-.283.791.791,0,0,1,0-1.212l11.718-11.914a2.444,2.444,0,0,1,3.658.058,2.571,2.571,0,0,1,.019,3.809,1.026,1.026,0,1,0,1.458,1.443,4.6,4.6,0,0,0-.019-6.695Z"
                                                              transform="translate(12147.724 840.902)" fill="#fffdfb"/>
                                                        <path id="Path_6995" data-name="Path 6995"
                                                              d="M21.594,71.964a1.026,1.026,0,0,0-1.45.023L10.019,82.444a4.609,4.609,0,0,1-3.266,1.435h0A4.56,4.56,0,0,1,3.49,82.418a4.374,4.374,0,0,1,0-6.476L13.6,65.836a1.026,1.026,0,0,0-1.45-1.451L2.037,74.493l0,0A6.745,6.745,0,0,0,0,79.046a6.537,6.537,0,0,0,2.029,4.814,6.653,6.653,0,0,0,4.721,2.07h0a6.644,6.644,0,0,0,4.728-2.048L21.617,73.414A1.026,1.026,0,0,0,21.594,71.964Z"
                                                              transform="translate(12252 801.07)" fill="#fffdfb"/>
                                                    </g>
                                                </svg>
                                                <Form.Control
                                                    ref={cvRef}
                                                    {...register('cv')}
                                                    type="file"
                                                    accept=".pdf"
                                                    id="resume-upload"
                                                    style={{display: "none"}}
                                                    onChange={handleFileChange}
                                                />
                                                <Form.Label htmlFor="resume-upload" className="resume-upload-label"
                                                            style={{display: selectedFileName ? "none" : "block"}}>
                                                    Upload CV
                                                </Form.Label>
                                                {selectedFileName && (
                                                    <div className="file-name">
                                                        {selectedFileName.substring(0, 10)}...{selectedFileName.split('.').pop()}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div onClick={handleSubmit(onSubmit,onError)}>
                                            <Button text={'Submit'} fontWeight={'700'}/>
                                        </div>
                                    </div>
                                </Form>
                            </Col>

                        </Container>


                    </div>
                </Modal.Body>
            </Modal>

        </StyledFaq>
    );
};

const StyledFaq = styled.section`
  min-height: 70vh;

  .top-title {
    display: flex;

    .col-sm-8 {
      padding: 0;
    }

    margin-bottom: 60px;

    h4 {
      font-size: 36px;
      line-height: 40px;
      font-weight: 600;
    }
  }

  .job-lists__sidebar {

    &__mobile-dropdown {
      @media (min-width: 551px) {
        display: none;
      }

      img {
        margin: auto;
      }
    }

    p {
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      width: 80%;
    }

    ul {
      @media (max-width: 550px) {
        display: none;
      }

      li {
        margin-bottom: 10px;

        a {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          position: relative;
          color: #000;

          &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            top: 0;
            bottom: 0;
            right: -30px;
            margin: auto;
            height: 10px;
            width: 10px;
            background-color: #67A66D;
            display: none;
          }
        }

        &.active {
          a {
            //color: ${hover};

            &:after {
              display: block;
            }
          }
        }
      }
    }
  }

  .accordion-item {
    //margin-bottom: 40px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    &:last-child{
      .accordion-body{
        margin-bottom: 0!important;
      }
    }
  }

  .accordion-header {
    position: relative;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    margin-bottom: 60px;

    button {
      border: none;
      background-color: transparent;
      padding-left: 0;
      color: #000;
      font-weight: 500;
      text-transform: capitalize;
      border-bottom: 1px solid ${hover};
      width: 100%;
      text-align: left;
      padding-bottom: 20px;
      transition: all .4s ease;

      &.collapsed {
        color: #1C1718;
        border-color: #1C1718;
        span {
          background-color: #1C1718;

          svg {
            transform: rotate(0deg);
          }

          &:after {
            background-color: ${hover} !important;
          }
        }
      }
    }

    span {
      position: absolute;
      height: 30px;
      width: 30px;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 16px;
      background-color: transparent !important;
      

      svg {
        font-size: 15px;
        z-index: 2;
        transform: rotate(180deg);
        color: #000;
      }

    }

    &:hover {
      span {
        &:after {
          height: 100%;
          width: 100%;
          opacity: 1;
        }
      }

      button {
        color: ${hover};
        border-color: ${hover};
      }
    }
  }

  .accordion-body {
    margin-bottom: 80px;
    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      padding-top: 0 !important;
      color: #535353;;
    }

    ul {
      margin-top: 40px;

      h4 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        margin-bottom: 40px;
        color: #000000;
      }

      li {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 10px;
        position: relative;
        padding-left: 20px;

        &:after {
          position: absolute;
          content: '';
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #535353;
          left: 0px;
          top: 8px;
        }

        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }


  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 35px !important;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #000 !important;
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }


  .button-group {
    margin-top: 45px;
  }


  @media (max-width: 767px) {
    overflow: visible;
    .container {
      overflow: visible;
    }

    .job-lists__sidebar {
      margin-bottom: 50px;

      p {
        max-width: 100%;
      }
    }
  }

`;
export default React.memo(IndustrialLube);

