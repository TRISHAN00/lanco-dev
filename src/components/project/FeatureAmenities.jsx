import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Feature = ({data}) => {


    return (
        <StyledComponent id={'features'} className='feature pt-150 pb-150'>
            <Container>
                <Row>
                    <div className='feature__title'>
                        <Col md={12}>
                            <h5>Feature & Amenities</h5>
                        </Col>
                    </div>
                </Row>


                <div className="slider" style={{width: '100%'}}>

                    {
                        data?.[0]?.images && data?.[0]?.images?.length > 0 &&
                        data?.[0]?.images?.map((e, i)=>{
                            return(
                                <div  className='feature__single' key={i}>
                                    <div className='feature__single__img'>
                                        <img src={e?.full_path}/>
                                    </div>
                                    <div>
                                        <p>{e?.short_title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Container>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`

  background-color: #1C1C1C;
  .slider{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
  }
    .feature{
      &__title{
        h5{
          color: #fff;
          margin-bottom: 60px;
        }
      }
      &__single{
        margin-left: auto;
        margin-right: auto;
        padding-top: 44px;
        padding-bottom: 66px;
        border-top: 1px solid rgb(242 242 242 / 20%);
        border-right: 1px solid rgb(242 242 242 / 20%);
        width: 100%;
        @media(max-width: 767px){
          padding-top: 18px;
          padding-bottom: 18px;
        }
        &__img{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 19px 17px;
          margin-bottom: 20px;
        }
        p{
          font-size: 14px;
          line-height: 20px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &:first-child{
          border-left: 1px solid rgb(242 242 242 / 20%);
        }
        :nth-child(5n + 1){
          border-left: 1px solid rgb(242 242 242 / 20%);
        }
        &:nth-last-child(-n+5) {
          border-bottom: 1px solid rgb(242 242 242 / 20%);
        }
      }
    }

  @media(max-width: 767px) {
    .slider {
      grid-template-columns: repeat(2, 1fr); /* 2 items in 1 row for mobile */
      gap: 15px;
    }
    .feature{
      &__title{
        h5{
          margin-bottom: 30px;
        }
      }
      &__single{
        border: 1px solid rgb(242 242 242 / 20%);
      }
    }
  }
`;
export default React.memo(Feature);
