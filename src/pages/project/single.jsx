
import React, {useEffect, useLayoutEffect} from 'react';
import styled from "styled-components";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import ProjectBanner from "../../components/project/ProjectBanner";
import Overview from "../../components/Overview";
import AtaGlance from "../../components/project/AtaGlance";
import StickyMenu from "../../components/project/StickyMenu";
import FeatureAmenities from "../../components/project/FeatureAmenities";
import PhotoHighlight from "../../components/project/PhotoHighlight";
import FloorPlan from "../../components/project/FloorPlan";
import Map from "../../components/Map";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchPostDetail} from "../../api/redux/project";
import {useParams} from "react-router-dom";
import RelatedProject from "../../components/project/RelatedProject";


const MyComponent = () => {


    const dispath = useDispatch()

    let {slug} = useParams();
    // api call
    useEffect(() => {
        let api_url = apiEndPoints.PRODUCT_DATA;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: `${slug}`,
            [ApiParamKey.image]: 'yes',
            [ApiParamKey.post]: 'yes',
        }

        dispath(fetchPostDetail([api_url , api_params]))
    }, [])



    //sticky inner menu

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const innerMenu = document.querySelector('.inner-menu');
        if (innerMenu) {
            gsap.to(innerMenu, {
                scrollTrigger: {
                    trigger: innerMenu,
                    start: 'top top',
                    end: 'max',
                    pin: true,
                    pinSpacing: false,
                },
            });
        }
    }, []);

    //Refactor Data

    const getData = useSelector((state) => state.project);



    const banner = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'labonis-dream');
    const overview = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'a-comprehensive-overview-of-our-visionary-real-estate-project');
    const glance = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'at-a-glance');
    const photohighlight = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'photo-highlights');
    const feature = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'features-amenities');
    const fllorplan = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'floor-plan');
    const map = getData?.detail?.data?.posts?.list.filter(e => e?.data?.slug === 'maps')?.[0];
    const related = getData?.detail?.relatedProjects?.list;


    return (

        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{getData?.detail?.title ? getData?.detail?.title : 'Project Details'}</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <ProjectBanner data={banner}/>
                <Overview src data={overview}/>
                <StickyMenu />
                <AtaGlance data={glance}/>
                <PhotoHighlight data={photohighlight}/>
                <FeatureAmenities data={feature}/>
                <FloorPlan data={fllorplan}/>
                <Map link={map?.images?.[0]?.short_title} img={map?.images?.[0]?.full_path}/>
                {
                    related?.length > 0 ?
                        <RelatedProject data={related}/>
                        : ''
                }

            </StyledComponent>
        </HelmetProvider>

    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
