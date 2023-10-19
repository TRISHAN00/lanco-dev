import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Img} from "../Img";
import {Col, Container, Row} from "react-bootstrap";
import Title from "../Title";
import reactHtmlParser from "react-html-parser";
import VisibilitySensor from "react-visibility-sensor";
import SubTitle from "../SubTitle";
import {Parallax} from "react-scroll-parallax";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const InnerBanner = ({img, text, title, data}) => {
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
    useEffect(() => {
        // Check if the device width is greater than or equal to 767 pixels (not a mobile device)
        if (window.innerWidth >= 767) {
            const textContainer = document.querySelector('.right-scroll');
            const textcont = document.querySelector('.left-scroll');

            gsap.to(textContainer, {
                x: '-=250', // Scroll 250 pixels to the left
                scrollTrigger: {
                    trigger: '.right-scroll-class',
                    start: 'top center', // Start animation when the text container is at the center of the viewport
                    end: 'bottom center', // End animation when the text container is at the center of the viewport
                    scrub: true,
                },
            });

            gsap.to(textcont, {
                x: '+=250', // Scroll 250 pixels to the left
                scrollTrigger: {
                    trigger: '.left-scroll-class',
                    start: 'top left', // Start animation when the text container is at the top left of the viewport
                    end: 'bottom center', // End animation when the text container is at the center of the viewport
                    scrub: true,
                },
            });
        }
    }, [data]);


    return (
        <StyledInnerBanner className='InnerBanner' >
            {
                windowWidth > 767 ?
                    <Img banner={true} src={data?.images?.list?.filter(image => image.desktop === 'on')?.[0]?.full_path}/>
                    :
                    <Img banner={true} src={data?.images?.list?.filter(image => image.mobile === 'on')?.[0]?.full_path}/>
            }

            <Container className={'text-container'}>
                <Row>
                    <Col md={{span:11, offset: 1}}>
                        {
                            data?.section_data?.subtitle && data?.section_data?.short_desc ?
                                <div className={'titles'}>
                                    <h2 className={'split-up right-scroll'}>{reactHtmlParser(data?.section_data?.subtitle)}</h2>
                                    <h2 className={'split-up left-scroll'}>{reactHtmlParser(data?.section_data?.short_desc)}</h2>
                                </div>
                                : ''
                        }

                    </Col>
                </Row>
            </Container>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(800 / 1366 * 100%);
  position: relative;
  .container {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 60px;
    z-index: 2;
  }

.titles{
  width: 100%;
  margin-bottom: 115px;
}
  p{
    color: #ffffff;
  }
  h2 {
    position: relative;
    width: 100%;
    color: #F9F9F9;
    z-index: 2;
  }
  h2:last-child{
    margin-left: 100px;
  }
  @media (min-width: 767px) {
    .title {
      width: 50%;
    }
  }

  @media (max-width: 767px) {
    //padding-top: 0;
    padding-top: calc(380 / 375 * 100%);
    .container {
      bottom: 40px;
    }

    .titles{
      margin-bottom: 0;
    }

    h3 {
      font-size: 50px;
      line-height: 50px;
    }

    p{
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      margin-bottom: 35px;
    }
    h2 {
      font-size: 60px;
      line-height: 60px;
      font-weight: 500;
      width: 100%;
      color: #F9F9F9;
      z-index: 2;
    }
    h2:last-child{
      margin-left: 67px;
    }
  }
`;

export default React.memo(InnerBanner);
