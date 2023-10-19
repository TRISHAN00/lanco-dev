import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Form} from 'react-bootstrap';
import {text} from "../../styles/globalStyleVars";
import Select, {components} from "react-select";
import NewsBox from "../NewsBox";
import Button from "../Button";

const MyComponent = ({data}) => {
    const [activeItem, setActiveItem] = useState('All');
    const [selectType, setSelectType] = useState('All')
    const [filteredData, setFilteredData] = useState(data); // Initialize with all data


    const selectTypeInputRef = useRef();
    const [itemsToShow, setItemsToShow] = useState(6);
    const [isCompleted, setIsCompleted] = useState(false)

    // Handle initial selection when the component mounts
    useEffect(() => {
        handleItemClick('All');
    }, []);
    const handleType = (e) => {
        setSelectType(e);
        // Filter the data when the select dropdown changes
        filterData(e);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        // Filter the data when an item is clicked
        filterData(item);
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
            borderRadius: 0,
            fontWeight: '400',
            color: '#FFF',
            fontSize: 14,
        }),

    };

    const typeas = [
        { value: 'All', label: 'All' },
        ...(Array.isArray(data)
            ? data.map((item) => ({
                value: item?.data?.category_title,
                label: item?.data?.category_title,
            }))
            : [])
    ];


    // Filter out duplicate values based on the "value" property
    const uniqueTypeas = Array.from(new Set(typeas?.map((option) => option.value)))?.map((value) => typeas.find((option) => option.value === value));



    const filterData = (filter) => {
        if (filter === 'All'  ) {
            setFilteredData(data); // Show all data
        } else {
            // Filter the data based on the selected category title
            setFilteredData(data.filter((item) => item?.data?.category_title === filter));
        }
    };

    useEffect(()=>{
        setFilteredData(data)
    },[data])

    const handleLoadMore = () => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 6);
        if (itemsToShow + 6 >= filteredData?.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
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


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the window width when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <StyledFilter>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={'news-filter'}>
                                {
                                    windowWidth > 767 ?
                                        <ul>
                                            {uniqueTypeas.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={`${activeItem === item.value || (activeItem === 'All' && item.value === 'All') ? 'active' : ''}`}
                                                    onClick={() => handleItemClick(item.value)}
                                                >
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul> :
                                        <Form className={'form'}>
                                            <div className="form-group">
                                                <Form.Group controlId="formBasicPhone">
                                                    <Select
                                                        classNamePrefix="filter"
                                                        isSearchable={false}
                                                        ref={selectTypeInputRef}
                                                        options={uniqueTypeas}
                                                        onChange={(e) => handleType(e?.value)}
                                                        placeholder='Type' styles={customStyles}
                                                        // components={{DropdownIndicator}}
                                                    />
                                                </Form.Group>
                                            </div>
                                        </Form>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledFilter>
            <StyledList className={'pt-150 pb-150'}>
                <Container>
                    <Row>
                        {filteredData &&
                            filteredData?.slice(0, itemsToShow)?.map((e, i) => {
                                return (
                                    <Col md={4} key={i}>
                                        <NewsBox data={e} />
                                    </Col>
                                );
                            })}
                        {itemsToShow < filteredData?.length && (
                            <Col md={12}>
                                <div className={'loadmore'} onClick={handleLoadMore}>
                                    <Button
                                        text={'View All'}
                                        background={'#18A354'}
                                        hoverBackground={'#1c1c1c'}
                                    />
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </StyledList>
        </>
    );
};

const StyledFilter = styled.section`
  background-color: #000000;

  .news-filter {
    padding-bottom: 80px;
    padding-top: 80px;

    ul {
      display: flex;
      //border-bottom: 1px solid #ffffff;
      //opacity: 50%;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ffffff;
        opacity: 50%;
        bottom: 0;
        z-index: 0;
      }

      li {
        position: relative;
        padding-right: 60px;
        padding-bottom: 20px;
        padding-left: 20px;

        //&:last-child {
        //  padding-right: 0;
        //}

        &.active {
          /* Add a border and adjust the position */
          border-bottom: none; /* Remove the default border */
          color: #fff;
          &::before {
            content: '';
            position: absolute;
            width: 90%;
            height: 2px;
            border-bottom: 1px solid #fff; /* Add your desired border color here */
            bottom: 0; /* Adjust to position above the ul border */
            z-index: 1; /* Set a lower z-index to position underneath the li content */
            left: 0;
          }
        }
      }
    }

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
`;
const StyledList = styled.section`
  .col-md-4 {
    margin-bottom: 60px;

    &:nth-last-child(3),
    &:nth-last-child(2),
    &:nth-last-child(1)
    {
      margin-bottom: 0; /* Remove margin-bottom for the last row of columns */
    }
  }

  .loadmore {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
`;

export default React.memo(MyComponent);
