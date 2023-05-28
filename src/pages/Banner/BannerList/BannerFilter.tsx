import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerTable from './BannerTable';

const BannerFilter = () => {
    return (
        <React.Fragment>
            <Col xl={12} lg={12}>
                <BannerTable />
            </Col>
        </React.Fragment>
    );
};

export default BannerFilter;