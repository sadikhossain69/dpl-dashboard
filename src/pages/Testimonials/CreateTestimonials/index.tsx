import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomAPI from 'utils/CustomAPI';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import uploadImage from 'utils/uploadImage';

const CreateTestimonials = () => {
    document.title = "Create Testimonials | Dreamers Properties Limited + Admin React Template";

    const [name, setName] = useState<any>("");
    const [designation, setDesignation] = useState<any>("");
    const [description, setDescription] = useState<any>("");
    const [selectedFiles, setselectedFiles] = useState<any>([]);
    const selectedFile = new FormData();
    selectedFile.append('image', selectedFiles);

    const handleAcceptedFiles = (e: any) => {
        setselectedFiles(e.target.files[0]);
    }

    
    const handleSubmitTestimonial = async () => {
        const image = await uploadImage(selectedFile)

        const testimonialData = {
            name: name,
            designation: designation,
            description: description,
            profile: image.data.url
        }

        if(image.status === 200) {
            const response = await CustomAPI.post(`/testimonial/create`, testimonialData);
            if(response.data.status === "Success") {
                toast.success("Testimonial created successfully & Please Reload the page to see the changes");
            }
        }

    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Testimonials" pageTitle="Teams" />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-title-input">Name</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setName(e.target.value)} type="text" id="team-member-title-input" defaultValue="" placeholder="Enter name" required />

                                            <div className="invalid-feedback">Please enter a team member name.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-designation">Designation</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDesignation(e.target.value)} type="text" id="team-member-designation" defaultValue="" placeholder="Enter designation" required />

                                            <div className="invalid-feedback">Please enter team member designation.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-description">Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDescription(e.target.value)} type="text" id="team-member-description" defaultValue="" placeholder="Enter description" required />

                                            <div className="invalid-feedback">Please enter team member description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-description">Select Image for Testimonial</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={handleAcceptedFiles} type="file" id="team-member-description" defaultValue="" placeholder="Enter team member description" required />

                                            <div className="invalid-feedback">Please Select Image for Testimonial.</div>
                                        </div>

                                    </Card.Body>
                                    <Toaster />
                                </Card>

                                {/* <Card>
                                    <Card.Header>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                                        <i className="bi bi-images"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title mb-1">Testimonials Gallery</h5>
                                                <p className="text-muted mb-0">Add Testimonials Picture.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="dropzone my-dropzone">
                                            <Dropzone
                                                onDrop={acceptedFiles => {
                                                    handleAcceptedFiles(acceptedFiles);
                                                }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone dz-clickable text-center">
                                                        <div className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <div className="mb-3">
                                                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                            </div>
                                                            <h4>Drop files here or click to upload.</h4>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedFiles.map((f: any, i: number) => {
                                                    return (
                                                        <Card
                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                            key={i + "-file"}
                                                        >
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                            data-dz-thumbnail=""
                                                                            height="80"
                                                                            className="avatar-sm rounded bg-light"
                                                                            alt={f.name}
                                                                            src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                            to="#"
                                                                            className="text-muted font-weight-bold"
                                                                        >
                                                                            {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                            <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="error-msg mt-1">Please add a product images.</div>
                                    </Card.Body>
                                </Card> */}



                            </Col>



                        </Row>
                    </form>
                    <div className="text-end mb-3">
                        <Button onClick={() => handleSubmitTestimonial()} variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default CreateTestimonials;