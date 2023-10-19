import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Img} from "../Img";
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";

const InnerBanner = ({data}) => {
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
        <StyledInnerBanner className='projectbanner'>
            {
                windowWidth > 767 ?
                    <Img banner={true} src={data?.[0]?.images?.filter(image => image?.desktop === 'on')?.[0]?.full_path}/>
                    :
                    <Img banner={true} src={data?.[0]?.images?.filter(image => image?.mobile === 'on')?.[0]?.full_path}/>
            }

            <Container>
                <Row>
                    <Col md={{offset:6, span:6}}>
                        <h3 className={'split-up'}>{reactHtmlParser(data?.[0]?.data?.title)}</h3>
                        {reactHtmlParser(data?.[0]?.data?.description)}
                    </Col>
                </Row>
            </Container>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(550 / 1366 * 100%);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
    left: 0;
    top: 0;
  }
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
  }
  ul{
    margin-top: 15px;
    display: flex;
    align-items: center;
    li{
      display: flex;
      align-items: center;
      margin-right: 30px;
      &:last-child{
        margin-right: 0;
      }
      p{
        margin-bottom: 0;
        margin-left: 15px;
        font-size: 14px;
        line-height: 24px;
        color: #fff;
      }
    }
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
      left: 25px;
      bottom: 40px;
    }


    h3 {
      font-size: 50px;
      line-height: 50px;
    }
    
  }
  
  @media(max-width: 1198px){
    ul{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
`;

export default React.memo(InnerBanner);
