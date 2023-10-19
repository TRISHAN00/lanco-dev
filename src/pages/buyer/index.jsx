import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import Overview from "../../components/Overview";
import BuyerForm from "../../components/buyer/BuyerForm";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";
import {fetchData} from "../../api/redux/buyer";

const MyComponent = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SECTIONS;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'buyer',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
        }

        dispath(fetchData([api_url , api_params]))
    }, [])


    //Refactor Data

    const getData = useSelector((state) => state.buyer);
    const banner = getData?.posts?.data;
    const overview = getData?.posts?.data?.sections?.filter(e => e.section_data?.slug === 'contact-us-for-reliable-real-estate-solution')?.[0];


    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Buyer</title>
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
                <Overview bg={'#000000'} title={overview?.section_data?.title} desc={overview?.section_data?.description}/>
                <BuyerForm/>

            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
