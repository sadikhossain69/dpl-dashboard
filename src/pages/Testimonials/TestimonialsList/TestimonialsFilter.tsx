import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TestimonialsTable from './TestimonialsTable';

const TestimonialsFilter = () => {

    document.title = 'Testimonials List | Dreamers Property Limited';

    return (
        <React.Fragment>
            <Col xl={12} lg={12}>
                <TestimonialsTable />
            </Col>
        </React.Fragment>
    );
};

export default TestimonialsFilter;