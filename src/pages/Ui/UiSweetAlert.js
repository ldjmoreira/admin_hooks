import React, { useState } from 'react';
import { Alert, Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiSweetAlert = () => {
    const [basicAlert, setBasicAlert] = useState(false);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="UI Elements" breadcrumbItem="SweetAlert 2" />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">A beautiful, responsive, customizable
                                        and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
                                        dependencies.</p>

                                    <Row className="text-center">
                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                            <p>A basic message</p>
                                                <Alert isOpen={basicAlert} toggle={() => {
                                                    setBasicAlert(false)
                                                }}
                                                >
                                                </Alert>
                                                <button type="button" onClick={() => setBasicAlert(true)} className="btn btn-primary waves-effect waves-light" id="sa-basic">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A title with a text under</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-title">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A success message!</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-success">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A warning message, with a function attached to the "Confirm"-button...</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-warning">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>By passing a parameter, you can execute something else for "Cancel".</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-params">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A message with custom Image Header</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-image">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A message with auto close timer</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-close">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>Custom HTML description and buttons</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="custom-html-alert">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A custom positioned dialog</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="sa-position">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>A message with custom width, padding and background</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="custom-padding-width-alert">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <p>Ajax request example</p>
                                            <button type="button" className="btn btn-primary waves-effect waves-light" id="ajax-alert">Click me</button>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>Chaining modals (queue) example</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="chaining-alert">Click me</button>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                            <div className="p-3">
                                                <p>Dynamic queue example</p>
                                                <button type="button" className="btn btn-primary waves-effect waves-light" id="dynamic-alert">Click me</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default UiSweetAlert;