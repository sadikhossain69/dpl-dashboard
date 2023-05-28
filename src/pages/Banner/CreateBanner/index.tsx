import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomAPI from 'utils/CustomAPI';
import uploadImage from 'utils/uploadImage';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBanner = () => {
    document.title = "Create Banner | Dreamers Properties Limited + Admin React Template";

    const [bannerTitle, setBannerTitle] = useState<any>("");
    const [bannerDescription, setBannerDescription] = useState<any>("");
    const [bannerImage, setBannerImage] = useState<any>("");
    const navigate = useNavigate()
    const selectedImage = new FormData()
    selectedImage.append('image', bannerImage)


    const getBannerImages = (e: any) => {
        setBannerImage(e.target.files[0])
    }

    const createBanner = async () => {
        const image = await uploadImage(selectedImage)

        const bennerData = {
            title: bannerTitle,
            description: bannerDescription,
            banner: image.data.url
        }

        if (image.status === 200) {
            const res = await CustomAPI.post('/banner/create', bennerData);
            if (res.data.status === "Success") {
                toast.success("Banner created successfully");
                navigate('/banner-list')
            }
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Banner" pageTitle="Banner" />
                    <Toaster />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-title">Banner Title</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={(e) => setBannerTitle(e.target.value)} type="text" id="banner-title" defaultValue="" placeholder="Enter banner title" required />

                                            <div className="invalid-feedback">Please enter banner title.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-title">Banner Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={(e) => setBannerDescription(e.target.value)} type="text" id="banner-title" defaultValue="" placeholder="Enter banner description" required />

                                            <div className="invalid-feedback">Please enter banner description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-image">Banner Image</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getBannerImages} type="file" id="banner-image" defaultValue="" placeholder="Enter banner description" required />

                                            <div className="invalid-feedback">Please enter banner description.</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => createBanner()} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default CreateBanner;