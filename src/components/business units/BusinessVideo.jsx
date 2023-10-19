import React, {useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css'

const Video = ({offset, padding, data}) => {
    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };

    return (
        <StyledVideo data-scroll-container offset={offset}
                     className={`video_body ${padding ? padding : 'pb-150 pt-150'} `}>
            <ModalVideo channel='youtube' isOpen={open} videoId={data?.section_data?.short_desc} onClose={() => handelOpen(false, '')}/>

            <Container>
                <Row>
                    <Col md={{span: 12}}>
                        <div onClick={() => handelOpen(true, `c3cWkjcO0EE`)} className="image_video_wrap">
                            <Img src={data?.images?.list?.[0]?.full_path}/>
                            <div className="play">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                    <circle id="Ellipse_395" data-name="Ellipse 395" cx="50" cy="50" r="50"
                                            fill="#fff"/>
                                    <circle id="Ellipse_396" data-name="Ellipse 395" cx="50" cy="50" r="0"
                                            fill="#18A354"/>
                                    <path id="Polygon_1" data-name="Polygon 1" d="M10,0,20,15H0Z"
                                          transform="translate(58.5 40) rotate(90)" fill="#18A354"/>
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledVideo>

    )
};


const StyledVideo = styled.section`
  position: relative;
  background: #000;
  .modal-video-inner {
    margin-top: 250px;
  }
  @keyframes zoomIt {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      transform: scale(1.09);
    }
    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }

  }

  .container {
    padding-left: ${props => props.offset ? props.offset + 15 + 'px' : ''};
    position: relative;
    z-index: 1;
    @media (max-width: 767px) {
      padding-left: 15px !important;
      padding-right: 15px !important;
      .col-md-12 {
        padding: 0;
      }
    }
  }

  //&:after {
  //  content: '';
  //  background: white;
  //  height: 50vh;
  //  bottom: 0;
  //  left: 0;
  //  right: 0;
  //  z-index: 0;
  //  width: 100%;
  //  position: absolute;
  //  @media (max-width: 767px) {
  //    display: none;
  //  }
  //}


  .image_video_wrap {
    padding-top: calc(620 / 1170 * 100%);
    cursor: pointer;
    overflow: hidden;
    position: relative;

    .play {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      @media (max-width: 767px) {
        height: 50px;
        width: 50px;
        svg {
          height: 50px;
          width: 50px;
        }
      }

      &:before {
        content: '';
        position: absolute;
        height: calc(100% + 30px);
        width: calc(100% + 30px);
        border: none;
        background: rgba(86, 84, 64, 0.5);
        left: -15px;
        top: -15px;
        border-radius: 50%;
        opacity: 0;
        transition: 0.6s all cubic-bezier(0.4, 0, 0, 1);
        z-index: -4;
      }

      &:after {
        content: "";
        z-index: 0;
        //background-color: rgba(30, 92, 149, 0.5);
        overflow: hidden;
        border-radius: 50%;
        transition: 0.6s all cubic-bezier(0.4, 0, 0, 1);
      }

      svg {
        #Ellipse_396, path {
          transition: 0.7s all ease;
        }
      }
    }

    .global-image {
      img {
        transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
        transform: scale(1.01);
      }
    }

    @media (max-width: 767px) {
      padding-top: calc(250 / 375 * 100%);
    }

    &:hover {
      .global-image {
        img {
          transform: scale(1.04);

        }

      }

      .play {
        &:before {
          animation: zoomIt cubic-bezier(0.4, 0, 0, 1) 1;
          animation-duration: 0.9s;
          animation-direction: alternate-reverse;
          animation-iteration-count: infinite;
        }

        &:after {
          opacity: 0;
        }

        svg {
          #Ellipse_396 {
            r: 50;
          }

          path {
            fill: white;
          }
        }

      }
    }

  }
`;


export default React.memo(Video);














