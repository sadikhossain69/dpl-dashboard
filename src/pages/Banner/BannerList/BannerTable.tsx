import React, { useEffect, useMemo, useState } from 'react';

import TableContainer from 'Common/TableContainer';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { productList } from 'Common/data';
import CustomAPI from 'utils/CustomAPI';
import { Toaster, toast } from 'react-hot-toast';

const BannerTable = () => {

    const [bannerData, setBannerData] = useState<any>([]);

    const getBanner = async () => {
        const { data } = await CustomAPI.get('/banner/list');
        setBannerData(data);
        return data
    }

    const deleteBanner = async (id: any) => {
        const res = await CustomAPI.delete(`/banner/delete/${id}`);
        if (res.status === 200) {
            toast.success('Banner Deleted Successfully ! 😃 & relode the page to see the update')
        }
        console.log(res)
        return res
    }

    console.log(bannerData);

    useEffect(() => {
        getBanner();
    }, [])


    const columns = useMemo(() => [
        {
            Header: "Banner Image",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <img src={cellProps.banner} width={30} alt="" />
                    </span>
                )
            }
        },
        {
            Header: "Banner Title",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <span className="">{cellProps.title}</span>
                    </span>
                )
            }
        },
        {
            Header: "Banner Description",
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
                        <span onClick={() => deleteBanner(cellProps._id)} className="btn btn-danger">Delete</span>
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
                        <Link to={`/edit-banner/${cellProps._id}`} className="btn btn-primary">Edit</Link>
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
                        <Link to="/create-banner" className="btn btn-success" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i>Add Banner</Link>
                    </div>
                </Col>
            </Row>
            <div>
                <TableContainer
                    columns={columns}
                    data={(bannerData || [])}
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

export default BannerTable;