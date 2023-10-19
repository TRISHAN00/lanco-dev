import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import {hover, text} from "../../styles/globalStyleVars";
import Button from "../Button";
import {Img} from "../Img";
import Select, {components} from "react-select";
import {useDispatch} from "react-redux";
import ProjectBox from "../ProjectBox";

const ProjectList = ({data, soldout, filter, setSelectedType, setSelectedLocation, setSelectedStatus,selectedStatus, selectedType, selectedLocation}) => {


    //filter values

    const typeas = filter?.category && filter?.category?.map(item1 => ({
        value: item1?.title,
        label: item1?.title,
    }));



    const statuss = filter?.type_list && filter?.type_list?.map(item2 => ({
        value: item2?.type,
        label: item2?.type,
    }));

    const locations = filter?.location_list && filter?.location_list?.map(item3 => ({
        value: item3?.location,
        label: item3?.location,
    }));

    // Functions to handle filter changes
    const handleTypeChange = (type) => {
        setSelectedType(type?.value.toLowerCase());
        // ... your code
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location?.value);
        // console.log(location?.value)
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status?.value);
        // console.log(status?.value)
    };



    //loadmore functionality
    const [itemsToShow, setItemsToShow] = useState(6);
    const [isCompleted, setIsCompleted] = useState(false)

    const handleLoadMore = () => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 6);
        if (itemsToShow + 6 >= data?.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };





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
            backgroundColor: state.isSelected ? `rgba(232, 231, 231, 0.6)` : '#FFF',
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
            backgroundColor: state.isSelected ? `${text}` : 'rgba(255,255,255,0)',
            margin: 0,
            borderRadius: 5,
            fontSize: 14,
            zIndex:10
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
                <line id="Line_3883" data-name="Line 3883" x2="6" y2="6" transform="translate(193.5 1466.5)" fill="none"
                      stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                <line id="Line_3884" data-name="Line 3884" y1="6" x2="6" transform="translate(193.5 1472.5)" fill="none"
                      stroke="#fff" strokeLinecap="round" stroke-width="1"/>
            </g>
        </svg>
            ;
    };


    return (
        <>
            <StyledProjectFilter className="project-filter pt-40 pb-40">
            <Container className="project-filter__form">
                <Form className={'form'} >
                    <Row>
                        <Col className={'project-filter__form__col'} xs={12} sm={12} md={4}>
                            <div className="contact-map__form">
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Select
                                            classNamePrefix="filter"
                                            isSearchable={false}
                                            styles={customStyles}
                                            options={statuss} // Use the statusOptions here
                                            onChange={handleStatusChange}
                                            placeholder={selectedStatus || 'Select Status'}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </Col>

                        <Col className={'project-filter__form__col'} xs={12} sm={12} md={4}>
                            <div className="contact-map__form">

                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Select
                                            classNamePrefix="filter"
                                            isSearchable={false}
                                            options={typeas}
                                            onChange={handleTypeChange}
                                            placeholder={selectedType || 'Select Type'}
                                            styles={customStyles}
                                            components={{DropdownIndicator}}
                                        />
                                    </Form.Group>
                                </div>

                            </div>
                        </Col>

                        <Col className={'project-filter__form__col'} xs={12} sm={12} md={4}>
                            <div className="contact-map__form">

                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">
                                        <Select
                                            classNamePrefix="filter"
                                            isSearchable={false}
                                            options={locations}
                                            onChange={handleLocationChange}
                                            placeholder={selectedLocation || 'Select location'}
                                            styles={customStyles}
                                            components={{DropdownIndicator}}
                                            // defaultValue={selectedLocation || 'Select location'}
                                        />
                                    </Form.Group>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </StyledProjectFilter>
            <StyledProjectList className="project-list">
                <Container>
                    <Row>
                        {
                            data &&
                            data?.slice(0, itemsToShow)?.map((e, i)=>{
                                return(
                                    <Col sm={6} md={6} lg={4} key={i}>
                                        <ProjectBox soldout={soldout} data={e}/>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    {itemsToShow < data?.length && (
                        <Col md={12}>
                            <div className={'loadmore'} onClick={handleLoadMore}>
                                <Button text={'Load More'} background={'#18A354'} hoverBackground={'#535353'}/>
                            </div>
                        </Col>
                    )}
                </Container>
            </StyledProjectList>
        </>
    );
};

const StyledProjectFilter = styled.section`
  background-color: #000000;

  padding-top: 80px;
  padding-bottom: 80px;
  
  //.container{
  //  padding-right: 0;
  //  padding-left: 0;
  //}
  
  .project-filter__form {
    //&__col{
    //  padding-left: 0;
    //  padding-right: 30px;
    //  &:last-child{
    //    padding-right: 0;
    //  }
    //}
    .form .filter__control {
      margin-bottom: 0 !important;
    }
  }

  .form-group {
    margin-bottom: 0;

    .filter__placeholder {
      color: #F9F9F9 !important;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-transform: capitalize;
    }

    .filter__input {
      input {
        color: rgba(255, 255, 255, 0.6) !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
    }

    .filter__single-value {
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      opacity: 0.6;
      text-transform: capitalize;
    }
  }

  .css-1hb7zxy-IndicatorsContainer{
    margin-right: 10px;
  }
  @media (min-width: 1550px) {
    .project-filter__form {
      .form .filter__control {
        margin-bottom: 30px !important;
      }
    }

    .form-group {
      margin-bottom: 0;

      .filter__placeholder {
        font-size: 16px;
        line-height: 22px;
      }

      .filter__input {
        input {
          font-size: 16px;
          line-height: 22px;
        }
      }

      .filter__single-value {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 767px) {
    .project-filter__form__col {
      margin-bottom: 30px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .project-filter__form {
      .form .filter__control {
        margin-bottom: 0 !important;
      }
    }
  }
`;

const StyledProjectList = styled.section`
  background-color: #F9F9F9;
  position: relative;


  padding-top: 105px;
  padding-bottom: 105px;

  //.container{
  //  padding-right: 0;
  //  padding-left: 0;
  //}
  
  
  .loadmore {
    display: flex;
    justify-content: center;
    z-index: 3;
  }

  .featured-projects__mobile {
    display: none;
  }
  
  //.project-box{
  //  padding-left: 0;
  //  padding-right: 30px;
  //  //&:last-child{
  //  //  padding-right: 0;
  //  //}
  //}

  .project-box__single {

    position: relative;
    margin-bottom: 60px;

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      cursor: pointer;
    }

    &:hover {
      .global-image {
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
        transform: scale(1.06);
      }
    }

    &__image {
      position: relative;
      padding-top: calc(512 / 370 * 100%);
      overflow: hidden;

      .global-image {
        filter: grayscale(100%);
        overflow: hidden;
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
      }
      &:after {
        position: absolute;
        content: '';
        background-color: #0d0a0a;
        opacity: 30%;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
      }
      &:hover {
        .global-image {
          filter: none;
        }
        &:after{
          opacity: 20%;
          transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
        }
      }
    }

    &__text {
      position: absolute;
      bottom: 20px;
      left: 30px;

      h6 {
        font-size: 24px;
        line-height: 38px;
        color: #FFFF;
        font-weight: 500;
      }

      p {
        display: flex;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 0;
      }
    }

    &__icon {
      position: absolute;
      top: 30px;
      left: 0;
      //transform: translate(-50% , -50%);
      cursor: pointer;
      z-index: 999999;


      p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: #fff;
        background-color: #FF0000;
        padding: 12px 42px 16px 35px;
      }
    }
    
  }

  .dot {
    display: flex;
    justify-content: end;
    align-items: end;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFFFFF;
    margin-right: 10px;
    margin-left: 10px;
  }
  

  @media only screen and (min-width: 992px) and (max-width: 1050px) {
    .featured-projects__main {
      .project-slider {

        &__single {

          &:hover {

            .project-slider__single__hover {
              .content {
                height: 180px;
                width: 180px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1050px) and (max-width: 1150px) {
    .featured-projects__main {
      .project-slider {

        &__single {

          &:hover {

            .project-slider__single__hover {
              .content {
                height: 210px;
                width: 210px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {

    .bg-image-top {
      display: none;
    }

    .bg-image-bottom {
      display: none;
    }

    .featured-projects__web {
      display: none;
    }

    .bottom {
      display: flex;
    }

    .load-more {
      display: none;
    }

    .featured-projects__mobile {
      display: block;
      padding-right: 0px;
      padding-left: 18px;
    }

    .project-slider {

      .swiper {
        padding-right: 100px;
      }
    }

    .project-slider__single__inner__content {
      position: relative;

      h5 {
        position: absolute;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        bottom: 60px;
      }
    }

    .project-slider__single__hover {

      .content {
        display: none;
      }

      p {
        display: none;
      }
    }


  }

  @media (min-width: 1550px) {

    .project-slider__single__inner__content {
      h5 {
        font-size: 24px !important;
        line-height: 28px !important;
      }
    }

    .content__inner {
      h6 {
        min-width: 130px;
        font-size: 16px !important;
        line-height: 22px !important;
      }
    }

    .project-slider__single__hover p {
      font-size: 18px !important;
      line-height: 24px !important;
    }

    .featured-projects__main {
      &__top {
        p {
          font-size: 18px;
          line-height: 24px !important;
        }
      }
    }
  }

  @media (max-width: 374px) {
    .project-slider__single__inner__content {
      h5 {
        padding: 0 20px !important;
        bottom: 20px !important;
      }
    }
  }
`

export default React.memo(ProjectList);
