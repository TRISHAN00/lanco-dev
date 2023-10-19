import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { apiEndPoints } from '../../api/network/apiEndPoints';
import { useDispatch, useSelector } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import InnerBanner from '../../components/InnerBanner';
import ProjectList from '../../components/project/PorjectList';
import { ApiParam as ApiParamKey } from '../../api/network/apiParams';
import { fetchPosts, fetchPostList } from '../../api/redux/project';
import { useLocation, useHistory } from 'react-router-dom';

const MyComponent = () => {
    // Get the query and history
    const location = useLocation();
    const history = useHistory();

    const project_status = new URLSearchParams(location?.search).get('status');
    const project_location = new URLSearchParams(location?.search).get('location');

    // selected filter values
    const [selectedType, setSelectedType] = useState(project_status);
    const [selectedLocation, setSelectedLocation] = useState(project_location);
    const [selectedStatus, setSelectedStatus] = useState('');

    const dispatch = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.PRODUCT_CAT;

        let api_params = {
            [ApiParamKey.category]: selectedType,
            [ApiParamKey.type]: selectedStatus,
            [ApiParamKey.location]: selectedLocation,
            [ApiParamKey.image]: 'yes',
        };

        dispatch(fetchPostList([api_url, api_params]));

        let api_page = apiEndPoints.SECTIONS;
        let api_param = {
            [ApiParamKey.type]: 'slug',
            [ApiParamKey.value]: 'projects',
            [ApiParamKey.get_section]: 'yes',
            [ApiParamKey.image]: 'yes',
            [ApiParamKey.post]: 'yes',
        };

        dispatch(fetchPosts([api_page, api_param]));

        // Update the URL when selectedType, selectedLocation, or selectedStatus change
        const searchParams = new URLSearchParams();
        if (selectedType) searchParams.set('status', selectedType);
        if (selectedLocation) searchParams.set('location', selectedLocation);
        if (selectedStatus) searchParams.set('selectedStatus', selectedStatus);
        history.push({ search: searchParams.toString().toLowerCase() });
    }, [selectedType, selectedLocation, selectedStatus, history, dispatch]);

    // Refactor Data
    const getData = useSelector((state) => state.project);
    const page = getData?.posts;
    const project = getData?.projectPosts?.data;
    const filter = getData?.projectPosts?.filter;
    window.ResizeObserver = undefined;
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <meta name="description" content="Lanco Development Limited is a pioneer real estate company in Bangladesh." />
            </Helmet>

            <StyledComponent>
                {page?.data?.page_data?.title && (
                    <InnerBanner
                        title={page?.data?.page_data?.title}
                        img={page?.data?.page_images?.list?.filter((image) => image?.desktop === 'on')?.[0]?.full_path}
                        imgMob={page?.data?.page_images?.list?.filter((image) => image?.mobile === 'on')?.[0]?.full_path}
                    />
                )}

                <ProjectList
                    data={project}
                    filter={filter}
                    setSelectedType={setSelectedType} // Pass setSelectedType as a prop
                    selectedType={selectedType}
                    setSelectedLocation={setSelectedLocation} // Pass setSelectedLocation as a prop
                    selectedLocation={selectedLocation}
                    setSelectedStatus={setSelectedStatus} // Pass setSelectedStatus as a prop
                    selectedStatus={selectedStatus}
                />
            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section``;

export default MyComponent;
