import React, {useEffect} from 'react';
import styled from "styled-components";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchData} from "../../api/redux/contact";
import Address from "../../components/contact/Address";
import Map from "../../components/Map";
import {ApiParam as ApiParamKey} from "../../api/network/apiParams";

const MyComponent = () => {
    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SECTIONS;

        let api_params = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'contact-us',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
            [ApiParamKey.post]: 'yes',
        }

        dispath(fetchData([api_url , api_params]))
    }, [])

    //Refactor Data

    const getData = useSelector((state) => state.contact);

    const banner = getData?.posts?.data;
    const address = getData?.posts?.data?.sections?.filter(e => e?.section_data?.slug === 'contact-us-for-reliable-real-estate-solutions')?.[0];
    const map = getData?.posts?.data?.sections?.filter(e => e?.section_data?.slug === 'map-form')?.[0];

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Contact Us</title>
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

                <Address data={address}/>
                <Map img={map?.images?.list?.[0]?.full_path} link={map?.images?.list?.[0]?.short_title} />
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default React.memo(MyComponent);
