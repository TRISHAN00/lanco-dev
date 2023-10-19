import React, {useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import InputRange from "react-input-range";

const MyComponent = () => {

    //variable declaration.
    const [pAmt, setpAmt] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const [dpAmt, setdpAmt] = useState(0);


    // EMI Calculator formula.
    const finalAmt = dpAmt ? (pAmt - dpAmt) : pAmt;
    const intr = interest / (12 * 100);
    const emi = duration ? Math.round(finalAmt * intr / (1 - (Math.pow(1/(1 + intr), duration )))) : 0;
    const totalAmt = emi * duration;
    const totalAmtOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const totalAmtOfInterest = Math.round(totalAmt - totalAmtOfCredit);


    return (
        <StyledComponent className={'calculator pt-150'}>
            <Container>
                <Row>
                    <Col md={{offset:1, span: 11}} className={'title'}>
                        <h4>EMI CALCULATOR</h4>
                    </Col>
                    <Col md={{offset:1, span:5}} className={'range'}>
                        <form action="">
                            <fieldset className={'fieldset'}>
                                <legend>Principal Amount</legend>
                                <InputRange
                                    minValue={0}
                                    maxValue={1000000}
                                    value={pAmt}
                                    onChange={value => setpAmt(value)}
                                />
                                <input
                                    type="number"
                                    value={pAmt}
                                    onChange={e => setpAmt(e.target.value)}
                                    onBlur={e => {
                                        if (e.target.value > 1000000) {
                                            e.target.value = 1000000; // Set it to the maximum value (60) if it's greater
                                            setpAmt(1000000); // Update the state as well
                                        }
                                    }}
                                    max={1000000}
                                />
                            </fieldset>

                            <fieldset className={'fieldset'}>
                                <legend>Month Of Duration</legend>
                                <InputRange
                                    minValue={0}
                                    maxValue={60}
                                    value={duration}
                                    onChange={value => setDuration(value)}
                                />
                                <input
                                    type="number"
                                    value={duration}
                                    onChange={e => setDuration(e.target.value)}
                                    onBlur={e => {
                                        if (e.target.value > 60) {
                                            e.target.value = 60; // Set it to the maximum value (60) if it's greater
                                            setDuration(60); // Update the state as well
                                        }
                                    }}
                                    max={60}
                                />
                            </fieldset>

                            <fieldset className={'fieldset'}>
                                <legend>Interest Rate</legend>
                                <InputRange
                                    minValue={0}
                                    maxValue={20}
                                    value={interest}
                                    onChange={value => setInterest(value)}
                                />
                                <input
                                    type="number"
                                    value={interest}
                                    onChange={e => setInterest(e.target.value)}
                                    onBlur={e => {
                                        if (e.target.value > 20) {
                                            e.target.value = 20; // Set it to the maximum value (60) if it's greater
                                            setInterest(20); // Update the state as well
                                        }
                                    }}
                                    max={20}
                                />
                            </fieldset>

                            <fieldset className={'fieldset'}>
                                <legend>Down Payment</legend>
                                <InputRange
                                    minValue={0}
                                    maxValue={1000000}
                                    value={dpAmt}
                                    onChange={value => setdpAmt(value)}
                                />
                                <input
                                    type="number"
                                    value={dpAmt}
                                    onChange={e => setdpAmt(e.target.value)}
                                    onBlur={e => {
                                        if (e.target.value > 1000000) {
                                            e.target.value = 1000000; // Set it to the maximum value (60) if it's greater
                                            setdpAmt(1000000); // Update the state as well
                                        }
                                    }}
                                    max={1000000}
                                />
                            </fieldset>
                        </form>
                    </Col >
                    <Col md={5} className={'result'}>
                        <p>Calculate EMI</p>
                        <div className={'result__single'}>
                            <div className={'result__single__data'}>
                                <h4>${emi}</h4>
                                <p>Monthly payment</p>
                            </div>
                        </div>
                        <div className={'result__single'}>
                            <div className={'result__single__data'}>
                                <h4>${totalAmtOfInterest}</h4>
                                <p>Total Interest Payable</p>
                            </div>
                        </div>
                        <div className={'result__single'}>
                            <div className={'result__single__data'}>
                                <h4>${dpAmt}</h4>
                                <p>Down Payment</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .input-range__track {
    background: #F2F2F2;
    border-radius: 5px;
    height: 8px;
  }
  .input-range__track--active {
    background: #18A354;
  }
  .input-range__slider {
    width: 20px;
    height: 20px;
    background: #f9f9f9;
    border: none;
    border-radius: 50%; /* Makes the slider circular */
    transform: translate(-10%, -190%);
    position: relative;
    box-shadow: 5px 5px 15px 5px #fff;
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #18A354; /* Color of the inner circle */
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .input-range__slider-container {
    width: 30px;
    height: 30px;
    position: relative;
    .input-range__label{
      position: relative;
      top: -35px;
      right: 75px;
    }
  }
  .input-range__label--min{
    opacity: 0 !important;
  }
  .input-range__label--max{
    opacity: 0 !important;
  }
..input-range__label{
  position: absolute;
  top: -35px;
  right: 0;

}
  .input-range__label-container{
    opacity: 0;
  }
  /* Webkit browsers */
  .input-range__slider::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #337ab7;
    border: none;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  /* Firefox */
  .input-range__slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #337ab7;
    border: none;
    border-radius: 50%;
    transform: translateY(-50%);
  }
  
  .title{
    margin-bottom: 40px;
    h4{
      font-size: 24px;
      line-height: 34px;
      font-weight: 500;
      color: #222222;
    }
  }
  .range{
    padding-right: 60px;
    legend{
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      position: relative;
      bottom: -25px;
    }
  }
  .result{
    padding-left: 60px;
    p{
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    &__single{
      background-color: #F2F2F2;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 30px;
      margin-bottom: 20px;
      border-radius: 10px;
      &__data{
        h4{
          font-size: 24px;
          line-height: 24px;
          font-weight: 500;
          color: #18A354;
          margin-bottom: 10px;
        }
        p{
          font-size: 12px;
          line-height: 16px;
          font-weight: 400;
          color: #222222;
        }
      }
      
    }
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    .result{
      margin-top: 30px;
      padding-left: 15px;
    }
    .range{
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  
`;

export default MyComponent;
