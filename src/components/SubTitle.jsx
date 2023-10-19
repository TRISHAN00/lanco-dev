import React from 'react';
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import {text, title} from "../styles/globalStyleVars";


const Subtitle = ({
                      fontSize,
                      fontWeight,
                      color,
                      letterSpacing,
                      lineHeight,
                      textTransform,
                      margin,
                      padding,
                      borderColor,
                      varient,
                      text,
                      marginBottom,
                      borderWidth
                  }) => {


    return (

        <StyledSubitle className={`subtitle split-up parallux_sub`}
                       fontSize={fontSize}
                       fontWeight={fontWeight}
                       color={color}
                       lineHeight={lineHeight}
                       LetterSpacing={letterSpacing}
                       textTransform={textTransform}
                       margin={margin}
                       padding={padding}
                       varient={varient}
                       borderColor={borderColor}
                       marginBottom={marginBottom}
                       borderWidth={borderWidth}
                       >
            {text ? <p className={'subtitles'}>{ReactHtmlParser(text)}</p> : "" }

        </StyledSubitle>

    )
};



const StyledSubitle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom + 'px' || '20px'};

  .subtitles {
    text-transform: ${props => props.textTransform || 'Capitalize'};
    font-weight: ${props => props.fontWeight || '400'};
    color: ${props => props.color || text};
    font-family: ${title};
    margin: ${props => props.margin || '0px'};
    font-size: ${props => props.fontSize + 'px' || '16px'} !important;
    border-bottom: 0.5px solid rgba(83, 83, 83, 0.5);
    position: relative;
    width: ${props => props.borderWidth || '100'}% !important;
    padding-bottom: 20px !important;
  }

  // &:after {
  //   position: absolute;
  //   left: 0;
    //   width: ${props => props.borderWidth || '100'}%;
  //   content: "";
  //   background: #535353;
  //   height: 1px;
  //   bottom: 0;
  // }


  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;


export default React.memo(Subtitle);
