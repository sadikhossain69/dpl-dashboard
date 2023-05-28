import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomAPI from 'utils/CustomAPI';
import toast, { Toaster } from 'react-hot-toast';

const ClientsAndFamilies = () => {

    document.title = "Clients And Families Dashboard | Dreamers Properties Limited + Admin React Template";

    const [clients, setClients] = useState<any>('');
    const [families, setFamilies] = useState<any>('');
    const [clientsAndFamiliesData, setClientsAndFamiliesData] = useState<any>([]);

    const getClientsAndFamiliesData = async () => {
        const {data} = await CustomAPI.get('/client/list');
        setClientsAndFamiliesData(data.data)
    }

    const updateClientsAndFamilies = async (id: any) => {
        const res = await CustomAPI.patch(`/client/update/${id}`, {clients, families});
        if(res.status === 200){
            toast.success('Clients And Families Updated Successfully & Please Reload the page to see the changes')
            window.location.reload()
        }
        return res;
    }

    useEffect(() => {
        getClientsAndFamiliesData()
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Clients And Families Dashboard" pageTitle="ClientsAndFamiliesDashboard" />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Card>
                                    <Card.Header>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                                        <i className="bi bi-box-seam"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title mb-1">About Information</h5>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="clients">Projects</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setClients(e.target.value)} type="number" id="clients" defaultValue={clientsAndFamiliesData.clients} placeholder="Enter team about mission" required />

                                            <div className="invalid-feedback">Please enter clients number.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="families">Families</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setFamilies(e.target.value)} type="text" id="families" defaultValue={clientsAndFamiliesData.families} placeholder="Enter team about vision" required />

                                            <div className="invalid-feedback">Please enter about vision.</div>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => updateClientsAndFamilies(clientsAndFamiliesData._id)} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                    <Toaster />
                </Container>
            </div>
        </React.Fragment >
    );
};

export default ClientsAndFamilies;