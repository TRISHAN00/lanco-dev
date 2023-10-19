import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import {Container} from "react-bootstrap";
import InnerBanner from "../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../api/network/apiEndPoints";
import {fetchPosts} from "../api/redux/post";
import OurStory from "../components/OurStory";
import BusinessUnitsSlider from "../components/BusinessUnitsSlider";
import ConsultationForm from "../components/ConsultationForm";
import Test from "../components/Test";

const MyComponent = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.HOME
        dispath(fetchPosts([api_url]))
    }, [])

    let getPost = useSelector(state => state.posts)
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Title</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <Test/>
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`
    h1{
      color: #000;
    }
`;

export default MyComponent;
