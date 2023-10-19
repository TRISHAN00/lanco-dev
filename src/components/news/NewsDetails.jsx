import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Video from "../../components/Video";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    YoutubeShareButton,
} from "react-share";
import {Img} from "../Img";
import RelatedNews from "./RelatedNews";
import reactHtmlParser from "react-html-parser";
import moment from "moment/moment";

const MyComponent = ({data}) => {

    console.log(data)
    const product_title = 'News Details';

    let [shareUrl, setShareUrl] = useState('')

    let shareButtonClickM = useRef()
    let shareButtonContentM = useRef()


    useEffect(() => {
        setShareUrl(window.location.href)
    }, [shareUrl])

    useEffect(() => {
        shareButtonClickM.current.addEventListener('click', () => {
            shareButtonContentM.current.classList.toggle('open')
        })

        window.addEventListener('click', (e) => {
            if (shareButtonContentM?.current?.classList.contains('open')) {
                if (!e.target.matches('.social-vertical, .social-vertical img')) {
                    shareButtonContentM?.current.classList.remove('open')
                }
            }

        })


    }, [shareButtonContentM])


    return (
        <StyledComponent>
            <section className="case_study_detail pb-150">
                <Container>
                    <Row>
                        <Col md={{span: 10,offset:2}}>
                            <div className="header">
                                <p>
                                    <span>{reactHtmlParser(data?.data?.category_title)}</span>
                                    <span>•</span>
                                    {moment(data?.data?.date).format('DD MMM, YYYY')}
                                </p>
                                <h2>{reactHtmlParser(data?.data?.title)}</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className={'p-0'}>
                    <div className="case_study_image_wrapper">
                        <Img src={data?.images?.list?.filter(image => image?.banner === 'on')?.[0]?.full_path}/>
                    </div>
                </Container>

                <Container className={'position_relative'}>
                    <Row>
                        <Col md={{span: 10,offset:2}}>
                            <div className="blog_details">
                                {reactHtmlParser(data?.data?.subtitle)}
                                {reactHtmlParser(data?.data?.description)}
                                <img src={'/'} alt=""/>
                                <br/>
                                <br/>
                                <div className="flex">
                                    <img src={data?.images?.list?.filter(image => image?.short_title === 'left')?.[0]?.full_path} alt=""/>
                                    <img src={data?.images?.list?.filter(image => image?.short_title === 'right')?.[0]?.full_path} alt=""/>
                                </div>
                                <br/>
                                <br/>
                                {reactHtmlParser(data?.data?.body)}
                                <br/><br/>
                                {
                                    data?.data?.link ?
                                        <Video data={data}/>
                                        : ''
                                }

                            </div>
                        </Col>

                        <div className="social-vertical" ref={shareButtonClickM}>
                            <p>Share:</p>
                            <div className="clearfix"></div>
                            <div className="social-lists" ref={shareButtonContentM}>
                                <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true}/></FacebookShareButton>
                                <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
                                <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>
                            </div>

                        </div>

                    </Row>

                </Container>

            </section>


        </StyledComponent>
    );
};

const StyledComponent = styled.section`
 
  .position_relative{
    position: relative;
  }
 
  .case_study_detail {
    padding-top: 200px;

    .header {
      margin-bottom: 40px;
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #656565;
        opacity: 50%;
        span:nth-of-type(2){
          margin: 0 20px;
        }
      }
      h2{
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        color: #000000;
        margin: 0;
      }
    }

    .case_study_image_wrapper{
      position: relative;
      padding-top: 70vh;
      //margin-bottom: 120px;
    }
    
    .blog_details{
      padding-top: 80px;
      h3{
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        color: #535353;
        margin-bottom: 60px;
      }
      h5{
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: #535353;
      }
      
      h4{
        font-size: 18px;
        font-weight: 400;
        line-height: 24;
        color: #535353;
      }
      p{
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        color: #535353;
      }
      .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;

        img {
          flex: 0 0 calc(50% - 15px);
          display: block;
          max-width: calc(50% - 15px);
          @media (max-width: 767px) {
            flex: 0 0 calc(50% - 7.5px);
            display: block;
            max-width: calc(50% - 7.5px);
          }
        }
      }
    }
  }
  
  .video_body{
    .container{
      padding: 0 !important;
    }
  }

  .social-vertical {
    top: 80px;
    position: absolute;
    left: 30px;

    p {
      margin-bottom: 20px;
      color: #4F616B;
    }
    
 

    @media (min-width: 1550px) {
      top: 15.3% !important;
    }
    @media (max-width: 767px) {
      top: unset !important;
      position: relative !important;
      left: unset !important;
      padding: 0 15px !important;
      margin-top: 30px;
    }
  }

  .social-lists {
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: flex-start;
    @media (max-width: 767px) {
      flex-direction: row;

    }
    svg {
      height: 30px;
      width: 30px;
      circle{
        fill: transparent;
        //stroke: #D80028;
      }
      path{
        fill: #18A354;
      }
    }

    button {
      margin-bottom: 20px;
      @media (max-width: 767px) {
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 10px;
      }
      &:last-child {
        margin-bottom: 20px;
      }
    }
  }

`;


export default React.memo(MyComponent);
