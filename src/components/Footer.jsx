import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyComponent = () => {
    return (
        <StyledComponent>
            <Container>
                <Row className={'top'}>
                    <Col md={4} className={'left-items'}>
                        <div>
                            <img src={'/images/static/logo-footer.svg'} alt={'footer-logo'}/>

                            <p className={'address'}>
                                <a href="#" target={'_blank'}>
                                    47 Millennium Castle, (11th Floor)<br/>
                                    Road- 27, Block- A, Banani.
                                </a>
                            </p>
                            <p className={'phone'}>
                                <a href="tel:09611-677496" target={'_blank'}>09611-677496</a>
                            </p>
                            <p className={'email'}>
                                <a href="mailto:info@lancodevelopments.com">info@lancodevelopments.com</a>
                            </p>
                            <p className={'copy'}>©2023 Lanco Development.<br/>
                                All rights reserved</p>
                            <ul>
                                <li className={'facebook'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21709" data-name="Group 21709" transform="translate(2463 -486)">
                                            <rect id="Rectangle_5835" data-name="Rectangle 5835" width="19" height="18"
                                                  transform="translate(-2463 486)" fill="#c9c9c9" opacity="0"/>
                                            <g id="facebook-app-symbol" transform="translate(-2458 486)">
                                                <path id="f_1_"
                                                      d="M11.836,18V9.79h2.755L15,6.589H11.836V4.546c0-.926.256-1.558,1.586-1.558h1.693V.125A22.961,22.961,0,0,0,12.648,0,3.856,3.856,0,0,0,8.532,4.229v2.36H5.769v3.2H8.532V18Z"
                                                      transform="translate(-5.769)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li className={'linkedin'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21710" data-name="Group 21710" transform="translate(2416 -485)">
                                            <rect id="Rectangle_5836" data-name="Rectangle 5836" width="19" height="18"
                                                  transform="translate(-2416 485)" fill="#c9c9c9" opacity="0"/>
                                            <g id="_x31_0.Linkedin" transform="translate(-2415 485)">
                                                <path id="Path_6021" data-name="Path 6021"
                                                      d="M23.122,22.9V16.305c0-3.24-.7-5.715-4.478-5.715a3.907,3.907,0,0,0-3.533,1.935h-.045V10.882H11.49V22.9h3.735V16.935c0-1.575.292-3.083,2.227-3.083,1.912,0,1.935,1.778,1.935,3.173v5.85h3.735Z"
                                                      transform="translate(-5.123 -4.897)" fill="#c9c9c9"/>
                                                <path id="Path_6022" data-name="Path 6022"
                                                      d="M3.39,10.98H7.125V23H3.39Z"
                                                      transform="translate(-3.097 -4.995)" fill="#c9c9c9"/>
                                                <path id="Path_6023" data-name="Path 6023"
                                                      d="M5.16,3A2.171,2.171,0,1,0,7.32,5.16,2.161,2.161,0,0,0,5.16,3Z"
                                                      transform="translate(-3 -3)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li className={'youtube'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Group_21711" data-name="Group 21711" transform="translate(2378 -474)">
                                            <rect id="Rectangle_5837" data-name="Rectangle 5837" width="20" height="20"
                                                  transform="translate(-2378 474)" fill="#c9c9c9" opacity="0"/>
                                            <g id="youtube" transform="translate(-2378 477)">
                                                <path id="youtube-2" data-name="youtube"
                                                      d="M19.588,1.963A2.506,2.506,0,0,0,17.825.2C16.26-.228,10-.228,10-.228s-6.26,0-7.825.412A2.556,2.556,0,0,0,.412,1.963,26.4,26.4,0,0,0,0,6.774a26.3,26.3,0,0,0,.412,4.81,2.506,2.506,0,0,0,1.763,1.763c1.581.428,7.825.428,7.825.428s6.26,0,7.825-.412A2.506,2.506,0,0,0,19.588,11.6,26.41,26.41,0,0,0,20,6.79a25.061,25.061,0,0,0-.412-4.827ZM8.007,9.772v-6l5.206,3Zm0,0"
                                                      transform="translate(0 0.228)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li className={'twitter'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21712" data-name="Group 21712" transform="translate(2324 -486)">
                                            <rect id="Rectangle_5838" data-name="Rectangle 5838" width="19" height="18"
                                                  transform="translate(-2324 486)" fill="#c9c9c9" opacity="0"/>
                                            <g id="_x30_4.Twitter" transform="translate(-2323 488)">
                                                <path id="_x30_4.Twitter-2" data-name="_x30_4.Twitter"
                                                      d="M19.733,4.8a7.57,7.57,0,0,1-2.115.585,3.6,3.6,0,0,0,1.62-2.047,7.771,7.771,0,0,1-2.34.9,3.693,3.693,0,0,0-6.39,2.52,3.374,3.374,0,0,0,.09.833A10.387,10.387,0,0,1,3.015,3.738,3.7,3.7,0,0,0,4.14,8.665a3.543,3.543,0,0,1-1.665-.45,3.729,3.729,0,0,0,2.948,3.667,4.05,4.05,0,0,1-1.665.067A3.705,3.705,0,0,0,7.2,14.515a7.434,7.434,0,0,1-5.467,1.53A10.409,10.409,0,0,0,7.4,17.71,10.408,10.408,0,0,0,17.887,7.225a3.323,3.323,0,0,0-.022-.473A7.324,7.324,0,0,0,19.733,4.8Z"
                                                      transform="translate(-1.732 -3.063)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={8} className={'right-items'}>
                        <div className={'right-items__top'}>
                            <Col md={6} className={'right-items__top__buyer'}>
                                <h5>Buyers</h5>
                                <ul>
                                    <li>
                                        <svg id="email_2_-01" data-name="email (2)-01"
                                             xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20">
                                            <path id="Path_9523" data-name="Path 9523"
                                                  d="M0,9.177a2.528,2.528,0,0,0,.108-.659,9.984,9.984,0,0,1,19.614-.742A9.653,9.653,0,0,1,16.6,17.49a9.551,9.551,0,0,1-4.992,2.381c-.256.042-.516.061-.774.091-.035,0-.08-.016-.1.037H9.175c-.022-.061-.076-.037-.116-.042a10.666,10.666,0,0,1-1.4-.235A10.009,10.009,0,0,1,.106,11.457,2.445,2.445,0,0,0,0,10.82Zm.665.8A9.329,9.329,0,1,0,10.01.661,9.343,9.343,0,0,0,.665,9.98Z"
                                                  transform="translate(0 0.001)" fill="#b1b0b0"/>
                                            <path id="Path_9524" data-name="Path 9524"
                                                  d="M157.078,112.05c-.09-.053-.2-.061-.292-.109a1.166,1.166,0,0,1-.676-1.1v-9.159a1.184,1.184,0,0,1,.472-1,1.16,1.16,0,0,1,.728-.235q1.563,0,3.126,0h1.427a1.168,1.168,0,0,1,1.211,1.2c0,.748,0,1.5,0,2.244v6.926a1.183,1.183,0,0,1-.475,1,.98.98,0,0,1-.5.212c-.015,0-.03,0-.035.021Zm5.415-5.793v-4.581a.588.588,0,0,0-.648-.654h-4.509a.748.748,0,0,0-.213.02.586.586,0,0,0-.43.627v9.147a.585.585,0,0,0,.643.648h4.519a.792.792,0,0,0,.2-.02.579.579,0,0,0,.435-.61Q162.493,108.547,162.493,106.258Z"
                                                  transform="translate(-149.593 -96.246)" fill="#b1b0b0"/>
                                            <path id="Path_9525" data-name="Path 9525"
                                                  d="M226.221,328.543a.577.577,0,1,1,.416-.158A.579.579,0,0,1,226.221,328.543Z"
                                                  transform="translate(-216.238 -313.71)" fill="#b1b0b0"/>
                                            <path id="Path_9526" data-name="Path 9526"
                                                  d="M231.168,124.222h-.543a.289.289,0,1,1,0-.576q.555,0,1.109,0a.289.289,0,1,1,0,.576C231.546,124.224,231.357,124.222,231.168,124.222Z"
                                                  transform="translate(-220.694 -118.479)" fill="#b1b0b0"/>
                                            <path id="Path_9527" data-name="Path 9527"
                                                  d="M207.559,124.245a.287.287,0,1,1,.286-.292A.3.3,0,0,1,207.559,124.245Z"
                                                  transform="translate(-198.618 -118.503)" fill="#b1b0b0"/>
                                        </svg>

                                        <a href="tel:+880 1757173757" target={'_blank'}>+880 1757173757</a>
                                    </li>
                                    <li>
                                        <svg id="email_2_-02" data-name="email (2)-02"
                                             xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20">
                                            <path id="Path_9528" data-name="Path 9528"
                                                  d="M0,9.177a2.528,2.528,0,0,0,.108-.659,9.984,9.984,0,0,1,19.614-.742A9.653,9.653,0,0,1,16.6,17.49a9.551,9.551,0,0,1-4.992,2.381c-.256.042-.516.061-.774.091-.035,0-.08-.016-.1.037H9.175c-.022-.061-.076-.037-.116-.042a10.665,10.665,0,0,1-1.4-.235A10.009,10.009,0,0,1,.106,11.457,2.445,2.445,0,0,0,0,10.82Zm.665.8A9.329,9.329,0,1,0,10.01.661,9.343,9.343,0,0,0,.665,9.98Z"
                                                  transform="translate(0 0.001)" fill="#b1b0b0"/>
                                            <path id="Path_9529" data-name="Path 9529"
                                                  d="M124.745,143.6h4.528c.364,0,.461.1.461.462v7.07c0,.365-.1.465-.459.465H120.2c-.364,0-.459-.1-.459-.462v-7.07c0-.366.1-.464.459-.464Zm-4.336,1.061c0,.06-.005.084-.005.108,0,2.005,0,4.011,0,6.016,0,.171.089.148.192.147q4.147,0,8.293,0c.159,0,.187-.048.187-.194q-.007-2.939,0-5.878v-.2c-.081.068-.134.112-.186.157L125.06,148.1c-.273.234-.372.235-.638.006Zm8.067-.376H121c1.236,1.059,2.446,2.1,3.653,3.136.088.076.128.037.191-.017.384-.331.771-.66,1.156-.99Z"
                                                  transform="translate(-114.741 -137.601)" fill="#b1b0b0"/>
                                        </svg>

                                        <a href="mailto:sales@lancodevelopments.com">sales@lancodevelopments.com</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={6} className={'right-items__top__land'}>
                                <h5>Landowners</h5>
                                <ul>
                                    <li>
                                        <svg id="email_2_-01" data-name="email (2)-01"
                                             xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20">
                                            <path id="Path_9523" data-name="Path 9523"
                                                  d="M0,9.177a2.528,2.528,0,0,0,.108-.659,9.984,9.984,0,0,1,19.614-.742A9.653,9.653,0,0,1,16.6,17.49a9.551,9.551,0,0,1-4.992,2.381c-.256.042-.516.061-.774.091-.035,0-.08-.016-.1.037H9.175c-.022-.061-.076-.037-.116-.042a10.666,10.666,0,0,1-1.4-.235A10.009,10.009,0,0,1,.106,11.457,2.445,2.445,0,0,0,0,10.82Zm.665.8A9.329,9.329,0,1,0,10.01.661,9.343,9.343,0,0,0,.665,9.98Z"
                                                  transform="translate(0 0.001)" fill="#b1b0b0"/>
                                            <path id="Path_9524" data-name="Path 9524"
                                                  d="M157.078,112.05c-.09-.053-.2-.061-.292-.109a1.166,1.166,0,0,1-.676-1.1v-9.159a1.184,1.184,0,0,1,.472-1,1.16,1.16,0,0,1,.728-.235q1.563,0,3.126,0h1.427a1.168,1.168,0,0,1,1.211,1.2c0,.748,0,1.5,0,2.244v6.926a1.183,1.183,0,0,1-.475,1,.98.98,0,0,1-.5.212c-.015,0-.03,0-.035.021Zm5.415-5.793v-4.581a.588.588,0,0,0-.648-.654h-4.509a.748.748,0,0,0-.213.02.586.586,0,0,0-.43.627v9.147a.585.585,0,0,0,.643.648h4.519a.792.792,0,0,0,.2-.02.579.579,0,0,0,.435-.61Q162.493,108.547,162.493,106.258Z"
                                                  transform="translate(-149.593 -96.246)" fill="#b1b0b0"/>
                                            <path id="Path_9525" data-name="Path 9525"
                                                  d="M226.221,328.543a.577.577,0,1,1,.416-.158A.579.579,0,0,1,226.221,328.543Z"
                                                  transform="translate(-216.238 -313.71)" fill="#b1b0b0"/>
                                            <path id="Path_9526" data-name="Path 9526"
                                                  d="M231.168,124.222h-.543a.289.289,0,1,1,0-.576q.555,0,1.109,0a.289.289,0,1,1,0,.576C231.546,124.224,231.357,124.222,231.168,124.222Z"
                                                  transform="translate(-220.694 -118.479)" fill="#b1b0b0"/>
                                            <path id="Path_9527" data-name="Path 9527"
                                                  d="M207.559,124.245a.287.287,0,1,1,.286-.292A.3.3,0,0,1,207.559,124.245Z"
                                                  transform="translate(-198.618 -118.503)" fill="#b1b0b0"/>
                                        </svg>

                                        <a href="tel:+880 1757173757" target={'_blank'}>+880 1757173757</a>
                                    </li>
                                    <li>
                                        <svg id="email_2_-02" data-name="email (2)-02"
                                             xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20">
                                            <path id="Path_9528" data-name="Path 9528"
                                                  d="M0,9.177a2.528,2.528,0,0,0,.108-.659,9.984,9.984,0,0,1,19.614-.742A9.653,9.653,0,0,1,16.6,17.49a9.551,9.551,0,0,1-4.992,2.381c-.256.042-.516.061-.774.091-.035,0-.08-.016-.1.037H9.175c-.022-.061-.076-.037-.116-.042a10.665,10.665,0,0,1-1.4-.235A10.009,10.009,0,0,1,.106,11.457,2.445,2.445,0,0,0,0,10.82Zm.665.8A9.329,9.329,0,1,0,10.01.661,9.343,9.343,0,0,0,.665,9.98Z"
                                                  transform="translate(0 0.001)" fill="#b1b0b0"/>
                                            <path id="Path_9529" data-name="Path 9529"
                                                  d="M124.745,143.6h4.528c.364,0,.461.1.461.462v7.07c0,.365-.1.465-.459.465H120.2c-.364,0-.459-.1-.459-.462v-7.07c0-.366.1-.464.459-.464Zm-4.336,1.061c0,.06-.005.084-.005.108,0,2.005,0,4.011,0,6.016,0,.171.089.148.192.147q4.147,0,8.293,0c.159,0,.187-.048.187-.194q-.007-2.939,0-5.878v-.2c-.081.068-.134.112-.186.157L125.06,148.1c-.273.234-.372.235-.638.006Zm8.067-.376H121c1.236,1.059,2.446,2.1,3.653,3.136.088.076.128.037.191-.017.384-.331.771-.66,1.156-.99Z"
                                                  transform="translate(-114.741 -137.601)" fill="#b1b0b0"/>
                                        </svg>

                                        <a href="mailto:sales@lancodevelopments.com">sales@lancodevelopments.com</a>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                        <div className={'right-items__bottom'}>
                            <div className={'right-items__bottom__list'}>
                                <ul>
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'about'}>About</Link></li>
                                    <li><Link to={'project'}>Projects</Link></li>
                                    <li><Link to={'news'}>News & Events</Link></li>
                                    <li><Link to={'contact'}>Contact Us</Link></li>
                                    <li><Link to={'career'}>Career</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={'bottom'}>
                    <Col md={4} className={'social__left'}>
                        <ul>
                            <li className={'facebook'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                    <g id="Group_21709" data-name="Group 21709" transform="translate(2463 -486)">
                                        <rect id="Rectangle_5835" data-name="Rectangle 5835" width="19" height="18"
                                              transform="translate(-2463 486)" fill="#c9c9c9" opacity="0"/>
                                        <g id="facebook-app-symbol" transform="translate(-2458 486)">
                                            <path id="f_1_"
                                                  d="M11.836,18V9.79h2.755L15,6.589H11.836V4.546c0-.926.256-1.558,1.586-1.558h1.693V.125A22.961,22.961,0,0,0,12.648,0,3.856,3.856,0,0,0,8.532,4.229v2.36H5.769v3.2H8.532V18Z"
                                                  transform="translate(-5.769)" fill="#c9c9c9"/>
                                        </g>
                                    </g>
                                </svg>
                            </li>
                            <li className={'linkedin'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                    <g id="Group_21710" data-name="Group 21710" transform="translate(2416 -485)">
                                        <rect id="Rectangle_5836" data-name="Rectangle 5836" width="19" height="18"
                                              transform="translate(-2416 485)" fill="#c9c9c9" opacity="0"/>
                                        <g id="_x31_0.Linkedin" transform="translate(-2415 485)">
                                            <path id="Path_6021" data-name="Path 6021"
                                                  d="M23.122,22.9V16.305c0-3.24-.7-5.715-4.478-5.715a3.907,3.907,0,0,0-3.533,1.935h-.045V10.882H11.49V22.9h3.735V16.935c0-1.575.292-3.083,2.227-3.083,1.912,0,1.935,1.778,1.935,3.173v5.85h3.735Z"
                                                  transform="translate(-5.123 -4.897)" fill="#c9c9c9"/>
                                            <path id="Path_6022" data-name="Path 6022" d="M3.39,10.98H7.125V23H3.39Z"
                                                  transform="translate(-3.097 -4.995)" fill="#c9c9c9"/>
                                            <path id="Path_6023" data-name="Path 6023"
                                                  d="M5.16,3A2.171,2.171,0,1,0,7.32,5.16,2.161,2.161,0,0,0,5.16,3Z"
                                                  transform="translate(-3 -3)" fill="#c9c9c9"/>
                                        </g>
                                    </g>
                                </svg>
                            </li>
                            <li className={'youtube'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="Group_21711" data-name="Group 21711" transform="translate(2378 -474)">
                                        <rect id="Rectangle_5837" data-name="Rectangle 5837" width="20" height="20"
                                              transform="translate(-2378 474)" fill="#c9c9c9" opacity="0"/>
                                        <g id="youtube" transform="translate(-2378 477)">
                                            <path id="youtube-2" data-name="youtube"
                                                  d="M19.588,1.963A2.506,2.506,0,0,0,17.825.2C16.26-.228,10-.228,10-.228s-6.26,0-7.825.412A2.556,2.556,0,0,0,.412,1.963,26.4,26.4,0,0,0,0,6.774a26.3,26.3,0,0,0,.412,4.81,2.506,2.506,0,0,0,1.763,1.763c1.581.428,7.825.428,7.825.428s6.26,0,7.825-.412A2.506,2.506,0,0,0,19.588,11.6,26.41,26.41,0,0,0,20,6.79a25.061,25.061,0,0,0-.412-4.827ZM8.007,9.772v-6l5.206,3Zm0,0"
                                                  transform="translate(0 0.228)" fill="#c9c9c9"/>
                                        </g>
                                    </g>
                                </svg>
                            </li>
                            <li className={'twitter'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                    <g id="Group_21712" data-name="Group 21712" transform="translate(2324 -486)">
                                        <rect id="Rectangle_5838" data-name="Rectangle 5838" width="19" height="18"
                                              transform="translate(-2324 486)" fill="#c9c9c9" opacity="0"/>
                                        <g id="_x30_4.Twitter" transform="translate(-2323 488)">
                                            <path id="_x30_4.Twitter-2" data-name="_x30_4.Twitter"
                                                  d="M19.733,4.8a7.57,7.57,0,0,1-2.115.585,3.6,3.6,0,0,0,1.62-2.047,7.771,7.771,0,0,1-2.34.9,3.693,3.693,0,0,0-6.39,2.52,3.374,3.374,0,0,0,.09.833A10.387,10.387,0,0,1,3.015,3.738,3.7,3.7,0,0,0,4.14,8.665a3.543,3.543,0,0,1-1.665-.45,3.729,3.729,0,0,0,2.948,3.667,4.05,4.05,0,0,1-1.665.067A3.705,3.705,0,0,0,7.2,14.515a7.434,7.434,0,0,1-5.467,1.53A10.409,10.409,0,0,0,7.4,17.71,10.408,10.408,0,0,0,17.887,7.225a3.323,3.323,0,0,0-.022-.473A7.324,7.324,0,0,0,19.733,4.8Z"
                                                  transform="translate(-1.732 -3.063)" fill="#c9c9c9"/>
                                        </g>
                                    </g>
                                </svg>
                            </li>
                        </ul>
                        <p>
                            Designed & Developed by <a href={'https://dcastalia.com/'} target={'_blank'}>Dcastalia</a>
                        </p>
                    </Col>
                    <Col md={8} className={'social__right'}>
                        <ul>
                            <li className={'facebook'}>
                                <a target="_blank" href="https://www.facebook.com/lancodevelopments/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21709" data-name="Group 21709" transform="translate(2463 -486)">
                                            <rect id="Rectangle_5835" data-name="Rectangle 5835" width="19" height="18"
                                                  transform="translate(-2463 486)" fill="#c9c9c9" opacity="0"/>
                                            <g id="facebook-app-symbol" transform="translate(-2458 486)">
                                                <path id="f_1_"
                                                      d="M11.836,18V9.79h2.755L15,6.589H11.836V4.546c0-.926.256-1.558,1.586-1.558h1.693V.125A22.961,22.961,0,0,0,12.648,0,3.856,3.856,0,0,0,8.532,4.229v2.36H5.769v3.2H8.532V18Z"
                                                      transform="translate(-5.769)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className={'linkedin'}>
                                <a target="_blank" href="https://bd.linkedin.com/company/lancodevelopmentsltd">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21710" data-name="Group 21710" transform="translate(2416 -485)">
                                            <rect id="Rectangle_5836" data-name="Rectangle 5836" width="19" height="18"
                                                  transform="translate(-2416 485)" fill="#c9c9c9" opacity="0"/>
                                            <g id="_x31_0.Linkedin" transform="translate(-2415 485)">
                                                <path id="Path_6021" data-name="Path 6021"
                                                      d="M23.122,22.9V16.305c0-3.24-.7-5.715-4.478-5.715a3.907,3.907,0,0,0-3.533,1.935h-.045V10.882H11.49V22.9h3.735V16.935c0-1.575.292-3.083,2.227-3.083,1.912,0,1.935,1.778,1.935,3.173v5.85h3.735Z"
                                                      transform="translate(-5.123 -4.897)" fill="#c9c9c9"/>
                                                <path id="Path_6022" data-name="Path 6022"
                                                      d="M3.39,10.98H7.125V23H3.39Z"
                                                      transform="translate(-3.097 -4.995)" fill="#c9c9c9"/>
                                                <path id="Path_6023" data-name="Path 6023"
                                                      d="M5.16,3A2.171,2.171,0,1,0,7.32,5.16,2.161,2.161,0,0,0,5.16,3Z"
                                                      transform="translate(-3 -3)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className={'youtube'}>
                                <a target="_blank" href="https://www.youtube.com/c/lancodevelopments">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Group_21711" data-name="Group 21711" transform="translate(2378 -474)">
                                            <rect id="Rectangle_5837" data-name="Rectangle 5837" width="20" height="20"
                                                  transform="translate(-2378 474)" fill="#c9c9c9" opacity="0"/>
                                            <g id="youtube" transform="translate(-2378 477)">
                                                <path id="youtube-2" data-name="youtube"
                                                      d="M19.588,1.963A2.506,2.506,0,0,0,17.825.2C16.26-.228,10-.228,10-.228s-6.26,0-7.825.412A2.556,2.556,0,0,0,.412,1.963,26.4,26.4,0,0,0,0,6.774a26.3,26.3,0,0,0,.412,4.81,2.506,2.506,0,0,0,1.763,1.763c1.581.428,7.825.428,7.825.428s6.26,0,7.825-.412A2.506,2.506,0,0,0,19.588,11.6,26.41,26.41,0,0,0,20,6.79a25.061,25.061,0,0,0-.412-4.827ZM8.007,9.772v-6l5.206,3Zm0,0"
                                                      transform="translate(0 0.228)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className={'twitter'}>
                                <a target="_blank" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
                                        <g id="Group_21712" data-name="Group 21712" transform="translate(2324 -486)">
                                            <rect id="Rectangle_5838" data-name="Rectangle 5838" width="19" height="18"
                                                  transform="translate(-2324 486)" fill="#c9c9c9" opacity="0"/>
                                            <g id="_x30_4.Twitter" transform="translate(-2323 488)">
                                                <path id="_x30_4.Twitter-2" data-name="_x30_4.Twitter"
                                                      d="M19.733,4.8a7.57,7.57,0,0,1-2.115.585,3.6,3.6,0,0,0,1.62-2.047,7.771,7.771,0,0,1-2.34.9,3.693,3.693,0,0,0-6.39,2.52,3.374,3.374,0,0,0,.09.833A10.387,10.387,0,0,1,3.015,3.738,3.7,3.7,0,0,0,4.14,8.665a3.543,3.543,0,0,1-1.665-.45,3.729,3.729,0,0,0,2.948,3.667,4.05,4.05,0,0,1-1.665.067A3.705,3.705,0,0,0,7.2,14.515a7.434,7.434,0,0,1-5.467,1.53A10.409,10.409,0,0,0,7.4,17.71,10.408,10.408,0,0,0,17.887,7.225a3.323,3.323,0,0,0-.022-.473A7.324,7.324,0,0,0,19.733,4.8Z"
                                                      transform="translate(-1.732 -3.063)" fill="#c9c9c9"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <p className={'copy'}>©2023 Lanco Development. All rights reserved</p>
                        <p>
                            Designed & Developed by <a href={'https://dcastalia.com/'} target={'_blank'}>Dcastalia</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #1B1C23;
  border-top: 5px solid #18A354;
  padding-top: 80px;
  padding-bottom: 60px;

  .top {
    flex-direction: row;
  }

  .left-items {

    h5 {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      color: #F9F9F9;
    }

    .address {
      margin-bottom: 0;
      margin-top: 40px;

      a {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #C9C9C9;
      }
    }

    .phone {
      margin-bottom: 0;

      a {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #C9C9C9;
      }
    }

    .email {
      margin-bottom: 0;

      a {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #C9C9C9;
      }
    }

    .copy {
      color: #8B8B8B;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
      margin-top: 35px;
      margin-bottom: 30px;
    }

    ul {
      display: none;
    }
  }

  .right-items {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    justify-content: space-between;

    &__top {
      display: flex;
      margin-bottom: 80px;

      h5 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 15px;
      }

      ul {
        li {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-bottom: 7px;

          a {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: #B1B0B0;
          }

          svg {
            margin-right: 10px;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      &__buyer {
        //margin-right: 150px;
        padding-left: 0;
      }
    }

    &__bottom {
      position: relative;
      padding-top: 35px;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      //&:after{
      //  position: absolute;
      //  content: '';
      //  top: 0;
      //  left: 0;
      //  height: .5px;
      //  width: 100%;
      //  background-color: #FFFFFF;
      //  opacity: 50%;
      //}
      &__list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
          margin-bottom: 10px;

          li {
            a {
              font-size: 14px;
              line-height: 20px;
              color: #F9F9F9;
            }
          }
        }
      }
    }
  }

  .social__left {
    opacity: 0;

    p {
      margin-top: 20px;
    }

    ul {
      display: flex;

      li {
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .social__right {
    p {
      margin-top: 20px;
      font-size: 12px;
      line-height: 20px;
      color: #8B8B8B;

      a {
        color: #8B8B8B;
      }
    }

    ul {
      display: flex;

      li {
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .copy {
      display: none;
    }
  }

  @media (max-width: 768px) {
    border-top: 0;
    padding-top: 60px;
    padding-bottom: 40px;
    .top {
      .left-items {
        margin-bottom: 80px;

        .copy {
          display: none;
        }

        ul {
          margin-top: 40px;
          display: flex;

          li {
            margin-right: 30px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }

    .right-items {
      &__top {
        margin-bottom: 60px;
        display: block;

        &__buyer {
          padding-left: 0;
          margin-bottom: 40px;
        }

        &__land {
          padding-left: 0;
        }
      }

      &__bottom {
        padding-top: 40px;

        &__list {
          ul {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
    }

    .bottom {
      .social__left {
        display: none;
      }

      .social__right {
        ul {
          display: none;
        }

        .copy {
          display: unset;
          width: 100%;
        }

        p {
          margin-top: 0;
        }
      }
    }
  }
`;

export default React.memo(MyComponent);
