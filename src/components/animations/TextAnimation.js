import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
gsap.registerPlugin(SplitText,ScrollTrigger);

export const SplitUp = () => {
    const location = useLocation();

    let getPost = useSelector((state) => state);

    useEffect(() => {
        // Check if the screen width is less than a certain value (e.g., 768px for mobile devices)
        if (window.innerWidth > 768) {
            gsap.utils.toArray(".split-up").forEach((item, i) => {
                const parentSplit = new SplitText(item, {
                    wordsClass: "split-parent",
                    type: "words",
                });
                const childSplit = new SplitText(item, {
                    type: "words",
                    wordsClass: "split-child",
                });

                const tl = gsap.timeline();

                childSplit.words.forEach((i) => {
                    i.parentNode.style.height = i.clientHeight + "px";
                    i.parentNode.style.overflow = "hidden";
                });

                gsap.from(childSplit.words, {
                    duration: 1,
                    yPercent: 150,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: item,
                        toggleActions: "restart none none reset",
                        end: `+ ${item.clientHeight}`,
                    },
                });
            });
        }
    }, [location.pathname, getPost]);

};
