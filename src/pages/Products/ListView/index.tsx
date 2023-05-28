import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

//import Components
import ProductFilter from './ProductFilter';

const ListView = () => {

    document.title = "Properties List | Dreamers Property Limited";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Properties List" pageTitle="Properties" />
                    <Row>
                        <ProductFilter />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ListView;