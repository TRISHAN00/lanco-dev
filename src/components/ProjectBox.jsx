import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "./Img";
import {Link} from "react-router-dom";

const MyComponent = ({soldout, data}) => {


    return (
        <div className="project-box" soldout={data?.product_data?.is_sold==='1' ? soldout : ''}>
            <Link to={`/project/${data?.product_data?.slug}`}>
                <div className="project-box__single">
                    <div className="project-box__single__image  ">
                        <Img src={data?.images?.list?.filter(image => image.thumb === 'on')?.[0]?.full_path} />
                    </div>
                    <div className="project-box__single__text">
                        <h6 className={'split-up'} >{data?.product_data?.title}</h6>

                        <div className={'d-flex align-items-center'}>
                            <p>{data?.product_data?.type}</p>
                            <div className={'dot'}></div>
                            <p>{data?.product_data?.location}</p>
                        </div>

                    </div>
                    {
                        soldout ?
                            <div className="project-box__single__icon">
                                <p>SOLD OUT</p>
                            </div>
                            : ''
                    }
                </div>
            </Link>
        </div>
    );
};

const  StyledProjectList = styled.section`
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

`

export default React.memo(MyComponent);
