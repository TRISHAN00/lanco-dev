import {useEffect, useLayoutEffect, useRef} from "react";
import {CSSPlugin, gsap} from "gsap";
import {useLocation} from "react-router-dom";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Horizontal = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.utils.toArray(".horizontal-scroll").forEach((item, i) => {
            let getTextRight = item.querySelector('.scroll-right')
            let getTextLeft = item.querySelector('.scroll-left')
            let parallaxSpeedRight = item.getAttribute('data-speed-right');
            let parallaxSpeedLeft = item.getAttribute('data-speed-left');

            gsap.to(getTextRight, {
                xPercent: parallaxSpeedRight ? parallaxSpeedRight : 50,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // start: "left 70%",
                    // end: "left 30%",
                    // horizontal: true,
                    // markers: true,
                    scrub: true
                }
            });

            gsap.to(getTextLeft, {
                xPercent: parallaxSpeedLeft ? parallaxSpeedLeft : -50,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // start: "left 70%",
                    // end: "left 30%",
                    // horizontal: true,
                    // markers: true,
                    scrub: true
                }
            });

            // t1.to(".box1", {
            //     scale: 2,
            //     rotation: 360,
            //     duration: 3
            // });

        });
    }, [location.pathname])



}


// how to use (it will use for parallax image tag)
// 1. Add 'parallax-img' class on the section. Add 'data-speed={speed string/number}' for parallax speed (if needed)


