import React from 'react';
import styled from 'styled-components';

const Message = (props, {offset}) => {

    return (
        <StyledMessage data-scroll-section offset={offset} className={`title `}
        >
            <div className={'message_wrapper'}>
                <a href={'tel:+4733378901'}>
                    <div id={'click_message'} className="hover social_bar">
                        <div className="overlay_message"></div>
                        <div className="hover_bar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path id="Icon_ionic-logo-whatsapp" data-name="Icon ionic-logo-whatsapp"
                                      d="M12.431,2.25a9.781,9.781,0,0,0-9.818,9.742,9.642,9.642,0,0,0,1.409,5.031L2.25,22.25l5.436-1.727A9.835,9.835,0,0,0,22.25,11.992,9.781,9.781,0,0,0,12.431,2.25Zm4.882,13.442a2.536,2.536,0,0,1-1.737,1.119c-.46.024-.474.357-2.984-.734a10.244,10.244,0,0,1-4.139-3.914,4.815,4.815,0,0,1-.926-2.61,2.782,2.782,0,0,1,.956-2.041.962.962,0,0,1,.68-.286c.2,0,.326-.006.472,0S10,7.2,10.191,7.7s.645,1.748.7,1.875a.455.455,0,0,1,0,.436,1.705,1.705,0,0,1-.266.405c-.131.141-.276.314-.392.422s-.267.249-.129.5a7.513,7.513,0,0,0,1.329,1.774,6.85,6.85,0,0,0,1.969,1.309c.246.134.393.119.546-.041s.654-.7.83-.945.342-.2.569-.1,1.436.739,1.682.873.41.2.469.308A2.062,2.062,0,0,1,17.314,15.692Z"
                                      transform="translate(-2.25 -2.25)" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </StyledMessage>

    )
};


const StyledMessage = styled.div`
  position: fixed;
  right: 50px;
  bottom: 98px;
  z-index: 990;


  .overlay_message {
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    display: none;
  }

  .message_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 60px;

    .hover {
      background-color: #F0EDE3;
      height: 50px;
      width: 50px;
      overflow: hidden;
      border-radius: 50% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
      cursor: pointer;
      position: relative;

      &:after {
        display: none;
      }

      .hover_bar {
        visibility: visible;
        opacity: 1;
        transition: 0.5s all cubic-bezier(0.4, 0, 0, 1);
        display: flex;
        position: relative;
        margin: auto;

        svg {
          position: absolute;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

.social_bar {
  background-color: #18A354 !important;
}


@media (max-width: 767px) {
  right: 15px;
  left: unset;
  bottom: 120px;
}



`;


export default Message;














