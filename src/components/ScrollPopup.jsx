import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {TimelineLite} from "gsap";
import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import {Img} from "./Img";

const Message = (props,{offset}) => {

    let tl = new TimelineLite();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClose = () => setShow(false);



    useEffect(() => {
        // add event listener to window object when the modal is shown
        if (show) {
            const handleClickOutside = (event) => {
                const modalEl = document.querySelector('.title');
                if (modalEl && !modalEl.contains(event.target)) {
                    setShow(false);
                }
            };
            window.addEventListener('click', handleClickOutside);
            return () => window.removeEventListener('click', handleClickOutside);
        }
    }, [show]);

    return (
        <StyledMessage data-scroll-section offset={offset} className={`title `}
        >
            <Modal show={show} className='faq-modal transparent-modal' onHide={handleClose}>
                <Modal.Body>
                    <div className="announcement">
                        <div onClick={handleClose} className="pop-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27.828" height="27.828" viewBox="0 0 27.828 27.828">
                                <g id="Group_18986" data-name="Group 18986" transform="translate(-1241.837 -61.211)">
                                    <line id="Line_3541" data-name="Line 3541" x2="35.355" transform="translate(1243.251 62.626) rotate(45)" fill="none" stroke="#f0ede3" strokeLinecap="round" stroke-width="2"/>
                                    <line id="Line_12368" data-name="Line 12368" x2="35.355" transform="translate(1243.251 87.626) rotate(-45)" fill="none" stroke="#f0ede3" strokeLinecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>
                        <div className="modal-data">
                            <Col className='announcement__data'>
                                <h3>rgdhfchgn</h3>
                                <p>fxcb fcv</p>
                                <div className="announcement__data__img-wrap">
                                    <Img src={'/'}/>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </StyledMessage>

    )
};


const StyledMessage = styled.div`

  height: 100vh !important;
  .overlay_message {
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    display: none;
  }

  .message_wrapper {
    .hover {
    }
  }


  
  @media (max-width: 767px) {
    right: 15px;
    left: unset;
    bottom: 120px;
  }
  .social_bar{
    .hover_bar{
      svg{
        &:hover{
          background-color: #F0EDE3 !important;
        }
      }
    }
  }
  
  
`;


export default React.memo(Message);