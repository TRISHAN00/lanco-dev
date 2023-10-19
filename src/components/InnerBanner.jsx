import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";

const InnerBanner = ({img, text, title, imgMob, uppercase}) => {
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
        <StyledInnerBanner uppercase={uppercase} className='InnerBanner'>
            {
                windowWidth > 767 ?
                    <Img banner={true} src={img ? img : '/images/dynamic/about/about.jpg'}/>
                    :
                    <Img banner={true} src={imgMob ? imgMob : '/images/dynamic/about/about_mobile.jpg'}/>
            }

            <Container>
               <Row>
                   <Col md={{offset:6, span:6}} className={'split-up'}>
                       <h3>{reactHtmlParser(title)}</h3>
                   </Col>
               </Row>
            </Container>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(550 / 1366 * 100%);
  position: relative;
  .container {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 60px;
    z-index: 2;
  }

  h3 {
    color: #F9F9F9;
    z-index: 2;
    text-transform: ${props => props.uppercase ?  "uppercase" : ""};;
  }
  @media (min-width: 767px) {
    .title {
      width: 50%;
    }
  }

  @media (max-width: 767px) {
    //padding-top: 0;
    padding-top: calc(550 / 375 * 100%);
    .container {
      bottom: 40px;
    }
    

    h3 {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

export default React.memo(InnerBanner);
