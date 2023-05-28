import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductTable from './ProductTable';

const ProductFilter = () => {
  return (
    <React.Fragment>
      

      <Col xl={12} lg={12}>
        <ProductTable />
      </Col>
    </React.Fragment>
  );
};

export default ProductFilter;
