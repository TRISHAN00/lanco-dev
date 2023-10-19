import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";

const AboutSection = ({data}) => {


    // missing vision overflow
    const [overflow, setOverflow] = useState(0);
    useEffect(() => {
        if (document.querySelector(".mission-vision__single")) {
            setOverflow(
                document.querySelector(".mission-vision__single")?.clientHeight
            );
            window.addEventListener("resize", () => {
                if (window.innerWidth > 900) {
                    setOverflow(
                        document.querySelector(".mission-vision__single")?.clientHeight
                    );
                }
            });
        }
    }, []);

    return (
        <StyledAboutSection>
            <div
                className="mission-vision">
                <Container>
                    <Row>

                        <Col sm={6}>
                            <div className="mission-vision__single split-up">
                                <h4 className={'split-up'}>{data?.[0]?.data?.title}</h4>
                                <p className={'split-up'}>
                                    {reactHtmlParser(data?.[0]?.data?.description)}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="mission-vision__single split-up">
                                <h4 className={'split-up'}>{data?.[1]?.data?.title}</h4>
                                <p className={'split-up'}>
                                    {reactHtmlParser(data?.[1]?.data?.description)}
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </StyledAboutSection>
    );
};

const StyledAboutSection = styled.section`
  .mission-vision {
    background-color: #000;
    position: relative;
    &__single {
      padding: 40px 40px 80px;
      background-color: #f2f2f2;
      height: 100%;
      h4 {
        font-size: 40px;
        font-weight: 500;
        line-height: 52px;
        margin-bottom: 60px;
        color: #222222;
      }

      p {
        font-size: 18px;
        line-height: 24px;
        color: #222222;
      }
    }
  }
  .mission-vision:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    background: #fff;
  }




  @media (max-width: 768px) {
    .mission-vision {
      background-color: #fff;
      margin-top: 80px;
      .col-sm-6{
        flex-basis: 100%;
        margin-bottom: 20px;
        &:last-child{
         margin-bottom: 0; 
        }
      }
      &__single{
        position: unset;
        padding: 60px 15px 55px;
      }
    }

  }
`;
export default React.memo(AboutSection);
