import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchPosts} from "../../api/redux/post";

const MyComponent = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.POSTS
        dispath(fetchPosts([api_url]))
    }, [])

    let getPost = useSelector(state => state.posts)
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Business Units</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <InnerBanner/>

            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
