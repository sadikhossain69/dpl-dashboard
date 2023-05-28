import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link, useParams } from 'react-router-dom';
import Dropzone from "react-dropzone";
import CustomAPI from 'utils/CustomAPI';
import uploadImage from 'utils/uploadImage';
import { Toaster, toast } from 'react-hot-toast';

const SingleTestimonialEdit = () => {

    document.title = "Edit Testimonials | Dreamers Properties Limited + Admin React Template";

    const [selectedFiles, setselectedFiles] = useState<any>([]);
    const [singleTestimonial, setSingleTestimonial] = useState<any>([]);
    const [name, setName] = useState<any>('');
    const [designation, setDesignation] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const { id } = useParams<any>();

    const updatedImage = new FormData()

    updatedImage.append('image', selectedFiles)


    const handleAcceptedFiles = (e: any) => {
        setselectedFiles(e.target.files[0])
    }



    const updateTestimonial = async () => {


        const image = await uploadImage(updatedImage)

        const singleTestimonialData = {
            name: name,
            designation: designation,
            description: description,
            profile: image.data.url
        }
        if (image.status === 200) {

            const { data } = await CustomAPI.patch(`/testimonial/update/${id}`, singleTestimonialData)
            console.log(data)
            if (data.message) {
                window.location.reload()
                toast.success('Testimonial Updated Successfully & Please Reload the Page to See the Changes')
            }
        }
    }


    useEffect(() => {

        const getSingleTestimonial = async () => {
            const { data } = await CustomAPI.get(`/testimonial/read/${id}`)
            setSingleTestimonial(data.data)
            return data.data
        }

        getSingleTestimonial()
    }, [id])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Edit Testimonials" pageTitle="Testimonials" />
                    <h2 className='text-danger'>If you want to edit something, you have to re-fulfill all the inputs incluiding image</h2>
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Toaster />
                            <Col xl={12} lg={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-title-input">Name</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setName(e.target.value)} type="text" id="team-member-title-input" defaultValue={singleTestimonial.name} placeholder="Enter team member name" required />

                                            <div className="invalid-feedback">Please enter a team member name.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-designation">Designation</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDesignation(e.target.value)} type="text" id="team-member-designation" defaultValue={singleTestimonial.designation} placeholder="Enter team member designation" required />

                                            <div className="invalid-feedback">Please enter team member designation.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-description">Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDescription(e.target.value)} type="text" id="team-member-description" defaultValue={singleTestimonial.description} placeholder="Enter team member designation" required />

                                            <div className="invalid-feedback">Please enter team member description.</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card
                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                >
                                    <div className="p-2">
                                        <Row className="align-items-center">
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    height="80"
                                                    className="avatar-sm rounded bg-light"
                                                    alt={singleTestimonial.name}
                                                    src={singleTestimonial.profile}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                                <div className="mb-3">

                                    <Form.Label htmlFor="team-member-description">Select New Image for Testimonial</Form.Label>
                                    <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                    <Form.Control type="text" className="d-none" id="product-id-input" />
                                    <Form.Control onChange={handleAcceptedFiles} type="file" id="team-member-description" defaultValue="" placeholder="Enter team member description" required />

                                    <div className="invalid-feedback">Please Select Image for Testimonial.</div>
                                </div>
                            </Col>



                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => updateTestimonial()} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default SingleTestimonialEdit;