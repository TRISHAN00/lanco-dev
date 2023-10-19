import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Img} from "../Img";
import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import Button from "../Button";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import reactHtmlParser from "react-html-parser";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {postForm} from "../../api/redux/home";
import {useDispatch, useSelector} from "react-redux";

const BannerSlider = ({data}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');
    const [slug, setSlug] = useState('')
    const [thumb, setThumb] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setTitle(e?.product_data?.title);
        setDesc(e?.product_data?.slide_desc);
        setLocation(e?.product_data?.location);
        setSlug(e?.product_data?.slug);
        const filteredImages = e?.images?.list?.filter(image => image.thumb === 'on');
        const fullPaths = filteredImages ? filteredImages.map(image => image?.full_path)?.[0] : [];
        setThumb(fullPaths);
    }



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

    const [current, setCurrent] = useState('1')

    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.banner-slider .swiper-pagination-current')) {
                setCurrent(document.querySelector('.banner-slider .swiper-pagination-current').innerHTML)
            }
        }, 200)

    }

    let [offset, setOffset] = useState(90)

    useEffect(() => {
        if (window.innerWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        }
    }, [])

    const dispatch = useDispatch();
    const responseData = useSelector(state => state.home);

    //form Submit
    const {register, handleSubmit ,formState,reset} = useForm({mode: 'all'});


    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const onSubmit = (e) => {

        let api_services = apiEndPoints.PROJECT_FORM;

        var formData = new FormData();
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('form_id', 'project-form');

        if (e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));
            reset();
        }
    };
    let count=0;

    const onError = (errors) => {
        Object.values(errors).forEach((error) => {
            count++;
        });
        if(count>0){
            toast.error('please fill out the correct inputs');
        }
        count=0;
    };
    useEffect(() => {
        if (responseData && responseData?.error !== '') {
            error(responseData?.error)
        }
        if (responseData && responseData?.success !== '') {
            success(responseData?.success)
        }

    }, [responseData])

    return (
        <StyledBanner className="banner-slider" offset={offset}>
            <div>
                <Container>
                    <div className={"navigation"}>
                        <ul className={'arrows'}>
                            <li className={'prev_swipper hover'} id={'prev'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41.207" height="21.414" viewBox="0 0 41.207 21.414">
                                    <g id="Group_5743" data-name="Group 5743" transform="translate(0.707 0.707)">
                                        <line id="Line_59" data-name="Line 59" x1="10" y2="10" fill="none" stroke="#fff"
                                              strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_60" data-name="Line 60" x1="10" y1="10" transform="translate(0 10)"
                                              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_61" data-name="Line 61" x2="40" transform="translate(0 10)" fill="none"
                                              stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    </g>
                                </svg>

                            </li>
                            <li>
                                <span>{current} / {data?.length}</span>
                            </li>
                            <li className={'next_swipper hover'} id={'next'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41.207" height="21.414" viewBox="0 0 41.207 21.414">
                                    <g id="Group_5742" data-name="Group 5742" transform="translate(-1838 688.207)">
                                        <line id="Line_59" data-name="Line 59" x2="10" y2="10" transform="translate(1868.5 -687.5)"
                                              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_60" data-name="Line 60" y1="10" x2="10" transform="translate(1868.5 -677.5)"
                                              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_61" data-name="Line 61" x1="40" transform="translate(1838.5 -677.5)"
                                              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    </g>
                                </svg>

                            </li>
                        </ul>
                    </div>
                </Container>
                {
                    data ?
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation, A11y]}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={false}
                            speed='2000'
                            grabCursor={true}
                            navigation={{
                                prevEl: '#prev',
                                nextEl: '#next',
                            }}
                            pagination={{
                                // el: '.swiper-pagination',
                                type: "fraction",
                            }}
                            // onSlideChange={(s) => handleSliderCurrent()}
                            onSlideChange={(s) => {
                                setCurrent(s.activeIndex + 1); // Update the current slide index directly
                            }}
                        >
                            {
                                data?.length>0 && data?.map((e, index)=>{
                                    return(
                                        <SwiperSlide key={index} >
                                            <div className="banner-slider__single">
                                                {
                                                    windowWidth > 767 ?
                                                        <Img layout={"fill"} src={e?.images?.list?.filter(image => image.slider === 'on')?.[0]?.full_path}/>
                                                        :
                                                        <Img layout={"fill"} src={e?.images?.list?.filter(image => image.mobile === 'on')?.[0]?.full_path}/>
                                                }
                                                <Container>
                                                    <div className={'contents'}>
                                                        <div className={'top-content split-up'}>
                                                            <h4>
                                                                {reactHtmlParser(e?.product_data?.short_desc)}
                                                            </h4>

                                                        </div>
                                                        <div className={'bottom-content'}>
                                                            <div>
                                                                <h4>{e?.product_data?.title}</h4>
                                                                <p>{e?.product_data?.location}</p>
                                                            </div>
                                                            <div onClick={() => handleShow(e)}>
                                                                <Button text={'Discover'} icon background={'#18A354'} hoverBackground={'#535353'}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Container>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                        : ''
                }
            </div>
            <Modal show={show} className='home-modal' onHide={handleClose}>
                <Modal.Body>
                    <div className={'close'} onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <circle id="Ellipse_626" data-name="Ellipse 626" cx="20" cy="20" r="20" fill="#535353"/>
                            <g id="Group_22904" data-name="Group 22904" transform="translate(-1262.19 -24.19)">
                                <line id="Line_17554" data-name="Line 17554" x2="8.31" y2="8.31" transform="translate(1278.19 40.19)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                <line id="Line_17555" data-name="Line 17555" x1="8.31" y2="8.31" transform="translate(1278.19 40.19)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                            </g>
                        </svg>
                    </div>
                    <Row className={'ongoing'}>
                        <Col md={{offset:2, span:5}} className={'ongoing-img'}>
                            <div className={'image-wrap'}>
                                <Img src={thumb}/>
                            </div>
                        </Col>
                        <Col md={5} className={'ongoing-data'}>
                            <div className={'ongoing-data__top'}>
                                <h4>{title}</h4>
                                <p>{location}</p>
                                {reactHtmlParser(desc)}
                            </div>
                            <div className={'ongoing-data__bottom'}>
                                <div className="form_wrapper">
                                    <h4 className="title">
                                        Schedule a visit
                                    </h4>
                                    <Form className={'form'}>

                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("name",{
                                                        required: 'Name is required',
                                                        pattern: {
                                                            value: /([A-Z])\w+/,
                                                            message: 'Name must contain only letters',
                                                        },

                                                    })}
                                                    type="text" placeholder="Name*"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("email",{
                                                        required:{
                                                            value:true,
                                                            message:'please enter your email'
                                                        },
                                                        pattern:{
                                                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message:'please enter a valid email address'
                                                        }
                                                    })}
                                                    type="email" placeholder="Email*"/>
                                            </Form.Group>
                                        </div>
                                        <div className="form-group">
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control
                                                    className={formState?.errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("phone",{
                                                        required:{
                                                            value:true,
                                                            message:'please enter your phone first'
                                                        },
                                                        pattern:{
                                                            value:/^01[0-9]{9}$/,
                                                            message:'please enter a valid 11 digit phone number'
                                                        }
                                                    })}
                                                    type="text" placeholder="Phone*"/>
                                            </Form.Group>
                                        </div>
                                        <div className={'form-group button d-flex'}>
                                            <div onClick={handleSubmit(onSubmit,onError)}>
                                                <Button background={'#67A66D'} hoverBackground={'#222222'} text={'Submit'}/>
                                            </div>
                                            <Button text={'Explore More'} src={`project/${slug}`} icon/>
                                        </div>

                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </StyledBanner>
    );
};

const StyledBanner = styled.section`
  position: relative;
  height: 100vh;
  .banner-slider{

  }
  .navigation{
    bottom: 30%;
    right: ${(props) => props.offset}px;
    position: absolute;
    ul{
      display: flex;
      li{
        margin-right: 20px;
        span{
          color: #fff;
          z-index: 111;
          position: relative;
        }
        &:last-child{
          margin-right: 0;
        }
      }
    }
    //@media (min-width: 768px) and (max-width: 1040px){
    //  bottom: 30%;
    //  right: 10%;
    //}
    @media(max-width: 767px){
      top: 20%;
      bottom: 0;
      left: 5%;
    }
  }
  .banner-slider__single {
    position: relative;
    height: 100vh;

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

    video {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
    }


    .container {
      position: relative;
      z-index: 9;
      height: 100%;
      //bottom: 90px;
      margin-bottom: auto;

      .contents {
        position: absolute;
        bottom: 0;
        width: calc(100% - 30px);
        margin-bottom: 90px;

        .top-content {
          //position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid #f9f9f9;
          padding-bottom: 20px;
          //bottom: 200px;
          margin-bottom: 40px;
          width: 100%;

          h4 {
            color: #f9f9f9;
            width: 55%;
            @media(max-width: 767px){
              font-size: 50px;
              line-height: 50px;
            }
          }

          ul {
            display: flex;

            li {
              cursor: pointer;
              margin-right: 20px;

              &:last-child {
                margin-right: 0;
              }

              span {
                color: #FFFFFF;
                display: flex;
                position: absolute;
                top: 80px;
                right: 65px;

                p {
                  color: #FFFFFF;
                }
              }
            }
          }
        }

        .bottom-content {
          //position: absolute;
          //bottom: 90px;
          width: 50%;
          display: flex;
          align-items: flex-end;
          gap: 67px;
          h4 {
            font-size: 20px;
            line-height: 40px;
            font-weight: 600;
            color: #FFFFFF;
          }

          p {
            font-size: 20px;
            font-weight: 300;
            color: #FFFFFF;
            margin: 0;
          }
        }
      }
    }
  }
}

.swiper-pagination{
  opacity: 0;
}

@media (max-width: 991px) {
  height: 100vh;
  .banner-slider__single {
    height: 100vh;
    .container {

    }
  }
}


@media (max-width: 767px) {
  .banner-slider__single {
    //padding-top: calc(768 / 375 * 100%);
    height: 100vh;

    .container {
      .contents {
        .top-content {
          h4{
            width: 100%;
          }
        }

        .bottom-content {
          display: block;

          .dc-btn {
            margin-top: 20px;
          }
        }
      }
    }
  }
`;
export default React.memo(BannerSlider);
