import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

export const Img = ({
                        src,
                        position,
                        objectFit,
                        height,
                        width,
                        alt,
                        left,
                        margin,
                        right,
                        top,
                        bottom,
                    }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const imgRef = useRef(null);

    const onImageLoad = () => {
        gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Image is in the viewport
                if (imageSrc !== src) {
                    // Check if src is not already set
                    setImageSrc(src);
                }
                observer.unobserve(entry.target); // Stop observing once the image is in view
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1, // 10% of the image must be in the viewport
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            // Cleanup the observer when the component unmounts
            observer.disconnect();
        };
    }, [src]);

    return (
        <StyledImg
            className="global-image"
            objectFit={objectFit}
            margin={margin}
            position={position}
            left={left}
            right={right}
            top={top}
            bottom={bottom}
            height={height}
            width={width}
        >
            <img
                loading="lazy"
                ref={imgRef}
                src={imageSrc || '/images/static/blur-bg.svg'}
                alt={alt || ''}
                onLoad={onImageLoad}
            />
        </StyledImg>
    );
};


const StyledImg = styled.div`
  position: ${(props) => props.position || 'absolute'};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  bottom: ${(props) => props.bottom || 0};
  right: ${(props) => props.right || 0};
  margin: ${(props) => props.margin || 0};

  .lazyload-wrapper {
  position: ${(props) => props.position || 'absolute'};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  bottom: ${(props) => props.bottom || 0};
  right: ${(props) => props.right || 0};
  margin: ${(props) => props.margin || 0};


  }

  img {
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.objectFit || 'cover'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}`;
