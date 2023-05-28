import React, { useEffect, useMemo, useState } from 'react';

import TableContainer from 'Common/TableContainer';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CustomAPI from 'utils/CustomAPI';
import toast, { Toaster } from 'react-hot-toast';
// import { productList } from 'Common/data';

const TestimonialsTable = () => {
    
    const [productList, setProductList] = useState<any>([]);

    const getProducts = async () => {
        const {data} = await CustomAPI.get('/testimonial/list')
        setProductList(data.data)
    }

    const deleteProduct = async (id: any) => {
        const res = await CustomAPI.delete(`/testimonial/delete/${id}`)
        if(res.status === 200){
            toast.success('Testimonial deleted successfully! & please reload the page see the changes.')
        }
        return res
    }

    useEffect(() => {
        getProducts()
    }, [])

    const columns = useMemo(() => [
        {
            Header: "Profile",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <img src={cellProps.profile} width={30} alt="" />
                    </span>
                )
            }
        },
        {
            Header: "Name",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <span className="">{cellProps.name}</span>
                    </span>
                )
            }
        },
        {
            Header: "Designation",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <span className="">{cellProps.designation}</span>
                    </span>
                )
            }
        },
        {
            Header: "Description",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <span className="">{cellProps.description}</span>
                    </span>
                )
            }
        },
        {
            Header: "Action",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <span onClick={() => deleteProduct(cellProps._id)} className="btn btn-danger">Delete</span>
                        <Toaster />
                    </span>
                )
            }
        },
        {
            Header: "Modify",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <Link to={`/edit-testimonial/${cellProps._id}`} className="btn btn-primary">Edit</Link>
                    </span>
                )
            }
        },
       
    ],
        []
    );

    return (
        <React.Fragment>
            <Row className="g-4 mb-4">
                <Col className="col-sm-auto">
                    <div>
                        <Link to="/create-testimonial" className="btn btn-success" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i>Add Testimonial</Link>
                    </div>
                </Col>
            </Row>
            <div>
                <TableContainer
                    columns={columns}
                    data={(productList || [])}
                    // isGlobalFilter={true}
                    isAddUserList={false}
                    customPageSize={20}
                    // divClassName="table-responsive mb-1"
                    tableClassName="gridjs-table"
                    theadClassName="gridjs-thead"
                    isProductsFilter={true}
                    SearchPlaceholder='Search Products...'
                />
            </div>
        </React.Fragment>
    );
};

export default TestimonialsTable;