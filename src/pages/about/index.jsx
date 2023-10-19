import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchData} from "../../api/redux/about";
import Navigating from "../../components/about/Navigating";
import MissionVision from "../../components/about/MissionVision";
import Discover from "../../components/Discover";
import Chairman from "../../components/about/Chairman";
import Management from "../../components/about/Management";

const MyComponent = () => {

    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SECTIONS;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'about',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
            [ApiParamKey.post] : 'yes',
        }

        dispath(fetchData([api_url , api_params]))
    }, [])


    //Refactor Data

    const getData = useSelector((state) => state.about);

    const banner = getData?.posts?.data;
    const navigating = getData?.posts?.data?.sections?.find(e => e?.section_data?.slug === 'navigating-the-real-estate-landscape-with-confidence');
    const missionvision = getData?.posts?.data?.sections?.find(e => e?.section_data?.slug === 'mission-vision')?.posts?.list;
    const discover = getData?.posts?.data?.sections?.find(e => e?.section_data?.slug === 'about-discover');
    const chairman = getData?.posts?.data?.sections?.find(e => e?.section_data?.slug === 'chairman-message');
    const management = getData?.posts?.data?.sections?.find(e => e?.section_data?.slug === 'management-team');


    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>About Us</title>
                <meta name="description" content="Lanco Development Limited is a pioneer real estate company in Bangladesh."/>
            </Helmet>

            <StyledComponent>
                {
                    banner &&
                    <InnerBanner
                        title={banner?.page_data?.title}
                        img={banner?.page_images?.list?.filter(image => image?.desktop === 'on')?.[0]?.full_path}
                        imgMob={banner?.page_images?.list?.filter(image => image?.mobile === 'on')?.[0]?.full_path}
                    />
                }

                <Navigating data={navigating}/>
                <MissionVision data={missionvision}/>
                <Discover data={discover}/>
                <Chairman data={chairman}/>
                <Management data={management}/>
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
