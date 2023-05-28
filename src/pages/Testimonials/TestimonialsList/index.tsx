import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialsFilter from './TestimonialsFilter';

const TestimonialsDashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Testimonials" pageTitle="Testimonials" />
                    <Row>
                        <TestimonialsFilter />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TestimonialsDashboard;