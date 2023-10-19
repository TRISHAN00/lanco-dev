import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import TabWithAccordion from "../../components/career/TabWithAccordion";
import CareerStory from "../../components/career/CareerStory";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchPosts} from "../../api/redux/career";

const Career = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SECTIONS;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'career',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
        }

        dispath(fetchPosts([api_url , api_params]))
    }, [])


    //Refactor Data

    const getData = useSelector((state) => state.career);

    const story = getData?.posts?.data?.sections[0];

    const job = getData?.posts?.job_list;

    const banner = getData?.posts?.data;

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Career</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                {
                    banner &&
                    <InnerBanner
                        title={banner?.page_data?.title}
                        img={banner?.page_images?.list?.filter(image => image?.desktop === 'on')?.[0]?.full_path}
                        imgMob={banner?.page_images?.list?.filter(image => image?.desktop === 'on')?.[0]?.full_path}
                    />
                }

                {
                    story &&
                    <CareerStory data={story}/>
                }
                <TabWithAccordion data={job}/>
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default Career;
