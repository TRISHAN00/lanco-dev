import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export const Parallax = () => {
    const location = useLocation();

    useEffect(() => {
        let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

        gsap.utils.toArray(".parallax").forEach((section, i) => {
            section.bg = section.querySelector(".parallax-bg");
            let parallaxSpeed = section.getAttribute('data-speed');

            gsap.fromTo(section.bg, {
                backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
            }, {
                backgroundPosition: () => `50% ${parallaxSpeed ? parallaxSpeed + 'px' : '150px'}`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    // start: () => i ? "top bottom" : "top top",
                    // end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true // to make it responsive
                }
            });

        });
    }, [location.pathname])
}


/* how to use
 - Add 'parallax' class on the parent section. Add 'data-speed={speed string/number}' for parallax speed (if needed)
 - Add 'parallax' props on Img component.
*/


export const ParallaxImg = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.utils.toArray(".parallax-img").forEach((item, i) => {
            let getImg = item.querySelector('img')
            let parallaxSpeed = item.getAttribute('data-speed');
            gsap.to(getImg, {
                yPercent: parallaxSpeed ? parallaxSpeed : 15,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    scrub: true
                }
            });
        });

    }, [location.pathname])

}

/*
How to use:
- add 'parallax-img' to the parent div of Img component/img tag
- Add 'data-speed={speed string/number}' for parallax speed (if needed)
*/
