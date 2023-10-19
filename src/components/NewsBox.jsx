import React from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import {Link} from "react-router-dom";
import moment from "moment";
import reactHtmlParser from "react-html-parser";


const MyComponent = ({data}) => {
    const date = data?.data?.date;

    const imageArr = Array.isArray(data?.images?.list)
        ? data.images.list.filter((item) => item?.thumb === 'on')
        : [];

    return (
        <StyledComponent>
            <div  className="about-section__bottom">
                <div>
                    <div className="about-section__bottom__single p-0">
                        <div className="about-section__bottom__single__inner">
                            <div className="about-section__bottom__single__inner__top">
                                <div className={'top'}>
                                    <p className={'split-up'}>{data?.data?.category_title}</p>
                                    <p className={'split-up'}>{moment(date).format('DD MMM, YYYY')}</p>
                                </div>
                                <div className="about-section__bottom__single__inner__top__icon">
                                    <h4 className={'split-up'}>
                                        {
                                            data?.data?.title
                                        }
                                    </h4>
                                </div>
                            </div>

                            <div className="about-section__bottom__single__inner__img">
                                <div className="about-section__bottom__single__inner__img__inner">
                                    <Img src={imageArr?.[0]?.full_path}/>
                                </div>
                            </div>

                            <div className="about-section__bottom__single__inner__text">
                                {
                                    data?.data?.subtitle &&
                                    <p className={''}>
                                        {reactHtmlParser(data?.data?.subtitle)}
                                    </p>
                                }

                            </div>

                            <div className="about-section__bottom__single__inner__explore">
                                <p><Link to={`/news/${data?.data?.slug}`}>Read More</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .about-section__bottom {
    //margin-top: -50px;
    position: relative;
    padding-right: 0;

    .row {
      margin-left: 0px;
      margin-right: 0px;
    }


    &__single {
      max-width: 100%;
      overflow: hidden;
      background: #1C1C1C;
      cursor: pointer;

      &__inner {
        position: relative;
        padding-top: calc(470 / 370 * 100%);
        //overflow: hidden;
        &__top {
          position: absolute;
          top: 0;
          padding: 30px 40px;
          padding-bottom: 0;
          width: 100%;
          .top{
            display: flex;
            justify-content: space-between;
            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 14px;
              color: #FFFFFF;
            }
          }

          &__icon {
            display: flex;
            align-items: center;
            margin-top: 36px;

            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              color: #FFFFFF;
            }
          }

          h4 {
            color: #fff;
            font-size: 24px;
            line-height: 28px;
            font-weight: 500;
          }
        }


        &__img {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          width: 100%;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(-50%, -50%);

          &__inner {
            position: relative;
            padding-top: calc(235 / 370 * 100%);
            height: 100%;
          }
        }

        &__text {
          position: absolute;
          bottom: 0;
          //left: 30px;
          padding-left: 40px;
          //right: 50px;
          padding-right: 40px;
          height: 0%;
          opacity: 0;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(-50%, -50%);
          //background: rgb(26, 26, 26);
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #fff;
          }
          h3{
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #fff;
          }
        }

        &__explore {
          position: absolute;
          left: 40px;
          bottom: 50px;
          opacity: 0;
          p {
            a {
              color: #fff;
              font-size: 12px;
              font-weight: 500;
              line-height: 18px;
              &:hover {
                color: #fff!important;
              }
            }
          }
        }

        .circle {
          position: absolute;
          left: 30px;
          right: 0;
          top: 0;
          bottom: 0;
          //margin: auto;
          height: 100%;
          width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 1;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);

          svg {
            color: #ffffff;
            font-size: 25px;
            transition: 0.3s cubic-bezier(0.4, 0, 0, 1);

            line#Line_3815 {
              stroke: #2D3691;
            }

            line#Line_3816 {
              stroke: #2D3691;
            }
          }
        }


        .icon {
          position: absolute;
          top: 30px;
          right: 30px;
          z-index: 1;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: rotate(0deg);

          svg {
            li {
              transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
            }
          }
        }

      }

      &:hover {
        .about-section__bottom__single__inner__img {
          height: 0%;
        }

        .about-section__bottom__single__inner__text {
          height: 60%;
          opacity: 1;
        }

        .about-section__bottom__single__inner__explore {
          opacity: 1;
          left: 40px;
          bottom: 50px;
        }

        .about-section__bottom__single__inner {
          &:after {
            height: 0;
          }

          .icon {
            transform: rotate(-45deg);

            svg {
              line {
                stroke: #fff;
                fill: #fff;
              }
            }
          }

          span {
            top: -10px;
            opacity: 0;
          }

          h4 {
            color: #fff !important;
          }

          p {
            transform: none;
            opacity: 1;
            color: #fff;
          }

          &__img:after {
            opacity: 1;
            transition-delay: 0s;
          }

          .img-top {
            transform: translateY(-20px);
            opacity: 0;
          }
          
        }

      }
    }
  }
`;

export default React.memo(MyComponent);
