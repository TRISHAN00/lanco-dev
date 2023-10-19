import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
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
                   center,
                   classname,
               }) => {


    return (

        <StyledTitle className={`title ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     borderColor={borderColor}>
            <h5 className={'title split-up'}>{ReactHtmlParser(text)} </h5>
        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px'};
  position: relative;
  width: 100% !important;
  text-align: ${props => props?.center ? 'center' : ''};
  padding: ${p => p.padding};

  h5 {
    color: ${props => props.color || '#222222'};
    width: 100%;
  }
  


  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0;
    h2 {
      font-size: 35px !important;
      line-height: 35px !important;
    }
  }
`;


export default React.memo(Title);














