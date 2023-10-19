import { createGlobalStyle, css } from "styled-components";
import { hover, text, title } from "./globalStyleVars";

function createCSS() {
  let styles = "";

  for (let i = 2; i < 20; i += 1) {
    styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * 0.12}s;
        }
     `;
  }

  for (let a = 2; a < 100; a += 1) {
    styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * 0.03}s;
        }
     `;
  }

  return css`
    ${styles}
  `;
}

export default createGlobalStyle`

  ${createCSS()}
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  

  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Medium.woff2') format('woff2'),
    url('/fonts/SuisseIntl-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }

  

  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Semibold.woff2') format('woff2'),
    url('/fonts/SuisseIntl-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  

  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Regular.woff2') format('woff2'),
    url('/fonts/SuisseIntl-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }


  body {
    font-family: 'Suisse Intl', Arial, Helvetica, freesans, sans-serif !important;
    font-style: normal;
    margin: 0;
    color: ${text};
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-size: 16px;
    line-height: 24px;


    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  a {
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
      color: ${hover} !important;
      text-decoration: none;
      outline: none;
      box-shadow: none;
    }

    &:focus {
      text-decoration: none;
      outline: none;
      box-shadow: none;
      color: ${text};
    }
  }

  ::selection {
    background: ${hover};
    color: #FFF;
  }
  
  a {
    color: ${text};
    font-weight: 400;
    margin: 0;
  }

  p{
    margin-bottom: 0;
  }
 

  h1{
    font-family: ${title};
    font-size: 160px;
    line-height: 160px;
    font-weight: 500;
    margin: 0;
    span{
      color: #18A354;
    }
  }

  h2{
    font-family: ${title};
    font-size: 120px;
    line-height: 120px;
    font-weight: 400;
    margin: 0;
    span{
      color: #18A354;
    }
   
  }

  h3{
    font-size: 60px;
    line-height: 64px;
    font-weight: 500;
    margin: 0;
    span{
      color: #18A354;
    }
  }

  h4{
    font-size: 50px;
    line-height: 60px;
    font-weight: 500;
    margin: 0;
    span{
      color: #18A354;
    }
  }

  h5{
    font-family: ${title};
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
    margin: 0;
    span{
      color: #18A354;
    }
  }
  
  


  ul {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }


  .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }


  table {
    width: 100%;
  }

  form div {
    position: relative;
  }
  
  

  .form {
    width: 100%;
    //display: flex;
    //flex-wrap: wrap;

    .form-control {
      height: 45px;
      padding-left: 0;
      border: none;
      border-bottom: 1px solid rgba(209, 209, 209, 0.6);
      background-color: transparent;
      border-radius: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: ${text};
      margin-bottom: 40px;
      box-shadow: none;
      outline: 0;

      &:focus {
        box-shadow: none;
      }
    }

    label {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 0px !important;
      @media (min-width: 1550px) {
        font-size: 16px;
      }
    }

    ::placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
      font-size: 14px;
      font-weight: 500;
    }

    textarea {
      width: 100%;
      border: none;
      border-bottom: 1px solid #FFF;
      background-color: transparent;
      border-radius: 0px;
      font-size: 16px;
      max-height: 110px;
      min-height: 110px;
      min-width: 100%;
      max-width: 100%;
      outline: none;
      color: #ffffff;
      margin-top: 10px;
      margin-bottom: 40px;
    }

    .css-yk16xz-control {
      background: transparent;
      border: none;
      border-bottom: 1px solid #E9E9E9 !important;
      color: ${text};
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: rgba(35, 31, 32, 0.6) !important;
    }

    .filter {
      &__placeholder {
        color: #F9F9F9 !important;
        font-size: 16px;
        font-weight: 300;
      }

      &__control {
        padding-left: 0;
        padding-right: 0;

        &--is-focused {
          background-color: transparent !important;
          border: none;
          outline: none;
          border-bottom: 1px solid #FFF;
        }
      }


      &__indicator {
        margin-right: 0;
        padding: 0;
      }

      &__value-container {
        padding-left: 0;
        padding-right: 0;
        cursor: pointer !important;
      }
    }

    .css-1uccc91-singleValue {
      color: rgba(35, 31, 32, 0.6) !important;
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    }

    @media (max-width: 991px) {
      padding: 0 !important;
    }

    @media (max-width: 767px) {
      .filter__control {
        margin-bottom: 40px !important;
      }
    }
    .contact-map__form{
      .form-control{
        color: #535353;
        border-bottom: 1px solid rgb(83 83 83 / 20%);
      }
      .filter{
        &__control{
          border-bottom: 1px solid rgb(83 83 83 / 20%) !important;
        }
        &__placeholder{
          color: #535353 !important;
        }
      }
    }
  }


  .form-control {
    box-shadow: none;
    outline: 0;
    border-radius: 0;

    &:focus {
      box-shadow: none;
    }
  }
  

  .p-0 {
    padding: 0 !important;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pt-200 {
    padding-top: 200px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-200 {
    padding-bottom: 200px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }


  .pt-150 {
    padding-top: 150px;
    @media (max-width: 767px) {
      padding-top: 80px;
    }
  }

  .pb-150 {
    padding-bottom: 150px;
    @media (max-width: 767px) {
      padding-bottom: 80px;
    }
  }

  .pt-120 {
    padding-top: 120px;
    @media (max-width: 767px) {
      padding-top: 80px;
    }
  }

  .pb-120 {
    padding-bottom: 120px;
    @media (max-width: 767px) {
      padding-bottom: 80px;
    }
  }
  

  .pt-160 {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-160 {
    padding-bottom: 160px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pb-130 {
    padding-bottom: 130px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-100 {
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-100 {
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .pb-80 {
    padding-bottom: 80px;
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }
  }


  .MuiDrawer-paper {
    width: 500px !important;
    padding: 20px;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }

  //.swiper-button-disabled {
  //  opacity: 0 !important;
  //}

  @media (min-width: 1500px) {
    .container {
      //min-width: 1366px;
      min-width: 85%;
      margin: auto;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 90%;
      margin: auto;
    }
  }


  @media (max-width: 767px) {
    .container, .container-sm {
      max-width: 100%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


  //react select
  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 0 !important;
    padding-left: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: rgba(35, 31, 32, 0.6) !important;
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }

  .css-2613qy-menu {
    border-radius: 0 !important;
    margin-top: 0 !important;
  }

  //animation class


  .info-window {
    max-width: 200px;
  }

  .gm-style-iw {
    border-radius: 0 !important;
  }

  .swiper-pagination-bullet {
    outline: none;
  }

  .css-nmuc1a-menu {
    z-index: 5 !important;
  }


  .map-info__img {
    img {
      height: 100px;
      margin-bottom: 12px;
      object-fit: cover;
    }
  }

  .map-info__content {
    h4 {
      font-size: 20px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    //background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;

    &.show {
      display: block;
    }
  }

  .form-control.has-error {
    border-color: #dc004e !important;
  }

  .has-error .find-retainer-filter__control {
    border-color: #dc004e !important;
  }

  //preloader
  .content-loader {
    position: absolute;
    height: 70%;
    width: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .loading-before-submit {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }


  .swiper-slide {
    height: auto;
  }

  .slick-slide {
    div {
      outline: none !important
    }
  }

  button, button:active, button:focus, button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }


  .hover {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      z-index: 2;
    }

    svg {
      position: relative;
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 100%;
      margin: auto;
      background-color: ${hover};
      transition: all .5s ease;
      border-radius: 50%;
    }

    &:hover {
      &:after {
        top: 0;
      }
    }
  }


  .modal-backdrop {
    background-color: rgb(34 31 31 / 90%);
    min-width: 100%;
    //z-index: 9999;

    &.show {
      opacity: 1;
    }
  }


  .valid {
    color: ${hover};
    position: absolute;
    font-size: 12px;
    top: 44px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .toastify {
    position: fixed;
    z-index: 999999999;
  }

  .toastify {
    z-index: 999999999;
  }


  .Toastify__toast-container {
    z-index: 99999999;
  }
  //menu fixed
  .scroll-down .menu-desktop {
    transform: translate3d(0, -100%, 0);
  }

  .scroll-up .menu-desktop {
    background-color: #fff;

    .menu-desktop__hamburger__lines {
      &__inner .line {
        background-color: #191818;
      }

      p {
        color: #191818;
      }
    }

    .menu-desktop__hamburger .controller svg {
      path {
        fill: #191818;
      }

      line {
        stroke: #191818;
      }
    }

    .dc-btn a {
      color: #191818;

      &:hover {
        color: #191818 !important;
      }

      &:after, &:before {
        box-shadow: 0 0 0 1px #191818;
      }
    }
  }

  .form-control:disabled {
    background-color: transparent;
  }

  @media (max-width: 600px) {
    .prevent-overflow {
      overflow: hidden;
      height: 100vh;
    }
  }

  .Toastify__toast-container {
    z-index: 99999999;
  }

  .mobile-menu {
    #fb-root, .fb_reset {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  .slick-slide {
    -webkit-transform: translate3d(0, 0, 0);
  }

  .reveal, .revealFast {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }

  //calender
  ._3efP_GeH5kyBAzqnLzL._kN_bCa3VNYpqFLH311L {
    border-radius: 0 !important;
  }

  //video modal 
  .modal-video-close-btn:before, .modal-video-close-btn:after {
    background-color: ${hover};
  }

  .page-loader {
    position: fixed;
    background-color: rgb(36, 24, 67);
    width: 100vw;
    z-index: 999999999;
    overflow: hidden;
    //opacity: 0;
    //height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    //left: 0; //width: 0;
    //transition: all 2.6s ease;
    //.anim-logo {
    //  width: 130px;
    //  overflow: hidden;
    //  height: fit-content;
    //  position: absolute;
    //  left: 0;
    //  right: 0;
    //  top: 0;
    //  bottom: 0;
    //  opacity: 0;
    //  margin: auto;
    //  z-index: 2;
    //
    //  img {
    //    height: 55px;
    //  }
    //}

    //.hide-logo {
    //  background-color: #010A1A;
    //  width: 50%;
    //  height: 100vh;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //  margin: auto;
    //  position: absolute;
    //  z-index: 999;
    //}

    .pre-loader__img {
      //position: fixed;
      height: 100px;
      width: 100px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(36, 24, 67);
      z-index: 99999999;

      //flex: 1;
      margin: auto;
      opacity: 0;

      img {
        display: block;
      }

      .top {
        height: 8px;
      }

      .bottom {
        height: 30px;
        margin-top: 5px;
        animation: flip 1s linear infinite;
      }

      @keyframes flip {
        0% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(180deg)
        }
      }
    }

  }

  //------------------------animation
  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  .reveal {
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }


  // //page transition
  // .page-transition {
  //   position: fixed;
  //   height: 100%;
  //   width: 100%;
  //   top: 0;
  //   left: 0;
  //   background-color: ${hover};
  //   z-index: 999999999;
  //   display: none;
  //   opacity: 0;
  //   //display: flex;
  //   align-items: center;
  //   justify-content: center;
  //
  //   .logo {
  //     height: 80px;
  //     opacity: 0;
  //   }
  // }

  //page transition
  .page-transition {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #2F374B;
    z-index: 999999999;
    //display: none;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      height: 80px;
      opacity: 1;
    }
  }

  .gph_modal {
    background: #F4F4F4;
   // overflow: hidden !important;

    .slider-nav {
      //position: absolute;
      //top: 7px;
      //right: 15px;
      position: absolute;
      left: 0;
      right: 0;
      width: calc(100% - 15px);
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;

      ul {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
      }

      li {
        height: 50px;
        width: 50px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid white;

        &:nth-of-type(1) {
          margin-right: 20px;
        }

        svg {
          color: #ffffff;
          z-index: 2;
          font-size: 20px;
        }
      }
    }

    .hover {
      height: 40px;
      width: 40px;

      svg {
        font-size: 17px;
      }
    }

    .modal-dialog {
      margin: 0;
      width: 100%;
      height: 100%;
      max-width: 100% !important;
      background: #F4F4F4;

      .btn-close {
        display: none;
      }

      .modal-header {
        padding: 0;
        margin-bottom: 0;
        background: #F4F4F4;

        .h4 {
          color: #222222;
          font-weight: 500;
        }

        .header_wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 15px 20px;
          .close_button {
            cursor: pointer;

            &:hover {
              opacity: 0.7;
            }
          }

        }

      }

      .custombar {
        position: relative;

        &:after {
          z-index: 1;
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: transparent;
          background: linear-gradient(to bottom, rgba(244, 244, 244, 0) 0%,
          rgba(244, 244, 244, 1) 100%);
        }
      }

      .modal-content {
        height: 100vh;
        padding: 0;
        background: #F4F4F4;
        border: none;

        .left_col {
          padding: 60px 15px 60px;

          h3 {
            font-size: 20px;
            font-weight: 500;
            line-height: 30px;
            color: #222222;
            margin: 0 0 10px;
          }

          p {
            font-weight: 400;
            color: #222222;
            &.deg {
              font-size: 14px;
              font-weight: 500;
              line-height: 18px;
              color: #FB030C;
              margin: 0 0 40px;
            }
          }
        }

        .right_col {
          padding: 60px 15px 60px;
          .custombar {
            &:after {
              display: none;
            }
          }
          .right_col_img {
            position: relative;
            padding-top: calc(550 / 500 * 100%);
          }
        }

      }
    }
    
    .modal-data{
      padding-top: 40px;
      //border-top: 1px solid #1c1c1c;
      &__img{
        .image-wrapper{
          position: relative;
          padding-top: calc(620 / 470 * 100%);
          width: 100%;
          height: 100%;
        }
      }
      &__content{
        h2{
          font-size: 50px;
          line-height: 60px;
          font-weight: 500;
          color: #000;
          margin-bottom: 40px;
        }
        p{
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
          color: #000;
          margin-bottom: 40px;
        }
        .designation{
          h5{
            font-size: 24px;
            line-height: 34px;
            font-weight: 500;
            color: #000;
            margin-bottom: 5px;
          }
          p{
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: #000;
          }
        }
      }
      @media(max-width: 767px){
        display: block !important;
        &__img{
          width: 100%;
        }
        &__content{
          width: 100%;
        }
      }
    }
    
    .modal-close{
      svg{
        cursor: pointer;
      }
    }

    .simplebar-track.simplebar-vertical {
      display: none;
    }

    @media (max-width: 767px) {
      overflow-y: scroll !important;
      .custombar {
        position: relative;
        height: auto !important;

        .simplebar-content-wrapper {
          overflow: auto;
        }
      }

      .modal-content {
        overflow: hidden !important;
      }

      .row {
        flex-direction: column-reverse;

        .left_col {
          padding: 0 15px 40px !important;
        }

        .right_col {
          padding: 40px 15px !important;
        }
      }

    }

    @media (min-width: 767px) {
      .main_scroll {
        position: relative;
        height: auto !important;

        .simplebar-content-wrapper {
          overflow: auto;
        }
      }
    }
  }
  
  
  .home-modal{
    z-index: 999999;
    background-color: #000;
    //opacity: 18%;
    overflow: hidden;
    padding: 0 !important;

    .modal-dialog{
      max-width: 100%;
      margin: 0;
      .modal-content{
        .modal-body{
          padding: 0;
          overflow: hidden;
          background-color: rgb(0 0 0 / 18%);
          .close{
            position: absolute;
            z-index: 999999;
            right: 58px;
            top: 20px;
            cursor: pointer;
            svg{
              position: absolute;
            }
          }
          .ongoing{
            .ongoing-img{
              padding-right: 0;
              .image-wrap{
                position: relative;
                padding-top: calc(768 / 600 * 100%);
                height: 100%;
                width: 100%;
              }
            }
            .ongoing-data{
              padding-bottom: 80px;
              background-color: black;
              width: 100%;
              &__top{
                padding-left: 30px;
                padding-top: 56px;
                padding-right: 100px;
                @media(max-width: 767px){
                  padding-left: 15px;
                  padding-right: 15px;
                }
                h4{
                  font-size: 30px;
                  line-height: 40px;
                  font-weight: 600;
                  color: #fff;
                }
                p{
                  font-size: 16px;
                  line-height: 40px;
                  font-weight: 300;
                  color: #fff;
                }
                ul{
                  margin-top: 20px;
                  li{
                    padding-bottom: 20px;
                    border-bottom: 1px solid #F6F6F7;
                    margin-bottom: 20px;
                    &:last-child{
                      margin-bottom: 0;
                    }
                    p{
                      font-size: 16px;
                      line-height: 20px;
                      font-weight: 300;
                      color: #fff;
                    }
                  }
                }
              }
              &__bottom{
                margin-top: 75px;
                margin-left: 30px;
                
                .form_wrapper{
                  margin-right: 98px;
                  @media(max-width: 767px){
                    margin-right: 0;
                  }
                  .title{
                    margin-bottom: 40px;
                  }
                  h4{
                    font-size: 20px;
                    line-height: 20px;
                    font-weight: Bold;
                    color: #fff;
                  }
                  .form-control:focus{
                    border-bottom: 1px solid rgba(209, 209, 209, 0.6);
                    color: #C4C4C4;
                  }
                }
                .button{
                  gap: 30px;
                }
                @media(max-width: 767px){
                  margin-left: 15px;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
  }


  
  
  //apply modal

  .apply-modal{
    padding-left: 0 !important;
    z-index: 999999;


    @media (min-width: 320px) {
      .modal-dialog {
        max-width: unset;
        margin: 0;
        height: 100vh;
      }
    }
    .modal-content{
      background: #fff;
      color: #C9C9C9;
      padding-bottom: 120px;
    }
    .modal-data__content{
      position: relative;
      h3{
        color: #000;
        font-size: 40px;
        line-height: 48px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 10px;
        @media(max-width: 767px){
          font-size: 24px;
          margin-bottom: 50px;
        }
      }
      .subtitle{
        margin-bottom: 60px;
        p{
          color: #000;
        }
      }
      form{
       margin-top: 30px; 
      }
      .form-control{
        background-color: transparent;
        border:none;
        border-bottom: 1px solid #B2A89F;
        margin-bottom: 40px;
        color: #C9C9C9;
        padding-left: 0;
        margin-right: 30px;
        &:last-child{
          margin-right: 0;
        }
        &::placeholder{
          color: #C9C9C9;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        }
      }
      .form__phoneEmail{
        display: flex;
        //gap: 20px;
        @media(max-width: 767px){
          flex-direction: column;
          input{
            width: 100% !important;
          }
        }
        input{
          width: 49%;
        }
      }
      input[type="textarea"]{
        padding-bottom: 80px;
      }
      input:-webkit-autofill{
        font-size: 14px;
        -webkit-text-fill-color: #222222;
      }

      .button-group{
        //display: flex;
        //gap: 40px;
        margin-bottom: 10px;

        .attach-cv{
          width: 155px;
          cursor: pointer;
          border: 1px solid #fff;
          border-radius: 19px;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background-color: #18A354;
          margin-bottom: 30px;
          label{
            margin-bottom: 0;
            cursor: pointer;
            color: #fff;
            font-size: 14px;
            line-height: 20px;
          }
        }
        @media(max-width: 767px){
          flex-direction: column;
        }
      }
      .file-name{
        font-size: 14px;
        opacity: 0.8;
        color: #FFFDFB;
        padding-left: 10px;
      }

      p{
        color: #FFFDFB;
        margin-bottom: 60px;
        @media(max-width: 767px){
          margin-bottom: 40px;
        }
      }

      .css-yk16xz-control {
        background: transparent;
        border: none;
        //border-bottom: 1px solid rgba(209, 209, 209, 0.6) !important;
        color: ${text};
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(35, 31, 32, 0.6) !important;
      }

      .filter {
        &__value-container{
          //overflow: visible;
        }
        &__placeholder {
          color: #C9C9C9 !important;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          //top: 0;
          align-items: flex-start;
        }

        &__control {
          padding-left: 0;
          padding-right: 0;
          align-items: flex-start;

          &--is-focused {
            background-color: transparent !important;
            border: none;
            outline: none;
            //border-bottom: 1px solid #FFF;
          }
        }

        &__indicator {
          margin-right: 0;
          padding: 0;
          //top: -10px;
          align-items: flex-start !important;
        }

        &__value-container {
          padding-left: 0;
          padding-right: 0;
          cursor: pointer !important;
        }
      }

      .css-1uccc91-singleValue {
        color: rgba(35, 31, 32, 0.6) !important;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
      }
      .css-1hb7zxy-IndicatorsContainer{
        align-items: flex-start !important;
      }
    }
    .modal-close{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 50px;
      margin-top: 60px;
      margin-right: 90px;
      @media(max-width: 767px){
        margin-right: 45px;
      }
      svg{
        border-radius: 50%;
        height: 30px;
        width: 30px;
        position: relative;
        cursor: pointer;
        @media(max-width: 767px){
          height: 30px;
          width: 30px;
        }
        #hover-color {
          fill: transparent;
          transition: fill 0.8s;
        }
        #circle-border{
          transition: all 1s;
        }
        &:hover{
          #hover-color {
            fill: #736640;
            animation: fillAnimation 0.8s forwards;
          }
          #circle-border{
            stroke-width: 0;
          }
        }
        &:not(:hover){
          #hover-color {
            fill: transparent;
            animation: reverseFillAnimation 0.8s forwards;
          }
        }
      }

      @keyframes fillAnimation {
        0% {
          r: 0;
        }
        100% {
          r: 34.5;
        }
      }
      @keyframes reverseFillAnimation {
        0% {
          r: 34.5;
        }
        100% {
          r: 0;
        }
      }
    }

    .modal-data {
      justify-content: unset;
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: white;
    }
  }


  .faq-modal{
    height: 100vh !important;
    z-index: 9999999;
    .modal-dialog{
      max-width: 800px !important;
      height: 425px;
      margin-top: 200px;
      display: flex;
    }
    .modal-body{
      padding: 0 !important;
    }
    .announcement{
      overflow: hidden;
      position: relative;
      &__data{
        
      }
      @media(max-width: 768px){
        
        &__data{
          
        }
      }
    }
  }
  
  .calculator-modal{
    height: 100vh !important;
    z-index: 9999999;
    .modal-dialog{
      max-width: 100% !important;
      height: 100vh;
      //margin-top: 200px;
      margin: 0 !important;
      padding: 0 !important;
      display: flex;
    }
    .pop-close{
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 9999999;
      cursor: pointer;
    }
  }
  
  
  //scroll-smooth shaking issue
  #smooth-content{
    will-change: transform ;
  }

  //calculator
  .calculator{
    form{
      .fieldset{
        position: relative;
        input[type=number]{
          position: absolute;
          top: 0;
          right: 0;
          border: none;
          padding: 0;
          text-align: right;
          font-size: 13px;
          &:focus{
            border: none;
          }
        }
      }
      
    }
  }


  

`;
