import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styled from "styled-components";

const Popup = ({
                   show,
                   handleClose,
                   no_img,
                   item
               }) => {


    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="gph_modal"
            >
                <Modal.Header closeButton>
                    <Container>
                        <Row>
                            <Col className="header_wrap">
                                <Modal.Title>{'Mr. Mukhtar Ahmed'}</Modal.Title>
                                <div onClick={handleClose} className="close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="21.414"
                                         viewBox="0 0 21.414 21.414">
                                        <g id="Group_13674" data-name="Group 13674"
                                           transform="translate(-1224.793 -42.793)">
                                            <line id="Line_1" data-name="Line 1" x2="28.284"
                                                  transform="translate(1225.5 43.5) rotate(45)" fill="none"
                                                  stroke="#222" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_2" data-name="Line 2" x2="28.284"
                                                  transform="translate(1225.5 63.5) rotate(-45)" fill="none"
                                                  stroke="#222" strokeLinecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <SimpleBar className="main_scroll" style={{height: '90vh'}}>

                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col className="left_col pr-0" md={no_img ? 12 : 6}>
                                    <SimpleBar className="custombar" style={{height: '70vh'}}>

                                        <div className="left_col__content">
                                            {
                                                (() => {
                                                    if (item?.data?.sub_title) {
                                                        return (
                                                            <h3>{item?.data?.sub_title}</h3>

                                                        )
                                                    } else {
                                                        return (
                                                            <h3>{item?.data?.subtitle}</h3>

                                                        )
                                                    }
                                                })()
                                            }
                                            <p className="deg">{'Chairman'}</p>
                                            <p>
                                                Mr. Mukhtar Ahmed is a B. Com (Honors), M. Com from the University of
                                                Chittagong. He started his career as a Senior Officer in 1984 with the
                                                United Commercial Bank Limited.<br/><br/>
                                                Mr. Ahmed has served for 35 years in the banking sector and has gathered
                                                extensive knowledge and experiences in the banking sector. He was at
                                                National Credit and Commerce Bank Limited for 30 years, served in
                                                different capacities and also worked at Pubali Bank Limited, the last
                                                position he held was as the Deputy Managing Director.<br/><br/>Mr. Ahmed
                                                is a widely travelled person who visited many countries of the world in
                                                connection with attending training, workshop, seminar, conference and
                                                Banking Business.<br/><br/>Mr. Ahmed also held the important positions
                                                in
                                                the following social and voluntary organizations:
                                            </p>
                                            <ul>
                                                <li>President of Teknaf Samity Chattogram</li>
                                                <li>Vice President of Bankers’ Club Chattogram</li>
                                                <li>General Secretary of Hishab Bijnan Samity, Chittagong University
                                                </li>
                                                <li>Life Member of Chattogram Ma-O-Shishu Hospital</li>
                                                <li>Life Member of Chattogram Diabetic Association</li>
                                                <li>Life Member Cox’s Bazar Samity</li>
                                                <li>Life Member of Bangladesh Accounting Association</li>
                                                <li>Permanent Member of Chattogram Boat Club</li>
                                                <li>Member of the Chattogram Taxes Bar Association</li>
                                            </ul>
                                        </div>
                                        <br/><br/>
                                    </SimpleBar>
                                </Col>
                                {
                                    (() => {
                                        if (no_img) {

                                        } else {
                                            return (
                                                <Col className="right_col pl-0" md={{span: 5, offset: 1}}>

                                                    <div className="right_col_img">
                                                        <Img src={item?.images?.[0]?.full_path}/>
                                                    </div>
                                                </Col>

                                            )
                                        }

                                    })()
                                }
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledModal>

    )
};


const StyledModal = styled.div`

  .modal-dialog {
    margin: 0;
  }

`;


export default React.memo(Popup);
