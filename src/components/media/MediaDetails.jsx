import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import SimpleBar from "simplebar-react";
import Modal from "react-bootstrap/Modal";
import ModalVideo from "react-modal-video";

const MediaDetails = ({data}) => {
    let [open, setOpen] = useState(false);

    let handelOpen = (open, id) => {
        setOpen(open);
        setShow(true)
    };

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleCloseModal = () => {
        setOpen(false);
        handleClose();
    };

    return (
        <StyledComponent className='portfolio-details pt-200 pb-200'>
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="portfolio-details__social">
                            <p>Share:</p>

                            <ul className="portfolio-details__social__social_list">
                                <li>
                                    <a href="https://www.facebook.com/sharer.php?u=slug" target="_blank">
                                        <svg
                                            id="Component_57_1"
                                            data-name="Component 57 – 1"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                        >
                                            <circle
                                                id="Ellipse_447"
                                                data-name="Ellipse 447"
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#E8E8E8"
                                            />
                                            <circle
                                                className="social-hover"
                                                id="Ellipse_448"
                                                data-name="Ellipse 448"
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#E50019"
                                            />
                                            <path
                                                id="Path_2115"
                                                data-name="Path 2115"
                                                d="M1206.12,104.34l.406-2.652h-2.544v-1.72a1.325,1.325,0,0,1,1.495-1.432h1.157V96.278a14.1,14.1,0,0,0-2.053-.179,3.237,3.237,0,0,0-3.465,3.569v2.021h-2.329v2.652h2.329v6.409h2.866V104.34Z"
                                                transform="translate(-1187.787 -88.099)"
                                                fill="#323232"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/intent/tweet?url=slug" target="_blank">
                                        <svg
                                            id="Component_58_1"
                                            data-name="Component 58 – 1"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                        >
                                            <circle id="Ellipse_93" data-name="Ellipse 93" cx="15" cy="15" r="15"
                                                    fill="#E8E8E8"/>
                                            <circle
                                                className="social-hover"
                                                id="Ellipse_94"
                                                data-name="Ellipse 94"
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#E50019"
                                            />
                                            <path
                                                id="Path_2113"
                                                data-name="Path 2113"
                                                d="M1237.574,104.23a5.331,5.331,0,0,1-1.306.372c.21-.035.518-.415.642-.569a2.4,2.4,0,0,0,.433-.79c.011-.023.02-.051,0-.068a.075.075,0,0,0-.069.006,6.668,6.668,0,0,1-1.548.592.1.1,0,0,1-.107-.029,1.258,1.258,0,0,0-.135-.138,2.736,2.736,0,0,0-.75-.459,2.609,2.609,0,0,0-1.15-.185,2.745,2.745,0,0,0-1.091.308,2.817,2.817,0,0,0-.88.719,2.7,2.7,0,0,0-.525,1.053,2.844,2.844,0,0,0-.028,1.111c.008.062,0,.071-.053.062a8.268,8.268,0,0,1-5.319-2.707c-.062-.071-.1-.071-.147.005a2.7,2.7,0,0,0,.46,3.186c.1.1.212.2.327.288a2.711,2.711,0,0,1-1.026-.288c-.062-.039-.094-.017-.1.054a1.62,1.62,0,0,0,.017.3,2.727,2.727,0,0,0,1.681,2.174,1.583,1.583,0,0,0,.341.1,3.04,3.04,0,0,1-1.007.031c-.073-.014-.1.023-.073.093a2.831,2.831,0,0,0,2.115,1.771c.1.017.192.017.288.039-.006.009-.012.009-.017.017a3.347,3.347,0,0,1-1.444.765,5.171,5.171,0,0,1-2.194.281c-.118-.017-.143-.016-.174,0s0,.048.034.079c.15.1.3.186.457.271a7.231,7.231,0,0,0,1.466.586,7.811,7.811,0,0,0,7.582-1.773,7.956,7.956,0,0,0,2.1-5.8c0-.083.1-.129.157-.174a5.128,5.128,0,0,0,1.032-1.073.327.327,0,0,0,.068-.205v-.011C1237.627,104.2,1237.626,104.207,1237.574,104.23Z"
                                                transform="translate(-1215.718 -92.957)"
                                                fill="#323232"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.linkedin.com/shareArticle?mini=true&url=slug" target="_blank">
                                        <svg
                                            id="Component_59_1"
                                            data-name="Component 59 – 1"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                        >
                                            <circle id="Ellipse_98" data-name="Ellipse 98" cx="15" cy="15" r="15"
                                                    fill="#E8E8E8"/>
                                            <circle
                                                className="social-hover"
                                                id="Ellipse_99"
                                                data-name="Ellipse 99"
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#E50019"
                                            />
                                            <g id="Group_1419" data-name="Group 1419" transform="translate(8 8)">
                                                <path
                                                    id="Path_2109"
                                                    data-name="Path 2109"
                                                    d="M1095.77,105.945a.854.854,0,1,0,.853.854A.854.854,0,0,0,1095.77,105.945Z"
                                                    transform="translate(-1084.635 -103.346)"
                                                    fill="#323232"
                                                />
                                                <path
                                                    id="Path_2110"
                                                    data-name="Path 2110"
                                                    d="M1082.64,108.605a3.586,3.586,0,1,0,3.586,3.586A3.59,3.59,0,0,0,1082.64,108.605Zm0,5.882a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,1082.64,114.488Z"
                                                    transform="translate(-1075.301 -104.911)"
                                                    fill="#323232"
                                                />
                                                <path
                                                    id="Path_2111"
                                                    data-name="Path 2111"
                                                    d="M1080.119,114.188h-5.813a4.379,4.379,0,0,1-4.374-4.374V104a4.378,4.378,0,0,1,4.374-4.373h5.813a4.378,4.378,0,0,1,4.374,4.373v5.813A4.379,4.379,0,0,1,1080.119,114.188ZM1074.306,101a3.007,3.007,0,0,0-3,3v5.813a3.007,3.007,0,0,0,3,3h5.813a3.007,3.007,0,0,0,3-3V104a3.007,3.007,0,0,0-3-3Z"
                                                    transform="translate(-1069.932 -99.628)"
                                                    fill="#323232"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                {/*<li>
                                    <a href="facebook.com" target="_blank">
                                        <svg
                                            id="Component_60_1"
                                            data-name="Component 60 – 1"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                        >
                                            <circle
                                                className="social-hover"
                                                id="Ellipse_100"
                                                data-name="Ellipse 100"
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#E50019"
                                            />
                                            <path
                                                id="Path_2114"
                                                data-name="Path 2114"
                                                d="M1146.9,113.13a2.813,2.813,0,0,0-2.813-2.813h-7.195a2.813,2.813,0,0,0-2.813,2.813v3.348a2.813,2.813,0,0,0,2.813,2.813h7.195a2.813,2.813,0,0,0,2.813-2.813Zm-4.231,1.925-3.226,1.6c-.126.068-.556-.023-.556-.167v-3.276c0-.146.433-.237.56-.165l3.089,1.68C1142.661,114.8,1142.8,114.985,1142.666,115.056Z"
                                                transform="translate(-1125.075 -99.317)"
                                                fill="#323232"
                                            />
                                        </svg>
                                    </a>
                                </li>*/}
                            </ul>
                        </div>
                    </Col>

                    <Col md={{span:9, offset:1}} className={'left-content'}>
                        <Row className={'upper-text'}>
                            <Col md={12}>
                                <h4>News & Events Title</h4>
                                <ul className={'info'}>
                                    <li>Blog</li>
                                    <li>January</li>
                                </ul>

                                <div className="img-wrapper">
                                    <Img src={'/'}/>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                    recusandae alias error harum maxime adipisci amet laborum.</p>

                                <div className="img-wrapper mb-10">
                                    <Img  src={'/'}/>
                                </div>

                                {/*<h5>[Excerpt] In today's fast-paced and interconnected world, embracing diversity has become more than just a buzzword—it has become a strategic imperative for success. </h5>*/}


                                {/*{data?.quotes && reactHtmlParser(data?.quotes)}*/}
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi</p>

                            </Col>

                            <Col md={12} onClick={() => handelOpen(true, '5h6ed05')} key={0} className='video'>
                                <div className='video-wrapper'>
                                    <Img src={'/'}/>

                                    <div className="video-icon">
                                        <div className="icon-inner">
                                            <svg width="60" height="60" viewBox="0 0 60 60">
                                                <g id="Group_14000" data-name="Group 14000" transform="translate(0.49)">
                                                    <g
                                                        id="Ellipse_381"
                                                        data-name="Ellipse 381"
                                                        transform="translate(-0.49)"
                                                        fill="#FFFFFF"
                                                        stroke="none"
                                                        stroke-width="1"
                                                    >
                                                        <circle cx="30" cy="30" r="30" stroke="none"></circle>
                                                        <circle className="video-hover" cx="30" cy="30" r="30.5"
                                                                fill="#E50019"></circle>
                                                    </g>
                                                    <path
                                                        id="Polygon_2"
                                                        data-name="Polygon 2"
                                                        d="M8.143,1.429a1,1,0,0,1,1.715,0l7.234,12.056A1,1,0,0,1,16.234,15H1.766a1,1,0,0,1-.857-1.514Z"
                                                        transform="translate(39.51 21) rotate(90)"
                                                        fill="#E50019"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </Col>

                            {data?.lower_image && data?.lower_image &&
                                <Col md={12}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                        optio, eaque rerum!</p>

                                    <div className="img-wrapper">
                                        <Img  src={'/'}/>
                                    </div>
                                </Col>
                            }

                            <Col xs={6}>
                                <div className="img-wrapper img-half">
                                    <Img  src={'/'}/>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div className="img-wrapper img-half">
                                    <Img  src={'/'}/>
                                </div>
                            </Col>

                            <Col md={12}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum!</p>
                            </Col>

                        </Row>

                    </Col>

                </Row>
            </Container>

            <Modal
                show={show}
                // item={item}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                className="gph_modal modal_video_popup popup-version-one"
                dialogClassName="custom-modal-dialog"
            >
                <SimpleBar className="main_scroll " style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row className={'for-close'}>
                                <div onClick={handleCloseModal} className="modal-close ">

                                    <svg id="Button_-_Close" data-name="Button - Close" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                        <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#3c3c3b" stroke-width="1" opacity="0.3">
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#3c3c3b" stroke-width="1" stroke-dasharray="0 142" opacity={'0'}>
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Group_18979" data-name="Group 18979" transform="translate(-3149 -104.5)">
                                            <line id="Line_4" data-name="Line 4" x2="8" y2="8" transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_3877" data-name="Line 3877" x1="8" y2="8" transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                </div>

                            </Row>
                        </Container>
                        <Container>
                            <Row>


                                <div className="modal-data d-flex">
                                    <ModalVideo channel='youtube' isOpen={open}
                                                videoId={'wT3cpXL7HiE'}
                                                onClose={handleCloseModal}/>

                                </div>
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledComponent>


    );
};

