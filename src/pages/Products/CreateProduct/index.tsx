import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Toaster, toast } from 'react-hot-toast';
import uploadImage from 'utils/uploadImage';
import CustomAPI from 'utils/CustomAPI';

const CreateProduct = () => {

    document.title = "Create Product | Dreamers Properties Limited + Admin React Template";

    const [loader, setLoader] = useState<boolean>(false);
    const [name, setName] = useState<String>("");
    const [location, setLocation] = useState<String>("");
    const [type, setType] = useState<String>("");
    const [storeys, setStoreys] = useState<any>(0);
    const [area, setArea] = useState<any>(0);
    const [basement, setBasement] = useState<String>('');
    const [parking, setParking] = useState<String>('');
    const [floors, setFloors] = useState<any>(0);
    const [units, setUnits] = useState<any>(0);
    const [sales, setSales] = useState<any>(0);
    const [description, setDescription] = useState<String>('');
    const [locationMapUrl, setLocationMapUrl] = useState<String>('');
    const [image1, setImage1] = useState<any>('');
    const [image2, setImage2] = useState<any>('');
    const [image3, setImage3] = useState<any>('');
    const [image4, setImage4] = useState<any>('');
    const [image5, setImage5] = useState<any>('');
    const [image6, setImage6] = useState<any>('');
    const [image7, setImage7] = useState<any>('');
    const [image8, setImage8] = useState<any>('');
    const [image9, setImage9] = useState<any>('');
    const [image10, setImage10] = useState<any>('');

    const navigate = useNavigate()

    const newImage1 = new FormData()
    newImage1.append('image', image1)
    const fileValue1: any = newImage1.get('image');


    const newImage2 = new FormData()
    newImage2.append('image', image2)
    const fileValue2: any = newImage2.get('image');


    const newImage3 = new FormData()
    newImage3.append('image', image3)
    const fileValue3: any = newImage3.get('image');

    const newImage4 = new FormData()
    newImage4.append('image', image4)
    const fileValue4: any = newImage4.get('image');

    const newImage5 = new FormData()
    newImage5.append('image', image5)
    const fileValue5: any = newImage5.get('image');

    const newImage6 = new FormData()
    newImage6.append('image', image6)
    const fileValue6: any = newImage6.get('image');

    const newImage7 = new FormData()
    newImage7.append('image', image7)
    const fileValue7: any = newImage7.get('image');

    const newImage8 = new FormData()
    newImage8.append('image', image8)
    const fileValue8: any = newImage8.get('image');

    const newImage9 = new FormData()
    newImage9.append('image', image9)
    const fileValue9: any = newImage9.get('image');

    const newImage10 = new FormData()
    newImage10.append('image', image10)
    const fileValue10: any = newImage10.get('image');


    const getImage1 = (e: any) => {
        setImage1(e.target.files[0])
    }
    const getImage2 = (e: any) => {
        setImage2(e.target.files[0])
    }
    const getImage3 = (e: any) => {
        setImage3(e.target.files[0])
    }
    const getImage4 = (e: any) => {
        setImage4(e.target.files[0])
    }
    const getImage5 = (e: any) => {
        setImage5(e.target.files[0])
    }
    const getImage6 = (e: any) => {
        setImage6(e.target.files[0])
    }
    const getImage7 = (e: any) => {
        setImage7(e.target.files[0])
    }
    const getImage8 = (e: any) => {
        setImage8(e.target.files[0])
    }
    const getImage9 = (e: any) => {
        setImage9(e.target.files[0])
    }
    const getImage10 = (e: any) => {
        setImage10(e.target.files[0])
    }


    


    const handleCreateProperty = async () => {
        toast('Creating Property...')
        if (fileValue1 instanceof File) {

            var liveImage1: any = await uploadImage(newImage1)
        }
        if (fileValue2 instanceof File) {

            var liveImage2: any = await uploadImage(newImage2)
        }
        if (fileValue3 instanceof File) {

            var liveImage3: any = await uploadImage(newImage3)
        }
        if (fileValue4 instanceof File) {

            var liveImage4: any = await uploadImage(newImage4)
        }
        if (fileValue5 instanceof File) {

            var liveImage5: any = await uploadImage(newImage5)
        }
        if (fileValue6 instanceof File) {

            var liveImage6: any = await uploadImage(newImage6)
        }
        if (fileValue7 instanceof File) {

            var liveImage7: any = await uploadImage(newImage7)
        }
        if (fileValue8 instanceof File) {

            var liveImage8: any = await uploadImage(newImage8)
        }
        if (fileValue9 instanceof File) {

            var liveImage9: any = await uploadImage(newImage9)
        }
        if (fileValue10 instanceof File) {

            var liveImage10: any = await uploadImage(newImage10)
        }
        // const liveImage2 = await uploadImage(newImage2)
        // const liveImage3 = await uploadImage(newImage3)
        // const liveImage4 = await uploadImage(newImage4)
        // const liveImage5 = await uploadImage(newImage5)
        // const liveImage6 = await uploadImage(newImage6)
        // const liveImage7 = await uploadImage(newImage7)
        // const liveImage8 = await uploadImage(newImage8)
        // const liveImage9 = await uploadImage(newImage9)
        // const liveImage10 = await uploadImage(newImage10)

        const propertyData = {
            name: name,
            location: location,
            loc_url: locationMapUrl,
            type: type,
            storeys: storeys,
            area: area,
            basement: basement,
            parking: parking,
            floor: floors,
            units: units,
            sales: sales,
            description: description,
            properties: [
                liveImage1?.data?.url,
                liveImage2?.data?.url,
                liveImage3?.data?.url,
                liveImage4?.data?.url,
                liveImage5?.data?.url,
                liveImage6?.data?.url,
                liveImage7?.data?.url,
                liveImage8?.data?.url,
                liveImage9?.data?.url,
                liveImage10?.data?.url
            ]
        }

        const res = await CustomAPI.post('/property/create', propertyData);
        if (res.status === 200) {
            toast.success('Property Created Successfully')
            navigate('/products-list')
        }

        // // console.log(propertyData)

        // if (liveImage1.status === 200 && liveImage2.status === 200 && liveImage3.status === 200) {
        //     const res = await CustomAPI.post('/property/create', propertyData);
        //     if (res.status === 200) {
        //         toast.success('Property Created Successfully')
        //         navigate('/products-list')
        //     }
        // }

    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Properties" pageTitle="Properties" />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Toaster />
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
                                                <h5 className="card-title mb-1">Property Information</h5>
                                                <p className="text-muted mb-0">Fill all information below.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-title-input">Name</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setName(e.target.value)} type="text" id="product-title-input" defaultValue="" placeholder="Enter product name" required />

                                            <div className="invalid-feedback">Please enter a product name.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-location">Location</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setLocation(e.target.value)} type="text" id="product-location" defaultValue="" placeholder="Enter product location" required />

                                            <div className="invalid-feedback">Please enter product location.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-location-map-url">Location Map Url</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setLocationMapUrl(e.target.value)} type="text" id="product-location" defaultValue="" placeholder="Enter product location map url" required />

                                            <div className="invalid-feedback">Please enter product location.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-type">Type</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setType(e.target.value)} type="text" id="product-type" defaultValue="" placeholder="Enter product type" required />

                                            <div className="invalid-feedback">Please enter product type.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-storeys">Storeys</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setStoreys(e.target.value)} type="number" id="product-storeys" defaultValue="" placeholder="Enter product storeys" required />

                                            <div className="invalid-feedback">Please enter product storeys.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-area">Area</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setArea(e.target.value)} type="text" id="product-area" defaultValue="" placeholder="Enter product area" required />

                                            <div className="invalid-feedback">Please enter product area.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-basement">Basement</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setBasement(e.target.value)} type="text" id="product-storeys" defaultValue="" placeholder="Basement Avaiable or No Basement" required />

                                            <div className="invalid-feedback">Please enter product basement.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-parking">Parking</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setParking(e.target.value)} type="text" id="product-parking" defaultValue="" placeholder="Parking Avaiable or No Parking" required />

                                            <div className="invalid-feedback">Please enter product parking.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-units">Units</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setUnits(e.target.value)} type="number" id="product-units" defaultValue="" placeholder="Enter product units" required />

                                            <div className="invalid-feedback">Please enter product units.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-floor">Floor</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="number" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setFloors(e.target.value)} type="number" id="product-floor" defaultValue="" placeholder="Enter product floor" required />

                                            <div className="invalid-feedback">Please enter product floor.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-sales">Sales</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setSales(e.target.value)} type="number" id="product-sales" defaultValue="" placeholder="Enter product sales" required />

                                            <div className="invalid-feedback">Please enter product sales.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Description</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={e => setDescription(e.target.value)} type="text" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 1</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage1} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 2</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage2} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 3</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage3} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 4</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage4} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 5</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage5} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 6</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage6} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 7</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage7} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 8</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage8} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 9</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage9} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-description">Property Image 10</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="file" className="d-none" id="product-id-input" />
                                            <Form.Control onChange={getImage10} type="file" id="product-description" defaultValue="" placeholder="Enter product description" required />

                                            <div className="invalid-feedback">Please enter product description.</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </form>
                    <div onClick={() => handleCreateProperty()} className="text-end mb-3">
                        <Button variant='success' type="submit" className="w-sm">Submit</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default CreateProduct;