import React, {useEffect} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import NewsDetails from "../../components/news/NewsDetails";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchPostDetail} from "../../api/redux/news";
import RelatedNews from "../../components/news/RelatedNews";

const MyComponent = () => {
    const dispath = useDispatch()

    let {slug} = useParams();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.BLOG_DATA;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: `${slug}`,
            [ApiParamKey.sections]: 'yes',
            [ApiParamKey.image]: 'yes',
        }

        dispath(fetchPostDetail([api_url , api_params]))
    }, [])

    //Refactor Data

    const getData = useSelector((state) => state.news);


    const id = getData?.detail?.data?.data?.id;



    const details = getData?.detail?.data;
    const related = getData?.detail?.relatedNews?.filter(a => a.data?.id !== id);
    console.log(related)
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>News Details</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <NewsDetails data={details}/>
                {
                    related?.length>0 ?
                        <RelatedNews data={related}/>
                                     :''
                }


            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
