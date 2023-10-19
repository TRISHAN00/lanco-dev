import React  from 'react';
import {hover, title} from '../styles/globalStyleVars';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";


const Button = ({
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    hoverColor,
                    target,
                    borderColor,
                    icon,
                    marginTop,
                }) => {


    return (
        <StyledBtn className={`dc-btn`}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
                   hoverColor={hoverColor}
                   marginTop={marginTop}
        >
            {src ? (

                <Link to={src || '/'}>
                    <span>
                        {ReactHtmlParser(text) || 'explore'}
                        {
                            icon ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="31.207" height="17.414" viewBox="0 0 31.207 17.414">
                                    <g id="Group_5742" data-name="Group 5742" transform="translate(-1838 688.207)">
                                        <line id="Line_59" data-name="Line 59" x2="8" y2="8" transform="translate(1860.5 -687.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_60" data-name="Line 60" y1="8" x2="8" transform="translate(1860.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_61" data-name="Line 61" x1="29" transform="translate(1838.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                : ''
                        }

                    </span>
                </Link>
            ) : (
                <a target={target}>
                    <span>
                        {ReactHtmlParser(text) || 'explore'}
                        {
                            icon ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="31.207" height="17.414" viewBox="0 0 31.207 17.414">
                                    <g id="Group_5742" data-name="Group 5742" transform="translate(-1838 688.207)">
                                        <line id="Line_59" data-name="Line 59" x2="8" y2="8" transform="translate(1860.5 -687.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_60" data-name="Line 60" y1="8" x2="8" transform="translate(1860.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                        <line id="Line_61" data-name="Line 61" x1="29" transform="translate(1838.5 -679.5)" fill="none" stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                : ''
                        }
                    </span>
                </a>
            )}
        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: max-content;
    height: 100%;
    cursor: pointer;
    margin-top:  ${props => props.marginTop || '0'}px;
    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '16'}px;
      font-weight: ${props => props.fontWeight || 500};
      margin: 0;
      line-height: ${props => props.lineHeight || '20'}px;
      //border: 1px solid ${props => props.borderColor || "#222222"};
      background-color: ${props => props.background || "#222222"};
      position: relative;
      border-radius: ${props => props.borderRadius || '23px'} !important;
      overflow: hidden;
      z-index: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: border-color .3s ease;
      //font-family: ${title};
      padding: 12px 30px;

      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: color .3s ease;
        color: ${props => props.color || '#FFFFFF'};
        svg{
          margin-left: 10px;
          path{
            transition: all .3s ease;
          }
        }
      }

      &:before {
        bottom: 0;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        transition: height 0.5s ease-in-out;
        width: 100%;
        z-index: -1;
        background-color: ${p => p.hoverBackground || "#18A354"};
        height: 0;
        border-radius: ${props => props.borderRadius || '20px'} !important;
      }

      &:hover {
        border-color: ${hover};

        span {
          color: ${p => p.hoverColor || '#FFF'};
          svg{
            path{
              fill: ${p => p.hoverColor || '#FFF'};;
            }
          }
        }

        &:before {
          height: 100%;
        }
      }

      &:focus {
        color: #222222;
      }
    }
  }

 

`;


export default React.memo(Button);
