import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomAPI from 'utils/CustomAPI';
import { Toaster, toast } from 'react-hot-toast';
import uploadImage from 'utils/uploadImage';
import { useParams } from 'react-router-dom';

const EditSignleBanner = () => {

    document.title = "Edit Banner | Dreamers Properties Limited + Admin React Template";

    const [bannerTitle, setBannerTitle] = useState<any>("");
    const [bannerDescription, setBannerDescription] = useState<any>("");
    const [bannerImage, setBannerImage] = useState<any>("");
    const [singleBanner, setSingleBanner] = useState<any>([]);

    const selectedFile = new FormData()
    selectedFile.append('image', bannerImage)


    const { id } = useParams<any>();

    

    const getBannerImage = (e:any) => {
        setBannerImage(e.target.files[0])
    }

    const updateBanner = async () => {

        const image = await uploadImage(selectedFile)

        const singleBannerData = {
            title: bannerTitle,
            description: bannerDescription,
            banner: image.data.url
        }

        if (image.status === 200) {

            const { data } = await CustomAPI.patch(`/banner/update/${id}`, singleBannerData)
            console.log(data)
            if (data.message) {
                window.location.reload()
                toast.success('Banner Update & Please Reload the Page to See the Changes')
            }
        }
    }



    useEffect(() => {

        const getSingleBanner = async () => {
            const { data } = await CustomAPI.get(`/banner/read/${id}`);
            setSingleBanner(data.data);
            console.log(data.data)
            return data.data
        }

        getSingleBanner();
    }, [id])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Banner" pageTitle="Banner" />
                    <h2 className='text-danger'>If you want edit something, you have to re-fulfill all the inputs incluiding image</h2>
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Toaster/>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-title">Banner Title</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={(e) => setBannerTitle(e.target.value)} type="text" id="banner-title" defaultValue={singleBanner.title} placeholder="Enter banner title" required />

                                            <div className="invalid-feedback">Please enter banner title.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-title">Banner Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={(e) => setBannerDescription(e.target.value)} type="text" id="banner-title" defaultValue={singleBanner.description} placeholder="Enter banner description" required />

                                            <div className="invalid-feedback">Please enter banner description.</div>
                                        </div>
                                        <Card
                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                        >
                                            <div className="p-2">
                                                <div>Banner Image</div>
                                                <Row className="align-items-center">
                                                    <Col className="col-auto">
                                                        <img
                                                            data-dz-thumbnail=""
                                                            height="80"
                                                            className="avatar-sm rounded bg-light"
                                                            alt={singleBanner.title}
                                                            src={singleBanner.banner}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="banner-image">Upload New Banner Image</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getBannerImage} type="file" id="banner-image" defaultValue="" placeholder="Enter banner description" required />

                                            <div className="invalid-feedback">Please enter banner description.</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>



                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => updateBanner()} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default EditSignleBanner;