import React, { useRef, useState} from 'react';
import styled from 'styled-components';
import {TimelineLite} from "gsap";
import {useDispatch} from "react-redux";
import {Col, Modal} from "react-bootstrap";
import EmiCalculator from "./EmiCalculator";

const Message = (props,{offset}) => {

    let tl = new TimelineLite();
    let tl2 = new TimelineLite();
    const searchClickRef = useRef()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [winWidth, setWinWidth] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <StyledMessage data-scroll-section offset={offset} className={`title `}
        >
            <div className={'message_wrapper'} onClick={handleShow}>
                <div id={'click_message'}   className="hover social_bar">
                    <div className="overlay_message"></div>
                    <div className="hover_bar">
                        <svg id="Untitled-1-01" xmlns="http://www.w3.org/2000/svg" width="40" height="39.996" viewBox="0 0 40 39.996">
                            <path id="Path_9576" data-name="Path 9576" d="M184.77,366.537a2.629,2.629,0,0,1,1.416,0Z" transform="translate(-165.479 -328.181)" fill="#1c1c1c"/>
                            <path id="Path_9577" data-name="Path 9577" d="M251.594,95.761h3.2c.584,0,.931.3.946.8a.833.833,0,0,1-.927.869c-1.834.009-3.669,0-5.5,0-.325,0-.65.008-.975,0-.593-.019-.94-.354-.927-.871.016-.5.366-.8.947-.8Z" transform="translate(-221.576 -85.762)" fill="#1c1c1c"/>
                            <path id="Path_9578" data-name="Path 9578" d="M63.67,261.043a1.01,1.01,0,0,1,.325-.658c.522-.514,1.014-1.049,1.553-1.539.279-.255.231-.4-.016-.626-.522-.489-1.02-1-1.522-1.513a.814.814,0,0,1-.065-1.265.8.8,0,0,1,1.238.08c.548.537,1.1,1.075,1.627,1.629.169.175.261.173.428,0,.55-.571,1.11-1.135,1.684-1.682a.834.834,0,1,1,1.139,1.215c-.542.545-1.079,1.094-1.632,1.626-.179.172-.2.271-.006.456.565.538,1.115,1.092,1.656,1.655a.835.835,0,0,1-.37,1.439.821.821,0,0,1-.835-.287c-.544-.545-1.1-1.081-1.619-1.636-.185-.194-.284-.171-.456.007-.551.572-1.115,1.13-1.683,1.685a.767.767,0,0,1-.928.175A.887.887,0,0,1,63.67,261.043Z" transform="translate(-57.022 -228.543)" fill="#1c1c1c"/>
                            <path id="Path_9579" data-name="Path 9579" d="M251.569,256.943c-1.067,0-2.135.005-3.2,0a.84.84,0,0,1-.931-.94.83.83,0,0,1,.886-.754q3.261-.009,6.521,0a.851.851,0,1,1,.006,1.7C253.754,256.949,252.662,256.943,251.569,256.943Z" transform="translate(-221.597 -228.596)" fill="#1c1c1c"/>
                            <path id="Path_9580" data-name="Path 9580" d="M251.567,304.82H248.4c-.626,0-1-.322-1.005-.842s.374-.858.986-.858h6.369c.612,0,.991.336.985.859s-.383.835-1.005.841Q253.149,304.822,251.567,304.82Z" transform="translate(-221.569 -271.472)" fill="#1c1c1c"/>
                            <path id="Path_9581" data-name="Path 9581" d="M40,4.108A4.094,4.094,0,0,0,36.483.069c-.029,0-.052-.045-.078-.069H3.437C3.28.153,3.06.126,2.873.2A4.173,4.173,0,0,0,.134,3.1c-.029.113.009.268-.134.34V36.558c.139.136.119.327.169.493a4.176,4.176,0,0,0,3.938,2.942Q20,40,35.9,39.993A4.128,4.128,0,0,0,40,35.9Q40,20,40,4.108ZM20.353,1.647A2.521,2.521,0,0,0,20,1.622,2.52,2.52,0,0,1,20.353,1.647Zm-.536-.018a2.724,2.724,0,0,0-.522.091h0a2.724,2.724,0,0,1,.522-.091ZM1.639,19.29v1.416c0,.044.006.089.008.133a.707.707,0,0,0-.008-.133M19.107,38.344c-.142-.008-.284-.023-.426-.023H4.395a2.512,2.512,0,0,1-2.552-1.6,3.223,3.223,0,0,1-.163-1.189V21.322c0-.142-.016-.284-.024-.426h0a.8.8,0,0,1,.418-.045q8.353,0,16.705-.008c.3,0,.381.074.381.38q-.016,8.353-.009,16.705A.855.855,0,0,1,19.107,38.344Zm.046-36.2q0,8.313.006,16.627c0,.3-.069.382-.378.381q-8.353-.015-16.705-.008a.779.779,0,0,1-.418-.045c.008-.142.024-.284.024-.426V4.4A2.488,2.488,0,0,1,3.533,1.76a3.036,3.036,0,0,1,.811-.082H18.857c.1,0,.209-.028.3.041,0,.143-.009.285-.009.428ZM38.317,35.631a2.484,2.484,0,0,1-1.89,2.61,3.715,3.715,0,0,1-.929.076H21.322c-.142,0-.284.015-.426.023l-.189.013H19.291a2.629,2.629,0,0,1,1.416,0l.188-.013a.7.7,0,0,1-.045-.382q0-8.372-.008-16.745c0-.313.09-.376.385-.375q8.314.013,16.629.006c.143,0,.286-.007.429-.011a3.214,3.214,0,0,1,.035.345Q38.324,28.406,38.317,35.631ZM38.276,19.29h0c.009.033.017.066.024.1a.616.616,0,0,0-.021-.1Zm0-.131c-.143,0-.286-.011-.428-.011q-8.3,0-16.592.008c-.349,0-.418-.087-.418-.424q.017-8.294.007-16.59c0-.143-.007-.286-.011-.429a.765.765,0,0,1,.384-.035H35.585a2.486,2.486,0,0,1,2.651,1.886,3.183,3.183,0,0,1,.078.773q.008,7.26,0,14.523c0,.1.034.208-.034.3Z" fill="#1c1c1c"/>
                            <path id="Path_9582" data-name="Path 9582" d="M64.185,67.843a.805.805,0,0,0-.882-.786c-.69,0-1.38-.021-2.068.007-.325.014-.379-.1-.371-.389.02-.663.01-1.327,0-1.99a.87.87,0,0,0-.835-.976.883.883,0,0,0-.861.991c0,.677-.017,1.357.006,2.03.01.286-.084.34-.347.333-.715-.019-1.431-.013-2.147,0a.8.8,0,0,0-.826.761.819.819,0,0,0,.881.908c.7.018,1.405.014,2.108,0,.245,0,.338.048.33.313-.021.7-.015,1.405,0,2.107a.842.842,0,0,0,.94.9.858.858,0,0,0,.76-.923c.021-.8-.037-1.608.031-2.412.818,0,1.636.024,2.453,0A.8.8,0,0,0,64.185,67.843ZM60.8,68.7h0l.1.016h0Z" transform="translate(-50.02 -57.057)" fill="#1c1c1c"/>
                        </svg>
                        <p>Calculator</p>
                    </div>
                </div>
            </div>
            <Modal show={show} className='calculator-modal transparent-modal'>
                <Modal.Body>
                    <div className="calculator">
                        <div onClick={handleClose} className="pop-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27.828" height="27.828" viewBox="0 0 27.828 27.828">
                                <g id="Group_18986" data-name="Group 18986" transform="translate(-1241.837 -61.211)">
                                    <line id="Line_3541" data-name="Line 3541" x2="35.355" transform="translate(1243.251 62.626) rotate(45)" fill="none" stroke="#222222" strokeLinecap="round" stroke-width="2"/>
                                    <line id="Line_12368" data-name="Line 12368" x2="35.355" transform="translate(1243.251 87.626) rotate(-45)" fill="none" stroke="#222222" strokeLinecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>
                        <div className="modal-data">
                            <Col md={12} className='calculator__data'>
                                <EmiCalculator/>
                            </Col>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </StyledMessage>

    )
};


const StyledMessage = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 990;
 

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
    display: flex;
    flex-direction: column;
    align-items: center;
    .hover {
      background-color: #3BECC7;
      height: 60px;
      width: 98px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: start;
      border: none;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: 0.5s ease-in-out;
      position: relative;
      
      &:after {
        display: none;
      }
      .hover_bar {
        visibility: visible;
        opacity: 1;
        transition: 0.5s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 20px;
        p{
          color: #222222;
          opacity: 0;
          transition: 0.5s ease-in-out;
        }
        svg {
          margin-right: 20px;
          transition: background-color 0.5s ease-in-out;
        }
      }
      &:hover{
        width: 190px;
        .hover_bar{
          p{
            opacity: 1;
            transition: 0.7s ease-in-out;
          }
        }
      }
      }
  }


  
  @media (max-width: 767px) {
    right: 0px;
    left: unset;
    bottom: 20px;
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




export default Message;














