import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import CompletedProject from "../../components/home/CompletedProject";
import Completed from "../../components/home/Completed";
import {fetchData} from "../../api/redux/home";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import Loadable from 'react-loadable';
import Discover from "../../components/Discover";
import FindProperty from "../../components/home/FindProperty";
import { useInView } from 'react-intersection-observer';




const LoadableBanner = Loadable({
    loader: () => import("../../components/home/HomeBanner"),
    loading() {
        return <div>Loading...</div>
    }
});

const LoadableAbout = Loadable({
    loader: () => import("../../components/home/AboutLanco"),
    loading() {
        return <div>Loading...</div>
    }
});

const LoadableBusiness = Loadable({
    loader: () => import("../../components/BusinessUnitsSlider"),
    loading() {
        return <div>Loading...</div>
    }
});


const LoadableFeatured = Loadable({
    loader: () => import("../../components/home/OngoingProject"),
    loading() {
        return <div>Loading...</div>
    }
});


const LoadableNews = Loadable({
    loader: () => import("../../components/home/NewsEv" +
    "ents"),
    loading() {
        return <div>Loading...</div>
    }
});




const Home = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures it triggers only once
        rootMargin: '0px 0px 100px 0px', // Adjust this margin as needed
    });


    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.HOME;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'home',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
        }

        dispath(fetchData([api_url , api_params]))
    }, [])


    //Refactor Data

    const getData = useSelector((state) => state.home);




    const homebanner = getData?.posts?.sliderProducts?.list;
    const about = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'about-lanco-development')?.[0];
    const property = getData?.posts?.location_list;
    const completed = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'completed-projects')?.[0];
    const completedProject =getData?.posts?.completedProducts?.list;
    const ongoingProject = getData?.posts?.ongoingProducts?.list;
    const ongoing = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'featured-projects')?.[0];
    const discover = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'discover')?.[0];
    const featureNews = getData?.posts?.featuredNews;
    const business = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'business-units')?.[0];
    const businessList = getData?.posts?.businessUnits;


    return (
        <StyledSection ref={ref}>

            {
                 homebanner &&
                <LoadableBanner data={homebanner}/>
            }

            {
               about &&
                <LoadableAbout data={about}/>
            }
            {
                property &&
                <FindProperty data={property}/>
            }
            {
                 completed &&
                <Completed data={completed}/>
            }
            {
                 completedProject &&
                <CompletedProject data={completedProject}/>
            }
            {
                ongoing && ongoingProject &&
                <LoadableFeatured data={ongoing} list={ongoingProject}/>
            }
            {
                 discover &&
                <Discover data={discover}/>
            }
            {
                 featureNews &&
                <LoadableNews data={featureNews}/>
            }
            {
                business && businessList &&
                <LoadableBusiness data={business} list={businessList}/>
            }

        </StyledSection>
    );
};

const StyledSection = styled.section`
    
`;

export default Home;
