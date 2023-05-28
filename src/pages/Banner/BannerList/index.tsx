import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BannerFilter from './BannerFilter';

const BannerList = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="BannerList" pageTitle="Banner" />
                    <Row>
                        <BannerFilter />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BannerList;