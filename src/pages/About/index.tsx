import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomAPI from 'utils/CustomAPI';
import toast, { Toaster } from 'react-hot-toast';

const AboutDashboard = () => {

    document.title = "About Dashboard | Dreamers Properties Limited + Admin React Template";
    const [aboutData, setAboutData] = useState<any>([]);
    const [mission, setMission] = useState<String>('');
    const [vision, setVision] = useState<String>('');

    const customAbout = {
        mission: mission,
        vision: vision,
    }

    const updateAbout = async (id: any) => {
        const res = await CustomAPI.patch(`/about/update/${id}`, customAbout);
        if(res.status === 200){
            toast.success('About Updated Successfully & Please Reload the page to see the changes')
        }
        return res;
    }

    console.log(mission, vision)

    const getAbout = async () => {
        const { data } = await CustomAPI.get('/about/list');
        console.log(data.data)
        setAboutData(data.data)
        return data.data;
    }

    useEffect(() => {
        getAbout()
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="About Dashboard" pageTitle="AboutDashboard" />
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

                                            <Form.Label htmlFor="about-mission">Mission</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setMission(e.target.value)} type="text" id="about mission" defaultValue={aboutData.mission} placeholder="Enter team about mission" required />

                                            <div className="invalid-feedback">Please enter about mission.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="about-vision">Vision</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setVision(e.target.value)} type="text" id="about-vision" defaultValue={aboutData.vision} placeholder="Enter team about vision" required />

                                            <div className="invalid-feedback">Please enter about vision.</div>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => updateAbout(aboutData._id)} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                    <Toaster />
                </Container>
            </div>
        </React.Fragment >
    );
};

export default AboutDashboard;