import React, { useEffect, useMemo, useState } from 'react';

import TableContainer from 'Common/TableContainer';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { productList } from 'Common/data';
import CustomAPI from 'utils/CustomAPI';
import { toast } from 'react-hot-toast';

const TeamMemberTable = () => {

    const [memberList, setMemberList] = useState<any>([]);

    const getMemberList = async () => {
        const { data } = await CustomAPI.get('/team/list')
        setMemberList(data.data)
        return data.data
    }

    const deleteMember = async (id: string) => {
        const res = await CustomAPI.delete(`/team/delete/${id}`)
        if(res.status === 200) {
            window.location.reload();
            toast.success("Member Deleted Successfully! & Please reload the page to see the changes")
        }
        return res
    }

    useEffect(() => {
        getMemberList()
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
            Header: "Facebook",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <a href={cellProps.social.facebook} target={'_blank'}>Link</a>
                    </span>
                )
            }
        },
        {
            Header: "Instagram",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <a href={cellProps.social.instagram} target={'_blank'}>Link</a>
                    </span>
                )
            }
        },
        {
            Header: "Linkedin",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <a href={cellProps.social.linkedin} target={'_blank'}>Link</a>
                    </span>
                )
            }
        },
        {
            Header: "Twitter",
            Filter: false,
            accessor: (cellProps: any) => {
                return (
                    <span>
                        <a href={cellProps.social.twitter} target={'_blank'}>Link</a>
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
                        <span onClick={() => deleteMember(cellProps._id)} className='btn btn-danger'>Delete</span>
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
                        <Link to={`/team-member-edit/${cellProps._id}`} className='btn btn-primary'>Edit</Link>
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
                        <Link to="/product-create" className="btn btn-success" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i>Add Team Member</Link>
                    </div>
                </Col>
            </Row>
            <div>
                <TableContainer
                    columns={columns}
                    data={(memberList || [])}
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

export default TeamMemberTable;