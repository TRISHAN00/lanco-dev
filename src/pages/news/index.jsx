import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import NewsListing from "../../components/news/NewsListing";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchPosts} from "../../api/redux/news";

const MyComponent = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SECTIONS;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'news-events',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
        }

        dispath(fetchPosts([api_url , api_params]))
    }, [])

    //Refactor Data

    const getData = useSelector((state) => state.news);
    const banner = getData?.posts?.data;
    const news = getData?.posts?.news_list;
    window.ResizeObserver = undefined;
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>News & Events</title>
                <meta name="description" content="Description"/>
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
                <NewsListing data={news}/>

            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
