import React, {useEffect} from 'react';
import styled from "styled-components";
import { useParams, useRouteMatch} from "react-router-dom";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import OurStory from "../../components/OurStory";
import BusinessSlider from "../../components/business units/BusinessSlider";
import BusinessVideo from "../../components/business units/BusinessVideo";
import ProductSlider from "../../components/business units/ProductSlider";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchPostDetail} from "../../api/redux/business";

const MyComponent = () => {
    const dispath = useDispatch()

    let {slug} = useParams();
    // api call
    useEffect(() => {
        let api_url = apiEndPoints.CHILD_PAGE;

        let api_params = {
            [ApiParamKey.pageID]: '21',
            [ApiParamKey.sections]: 'yes',
            [ApiParamKey.image]: 'yes',
            [ApiParamKey.post] : 'yes',

        }

        dispath(fetchPostDetail([api_url , api_params]))
    }, [])


    //Refactor Data

    const getData = useSelector((state) => state.business);

    const filteredlist = getData?.detail?.data?.list?.filter((e) => e?.page_data?.slug === 'sheygun-interior')?.[0];

    const banner = filteredlist?.sections.filter((e) => e?.section_data?.slug === 'inner-banner-sheygun-smart-living')?.[0];
    const story = filteredlist?.sections.filter((e) => e?.section_data?.slug === 'designing-every-dimension-for-an-escalated-lifestyle')?.[0];
    const business = filteredlist?.sections.filter((e) => e?.section_data?.slug === 'business-slider-sheygun-smart-living')?.[0];
    const video = filteredlist?.sections.filter((e) => e?.section_data?.slug === 'shagu-interior-video')?.[0];
    const product = filteredlist?.sections.filter((e) => e?.section_data?.slug === 'shagun-interior-our-products')?.[0];



    const match = useRouteMatch("/business/lanco-easy-term");
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{filteredlist?.page_data?.title}</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                {
                    filteredlist?.page_data?.title && banner &&
                    <InnerBanner
                        uppercase
                        title={filteredlist?.page_data?.title}
                        img={banner?.images?.list?.filter(image => image?.desktop === 'on')?.[0]?.full_path}
                        imgMob={banner?.images?.list?.filter(image => image?.mobile === 'on')?.[0]?.full_path}
                    />
                }
                {
                    story &&
                    <OurStory src data={story}/>
                }
                {
                    business &&
                    <BusinessSlider data={business}/>
                }
                {
                    video &&
                    <BusinessVideo data={video}/>
                }
                {
                    product &&
                    <ProductSlider data={product}/>
                }
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
