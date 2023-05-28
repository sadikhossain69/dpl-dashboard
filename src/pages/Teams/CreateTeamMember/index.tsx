import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import uploadImage from 'utils/uploadImage';
import CustomAPI from 'utils/CustomAPI';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const CreateTeamMember = () => {

    document.title = "Create Team Member | Dreamers Properties Limited + Admin React Template";

    const [name, setName] = useState<any>("");
    const [designation, setDesignation] = useState<any>("");
    const [description, setDescription] = useState<any>("");
    const [facebook, setFacebook] = useState<any>("");
    const [twitter, setTwitter] = useState<any>("");
    const [linkedin, setLinkedin] = useState<any>("");
    const [instagram, setInstagram] = useState<any>("");
    const [profileImage, setProfileImage] = useState<any>([])

    const navigate = useNavigate()

    const selectedImage = new FormData()
    selectedImage.append('image', profileImage)

    const getProfileImage = (e: any) => {
        setProfileImage(e.target.files[0])
    }

    const submitCreateTeam = async () => {

        const image = await uploadImage(selectedImage)

        const teamMemberData = {
            name: name,
            designation: designation,
            description: description,
            social: {
                facebook: facebook,
                twitter: twitter,
                linkedin: linkedin,
                instagram: instagram
            },
            profile: image.data.url
        }

        if (image.status === 200) {
            const res = await CustomAPI.post('/team/create', teamMemberData)
            if (res.data.status === "Success") {
                toast.success("Team Member created successfully & Please Reload the page to see the changes");
                navigate('/teams-member-list')
            }
        }

    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Team Member" pageTitle="Teams" />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Toaster />
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
                                                <h5 className="card-title mb-1">Team Member Information</h5>
                                                <p className="text-muted mb-0">Fill all information below.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-title-input">Name</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setName(e.target.value)} type="text" id="team-member-title-input" defaultValue="" placeholder="Enter team member name" required />

                                            <div className="invalid-feedback">Please enter a team member name.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-designation">Designation</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDesignation(e.target.value)} type="text" id="team-member-designation" defaultValue="" placeholder="Enter team member designation" required />

                                            <div className="invalid-feedback">Please enter team member designation.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-facebook">Facebook</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setFacebook(e.target.value)} type="text" id="team-member-facebook" defaultValue="" placeholder="Enter team member facebook" required />

                                            <div className="invalid-feedback">Please enter team member facebook.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-instagram">Instagram</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setInstagram(e.target.value)} type="text" id="team-member-instagram" defaultValue="" placeholder="Enter team member instagram" required />

                                            <div className="invalid-feedback">Please enter team member facebook.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-linkedin">LinkedIn</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setLinkedin(e.target.value)} type="text" id="team-member-linkedin" defaultValue="" placeholder="Enter team member instagram" required />

                                            <div className="invalid-feedback">Please enter team member LinkedIn.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-twitter">Twitter</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setTwitter(e.target.value)} type="text" id="team-member-twitter" defaultValue="" placeholder="Enter team member instagram" required />

                                            <div className="invalid-feedback">Please enter team member LinkedIn.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-description">Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDescription(e.target.value)} type="text" id="team-member-description" defaultValue="" placeholder="Enter team member description" required />

                                            <div className="invalid-feedback">Please enter team member Description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="team-member-description">Upload team member image</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getProfileImage} type="file" id="team-member-description" defaultValue="" placeholder="Enter team member instagram" required />

                                            <div className="invalid-feedback">Please enter team member Description.</div>
                                        </div>

                                    </Card.Body>
                                </Card>


                            </Col>



                        </Row>
                    </form>
                    <div onClick={() => submitCreateTeam()} className="text-end mb-3">
                        <Button variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default CreateTeamMember;