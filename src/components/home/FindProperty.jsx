import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {text} from "../../styles/globalStyleVars";
import {BsChevronDown} from "react-icons/bs";
import Select from "react-select";
import Button from "../Button";


const MyComponent = ({data}) => {

    //dropdown -from
    const [selectType, setSelectType] = useState('All')
    const selectTypeInputRef = useRef(null); // Add this line to define the ref

    const handleType = (e) => {
        setSelectType(e);
        // selectLocationInputRef?.current?.select?.clearValue();

    }

    const customStyles = {
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)",
            border: state.isFocused ? 0 : 0,
            boxShadow: "none"
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#fff' : '#221F1F',
            backgroundColor: state.isSelected ? '#18A354' : '#fff',
            marginTop: 10,
            fontSize: 14,
            cursor: 'pointer',
            paddingLeft: 10,
            paddingRight: 10,
            outline: 'none',
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
            zIndex: 10,
            outline: 'none'
            // width: 200,
        }), menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#000' : '#FFF',
            borderRadius: 5,
            fontWeight: '400',
            color: '#FFF',
            fontSize: 14,
            outline: 'none'
        }),
        control: (provided) => ({
            ...provided,
            borderRadius: 23, // Adjust the value as needed
            outline: "none",
            // Other control styles if needed
        }),
    };

    const options = data && data?.map(item => ({
        value: item.location,
        label: item.location,
    }));


    // eslint-disable-next-line no-undef
    const DropdownIndicator = (props) => {
        return (
            <div {...props}>
                <BsChevronDown style={{ transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)" }}/>
            </div>
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
        <StyledComponent>
            <Container className={'find'}>
                <Row>
                    <Col md={6} className={'split-up'}>
                        <div className={'find__left'}>
                            <svg id="find_a_property-01" data-name="find a property-01" xmlns="http://www.w3.org/2000/svg" width="41" height="41.255" viewBox="0 0 41 41.255">
                                <path id="Path_9574" data-name="Path 9574" d="M135.855,31A12.915,12.915,0,1,0,148.77,43.91,12.915,12.915,0,0,0,135.855,31Zm0,23.416a10.5,10.5,0,1,1,10.5-10.5,10.5,10.5,0,0,1-10.5,10.5Z" transform="translate(-107.77 -27.175)" fill="#fff"/>
                                <rect id="Rectangle_6090" data-name="Rectangle 6090" width="4.166" height="19.415" rx="2.083" transform="translate(17.433 24.58) rotate(45)" fill="#fff"/>
                                <rect id="Rectangle_6091" data-name="Rectangle 6091" width="4.642" height="4.642" transform="translate(23.222 10.947)" fill="#18a354"/>
                                <rect id="Rectangle_6092" data-name="Rectangle 6092" width="4.642" height="4.642" transform="translate(29.379 10.947)" fill="#18a354"/>
                                <rect id="Rectangle_6093" data-name="Rectangle 6093" width="4.642" height="4.642" transform="translate(23.222 17.239)" fill="#18a354"/>
                                <rect id="Rectangle_6094" data-name="Rectangle 6094" width="4.642" height="4.642" transform="translate(29.379 17.239)" fill="#18a354"/>
                                <path id="Path_9575" data-name="Path 9575" d="M14.618,16.751a13.526,13.526,0,0,1,16.1-13.268l.116-.207L24.951,0,0,14.618H10.333l-.042,16.255c.069-.091,3.5-3.518,6.6-6.616a13.45,13.45,0,0,1-2.275-7.506Z" fill="#18a354"/>
                            </svg>

                            <h5>
                                Find The Property
                            </h5>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <div className={'d-flex find__right'}>
                                <Form.Group className="form-control find-form">
                                    <Select
                                        classNamePrefix="filter"
                                        isSearchable={false}
                                        // ref={selectTypeInputRef}
                                        options={options}
                                        onChange={e => handleType(e?.value)}
                                        placeholder='Current Position'
                                        styles={customStyles}
                                        components={{DropdownIndicator}}
                                    />
                                </Form.Group>
                                <Button text={'Search'} background={'#18A354'} hoverBackground={'#535353'}
                                        src={`/project?location=${selectType}`}
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #131313;
  padding-top: 83px;
  padding-bottom: 83px;

  .find {
    &__left {
      display: flex !important;
      gap: 30px;

      h5 {
        font-size: 30px;
        line-height: 38px;
        font-weight: 500;
        color: #FFFFFF;
      }
    }

    &__right {
      justify-content: right;

      .find-form {
        background-color: unset;
        border: 0;
        padding: 0;
        height: auto;
        justify-content: center;
        margin-right: 30px;
      }

      .form-control {
        width: unset;
      }

      .css-2b097c-container {
        width: 215px;
        margin-right: 30px;
        border-radius: 23px;

        .filter__control {
          background-color: #18A354;
          border: 0;
          padding: 12px 30px;
          box-shadow: none;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          @media(max-width: 767px) {
            background: rgb(24 163 84 / 15%);
          }
          &:after {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            right: 0;
            top: 100%;
            margin: auto;
            background-color: #535353;
            transition: all .5s ease;
            border-radius: 23px;
          }
          &:hover {
            &:after {
              top: 0;
            }
          }
          }
          @media(max-width: 767px){
            background-color: rgb(24 163 84 / 15%);
          }
        }

        .filter__value-container {
          padding: 0;
        }

        .filter__placeholder {
          margin: 0;
          font-size: 16px;
          line-height: 20;
          font-weight: 400;
          color: #fff;
          position: absolute;
          z-index: 999;
        }

        .filter__indicators {
          position: relative;
          z-index: 999;
          svg {
            position: relative;
            top: -2px;
            color: #fff;
          }
        }

        .filter__menu {
          margin-top: 10px;
        }

        .filter__indicator-separator {
          display: none;
        }

        .filter__indicator {
          position: relative;
        }

        .filter__single-value {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .find {
      &__left {
        margin-bottom: 30px;
      }

      &__right {
        //justify-content: space-between;
        justify-content: left;
        .find-form {
          margin-right: 18px;
        }
        .css-2b097c-container {
          margin-right: 0;
        }
      }
    }
  }
`;

export default React.memo(MyComponent);
