import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from 'Common/TableContainer';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomAPI from 'utils/CustomAPI';
import { Toaster, toast } from 'react-hot-toast';

const ProductTable = () => {

  const [product, setProduct] = useState([])
  console.log(product)


  const productData = async () => {
    const res = await CustomAPI.get('/property/list');
    setProduct(res.data.data)
    // return res
  }

  const deleteProperties = async (id: any) => {
    const res = await CustomAPI.delete(`/property/delete/${id}`);
    if (res.status === 200) {
      toast.success("Successfully Deleted & Please reload the page to see the changes")
      window.location.reload()
    }
    return res
  }

  useEffect(() => {
    productData()
  }, [])

  const columns = useMemo(() => [

    {
      Header: "Properties Image",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <img src={cellProps.properties[0]} width={30} alt="" />
          </span>
        )
      }
    },
    {
      Header: "Properties Name",
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
      Header: "Description",
      Filter: false,
      accessor: (cellProps: any) => {

        const description = cellProps.description

        const description1 = description.split(" ").slice(0, 5).join(" ")

        return (<span>{description1}...</span>)
      }
    },
    {
      Header: "Location",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.location}</span>
          </span>
        )
      }
    },
    {
      Header: "Type",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.type}</span>
          </span>
        )
      }
    },
    {
      Header: "Storeys",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.storeys}</span>
          </span>
        )
      }
    },
    {
      Header: "Area",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.area}</span>
          </span>
        )
      }
    },
    {
      Header: "Basement",
      Filter: false,
      accessor: (cellProps: any) => {

        const basement = cellProps.basement

        const basement1 = basement.toString()

        return (
          <span>
            <span className="">{basement1}</span>
          </span>
        )
      }
    },
    {
      Header: "Parking",
      Filter: false,
      accessor: (cellProps: any) => {

        const { parking } = cellProps

        const parking1 = parking.toString()

        return (
          <span>
            <span className="">{parking1}</span>
          </span>
        )
      }
    },
    {
      Header: "Floor",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.floor}</span>
          </span>
        )
      }
    },
    {
      Header: "Units",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.units}</span>
          </span>
        )
      }
    },
    {
      Header: "Sales",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps.sales}</span>
          </span>
        )
      }
    },
    {
      Header: "Map URL",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="">{cellProps?.loc_url}</span>
          </span>
        )
      }
    },
    {
      Header: "Actions",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span onClick={() => deleteProperties(cellProps._id)} className="btn btn-danger">Delete</span>
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
            <Link to={`/property/edit/${cellProps._id}`} className="btn btn-primary">Edit</Link>
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
            <Link to="/property-create" className="btn btn-success" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i> Add Product</Link>
          </div>
        </Col>
      </Row>
      <div>
        <TableContainer
          columns={columns}
          data={(product || [])}
          // isGlobalFilter={true}
          isAddUserList={false}
          customPageSize={10}
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

export default ProductTable;
