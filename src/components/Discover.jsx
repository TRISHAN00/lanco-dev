import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {gsap} from "gsap";

const MyComponent = ({data}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    // parallax animation
    useEffect(() => {
        gsap.utils.toArray(".boxxxx").forEach((section, i) => {
            gsap.to(section, {
                yPercent: -25,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                }
            })
        });
        gsap.utils.toArray(".boxxx").forEach((section, i) => {
            gsap.to(section, {
                yPercent: -10,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                }
            })
        });
    }, [data])

    return (
        <StyledComponent>
            <Container className={'discover'}>
                {
                    windowWidth > 767 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="968" height="556" viewBox="0 0 968 556">
                            <g id="Group_22970" data-name="Group 22970" transform="translate(-2863 -2258)">
                                <g id="Union_34" data-name="Union 34" transform="translate(2863 2258)" fill="none" opacity="0.6">
                                    <path d="M0,556V0H60.5V497.03h847V0H968V556ZM816.749,408.573H151.25V0h60.5V349.6h544.5V0h60.5V349.6h0v58.971ZM605,261.146H302.1V202.174h.4V0H363V202.174H605V0h60.5V261.146Z" stroke="none"/>
                                    <path d="M 966.99951171875 555.0001831054688 L 966.99951171875 0.9999738931655884 L 908.499755859375 0.9999738931655884 L 908.499755859375 498.0295104980469 L 59.49987411499023 498.0295104980469 L 59.49987411499023 0.9999738931655884 L 0.9999911785125732 0.9999738931655884 L 0.9999911785125732 555.0001831054688 L 966.99951171875 555.0001831054688 M 815.75 407.5730285644531 L 815.7491455078125 0.9999738931655884 L 757.249267578125 0.9999738931655884 L 757.249267578125 350.6023254394531 L 210.7502288818359 350.6023254394531 L 210.7502288818359 0.9999738931655884 L 152.2504577636719 0.9999738931655884 L 152.2504577636719 407.5730285644531 L 815.75 407.5730285644531 M 664.4996337890625 260.1458435058594 L 664.4996337890625 0.9999738931655884 L 605.9998779296875 0.9999738931655884 L 605.9998779296875 203.1742095947266 L 361.999755859375 203.1742095947266 L 361.999755859375 0.9999738931655884 L 303.4998779296875 0.9999738931655884 L 303.4998779296875 203.1742095947266 L 303.1030578613281 203.1742095947266 L 303.1030578613281 260.1458435058594 L 664.4996337890625 260.1458435058594 M 967.99951171875 556.0001831054688 L -8.846507626003586e-06 556.0001831054688 L -8.846507626003586e-06 -2.609432522149291e-05 L 60.49987411499023 -2.609432522149291e-05 L 60.49987411499023 497.0295104980469 L 907.499755859375 497.0295104980469 L 907.499755859375 -2.609432522149291e-05 L 967.99951171875 -2.609432522149291e-05 L 967.99951171875 556.0001831054688 Z M 816.75 408.5730285644531 L 151.2504577636719 408.5730285644531 L 151.2504577636719 -2.609432522149291e-05 L 211.7502288818359 -2.609432522149291e-05 L 211.7502288818359 349.6023254394531 L 756.249267578125 349.6023254394531 L 756.249267578125 -2.609432522149291e-05 L 816.7491455078125 -2.609432522149291e-05 L 816.75 408.5730285644531 Z M 665.4996337890625 261.1458435058594 L 302.1030578613281 261.1458435058594 L 302.1030578613281 202.1742095947266 L 302.4998779296875 202.1742095947266 L 302.4998779296875 -2.609432522149291e-05 L 362.999755859375 -2.609432522149291e-05 L 362.999755859375 202.1742095947266 L 604.9998779296875 202.1742095947266 L 604.9998779296875 -2.609432522149291e-05 L 665.4996337890625 -2.609432522149291e-05 L 665.4996337890625 261.1458435058594 Z" stroke="none" fill="#c9c9c9"/>
                                </g>
                                <g id="Rectangle_5969" data-name="Rectangle 5969" transform="translate(3331.735 2258)" fill="none" stroke="#c9c9c9" stroke-width="1" opacity="0.6">
                                    <rect width="60.5" height="111.514" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="59.5" height="110.514" fill="none"/>
                                </g>
                            </g>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="375" height="214.999" viewBox="0 0 375 214.999">
                            <g id="Group_22525" data-name="Group 22525" transform="translate(0 -3041)">
                                <g id="Union_29" data-name="Union 29" transform="translate(7229 3064)" fill="none" opacity="0.6">
                                    <path d="M-7229,192V169.2h0V-23h23.436V169.2h328.125V-23H-6854V192Zm292.969-57.007v0h-210.936v0h-23.438V-23h23.438V112.187h210.936V-23h23.438V134.992Zm-58.593-56.826h-117.341V55.322h.154V-23h23.437V55.322h93.75V-23h23.438V78.167Z" stroke="none"/>
                                    <path d="M -6855.0009765625 190.9991912841797 L -6855.0009765625 -21.99910354614258 L -6876.43701171875 -21.99910354614258 L -6876.43701171875 170.1959991455078 L -7206.5625 170.1959991455078 L -7206.5625 -21.99910354614258 L -7227.99853515625 -21.99910354614258 L -7228.00048828125 190.9991912841797 L -6855.0009765625 190.9991912841797 M -6913.59326171875 133.9921417236328 L -6913.59326171875 -21.99910354614258 L -6935.03173828125 -21.99910354614258 L -6935.03173828125 113.1871490478516 L -7147.9677734375 113.1871490478516 L -7147.9677734375 -21.99910354614258 L -7169.40625 -21.99910354614258 L -7169.40625 133.9921417236328 L -6913.59326171875 133.9921417236328 M -6972.18603515625 77.16654205322266 L -6972.18603515625 -21.99910354614258 L -6993.62451171875 -21.99910354614258 L -6993.62451171875 56.32159423828125 L -7089.375 56.32159423828125 L -7089.375 -21.99910354614258 L -7110.8115234375 -21.99910354614258 L -7110.8115234375 56.32159423828125 L -7110.9658203125 56.32159423828125 L -7110.9658203125 77.16654205322266 L -6972.18603515625 77.16654205322266 M -6854.0009765625 191.9991912841797 L -7229.00048828125 191.9991912841797 L -7228.99853515625 -22.99910354614258 L -7205.5625 -22.99910354614258 L -7205.5625 169.1959991455078 L -6877.43701171875 169.1959991455078 L -6877.43701171875 -22.99910354614258 L -6854.0009765625 -22.99910354614258 L -6854.0009765625 191.9991912841797 Z M -6912.59326171875 134.9921417236328 L -7170.40625 134.9903411865234 L -7170.40625 -22.99910354614258 L -7146.9677734375 -22.99910354614258 L -7146.9677734375 112.1871490478516 L -6936.03173828125 112.1871490478516 L -6936.03173828125 -22.99910354614258 L -6912.59326171875 -22.99910354614258 L -6912.59326171875 134.9921417236328 Z M -6971.18603515625 78.16654205322266 L -7111.9658203125 78.16654205322266 L -7111.9658203125 55.32159423828125 L -7111.8115234375 55.32159423828125 L -7111.8115234375 -22.99910354614258 L -7088.375 -22.99910354614258 L -7088.375 55.32159423828125 L -6994.62451171875 55.32159423828125 L -6994.62451171875 -22.99910354614258 L -6971.18603515625 -22.99910354614258 L -6971.18603515625 78.16654205322266 Z" stroke="none" fill="#c9c9c9"/>
                                </g>
                                <g id="Rectangle_5969" data-name="Rectangle 5969" transform="translate(181.586 3041)" fill="none" stroke="#c9c9c9" stroke-width="1" opacity="0.6">
                                    <rect width="23.437" height="43.2" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="22.437" height="42.2" fill="none"/>
                                </g>
                            </g>
                        </svg>

                }

                {
                    data?.section_data?.short_desc &&
                        <div className={'title'} >
                            <h3 >{reactHtmlParser(data?.section_data?.short_desc)}</h3>
                        </div>

                }

                </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    .discover{
      position: relative;
      svg{
        margin-bottom: 30px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
      }
      .title{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items:center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        h3{
          color: #000000;
          font-weight: 600;
        }
      }
    }

  @media(max-width: 767px){
    margin-top: 100px;
    margin-bottom: 100px;
    .title{
      margin-right: 15px;
      margin-left: 15px;
      h3{
        font-size: 38px;
        line-height: 40px;
      }
    }
  }
`;

export default React.memo(MyComponent);