const StyledComponent = styled.section`
  background: #FFFFFF;

  @media (max-width: 767px) {
    padding-top: 100px !important;
  }

  .left-content {
    border-bottom: 1px solid #323232;
    padding-bottom: 40px;
  }

  .img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .upper-text {
    @media (max-width: 767px) {
      padding-top: 60px;
    }

    .mb-10 {
      margin-bottom: 10px !important;
    }

    p {
      margin-bottom: 40px;
    }

    h4 {
      margin-bottom: 20px;
    }

    .info {
      display: flex;
      margin-bottom: 60px;

      li {
        display: inline-block;
        position: relative;
        padding-right: 20px;
        margin-right: 20px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 300;
        color: #C9C9C9;

        &:after {
          margin: 0;
          height: calc(100% - 5px);
          width: 1px;
          background: #707070;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          content: '';
        }

        &:nth-last-child(1) {
          margin-right: 0px;

          &:after {
            content: unset;
          }
        }
      }
    }

    .img-wrapper {
      position: relative;
      padding-top: calc(432 / 870 * 100%);
      margin-bottom: 40px;

      &.img-half {
        padding-top: calc(250 / 420 * 100%);
      }
    }

    h5 {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    .opacity-50 {
      opacity: 50%;
    }

    .list {
      margin-bottom: 40px;

      li {
        position: relative;
        padding: 15px 0 15px 20px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 300;
        color: rgba(50, 50, 50, 0.8);
        border-bottom: 1px solid #323232;
        counter-increment: count;

        &:after {
          content: '';
          position: absolute;
          height: 10px;
          width: 10px;
          padding: 3.4px 0px 0px 9px;
          margin: 20px 0;
          font-size: 12px;
          line-height: 20px;
          font-weight: 500;
          border: none;
          background-color: #E50019;
          border-radius: 50%;
          //color: #070524;
          top: 0;
          left: 0;
        }

        &:nth-child(1) {
          padding-top: 0;

          &:after {
            margin-top: 5px;
          }
        }

        &:nth-last-child(1) {
          padding-bottom: 0;
          border-bottom: 0;

        }
      }
    }

    table {
      margin-bottom: 40px;

      tr {
        border-bottom: 1px solid rgba(50, 50, 50, 0.2);


        &:nth-child(1) {
          border-bottom: 1px solid rgba(50, 50, 50, 1);
        }

        &:nth-last-child(1) {
          border-bottom: 0;

          td {
            padding-bottom: 0;
          }
        }

        th {
          font-size: 16px;
          line-height: 20px;
          font-weight: 600;
          color: #323232;
          padding: 0 0 20px 0;
        }

        td {
          font-size: 16px;
          line-height: 24px;
          padding: 20px 0;
        }
      }
    }

    blockquote {
      font-size: 20px;
      line-height: 24px;
      font-weight: 300;
      margin-bottom: 20px;
      padding-left: 20px;
      color: #323232;
      border-left: 4px solid #E50019;
    }

  }

  .video {
    .video-wrapper {
      position: relative;
      overflow: hidden;
      padding-top: calc(520 / 870 * 100%);
      margin: 0 0 40px 0;
      cursor: pointer;

      .video-icon {
        overflow: unset !important;
        position: absolute;
        z-index: 8;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: fit-content;
        height: fit-content;
        margin: auto;

        svg {
          overflow: hidden;
          border-radius: 50%;

          .video-hover {
            cx: -90px;
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
          }

          path {
            transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
          }
        }
      }

      &:hover {
        .video-icon {
          svg {
            .video-hover {
              cx: 30px;
              opacity: 1;
              transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            }

            path {
              fill: #fff;
              transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            }
          }
        }
      }
    }
  }

  .portfolio-details__social {
    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    //position: sticky;
    //top: 100px;

    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
      color: #323232;
      margin-bottom: 20px;
    }

    &__social_list {
      display: flex;
      //justify-content: flex-end;
      //align-items: flex-start;
      //flex-direction: column;

      li {
        margin: 0 20px 0 0;

        &:last-child {
          margin-right: 0;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.6s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          border-radius: 50%;
          background: #E8E8E8;
          overflow: hidden;

          svg {
            path {
              transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            }

            .social-hover {
              cx: -15px;
              opacity: 0;
              transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            }
          }

          &:hover {
            svg {
              path {
                fill: #ffffff;
                transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
              }

              .social-hover {
                cx: 15px;
                opacity: 1;
                transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);
              }
            }
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      //border-bottom: 1px solid #000000;
      padding: 20px 0;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: -15px;
        right: -15px;
        bottom: 0;
        height: 1px;
        background: #000000;
      }

      p {
        margin: 0 20px 0 0;
      }
    }
  }


`;

export default React.memo(MediaDetails);
