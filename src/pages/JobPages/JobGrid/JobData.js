import React, { useState } from 'react';
import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, Row, Label, Input, Form, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//import images
import adobe from "../../../assets/images/companies/adobe.svg";
import adobephotoshop from "../../../assets/images/companies/adobe-photoshop.svg";
import airbnb from "../../../assets/images/companies/airbnb.svg";
import amazon from "../../../assets/images/companies/amazon.svg";
import flutter from "../../../assets/images/companies/flutter.svg";
import mailchimp from "../../../assets/images/companies/mailchimp.svg";
import line from "../../../assets/images/companies/line.svg";
import spotify from "../../../assets/images/companies/spotify.svg";
import wordpress from "../../../assets/images/companies/wordpress.svg";
import upwork from "../../../assets/images/companies/upwork.svg";
import sass from "../../../assets/images/companies/sass.svg";
import reddit from "../../../assets/images/companies/reddit.svg";

const JobData = () => {
    const [modal, setModal] = useState(false);
    const [selectDate, setSelectDate] = useState();
    const dateChange = (date) => {
        setSelectDate(date);
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const jobsGridData = [
        {
            id: 1,
            img: adobe,
            title: "Magento Developer",
            location: "California"
        },
        {
            id: 2,
            img: adobephotoshop,
            title: "Product Designer",
            location: "UK"
        },
        {
            id: 3,
            img: airbnb,
            title: "Marketing Director",
            location: "USA"
        },
        {
            id: 4,
            img: amazon,
            title: "Project Manager",
            location: "California"
        },
        {
            id: 5,
            img: flutter,
            title: "HTML Developer",
            location: "Canada"
        },
        {
            id: 6,
            img: mailchimp,
            title: "Business Associate",
            location: "UK"
        },
        {
            id: 7,
            img: line,
            title: "Product Sales Specialist",
            location: "USA"
        },
        {
            id: 8,
            img: spotify,
            title: "Magento Developer",
            location: "Pakistan"
        },
        {
            id: 9,
            img: wordpress,
            title: "Magento Developer",
            location: "India"
        },
        {
            id: 10,
            img: upwork,
            title: "Magento Developer",
            location: "California"
        },
        {
            id: 11,
            img: sass,
            title: "Magento Developer",
            location: "Pakistan"
        },
        {
            id: 12,
            img: reddit,
            title: "Magento Developer",
            location: "India"
        },
    ];
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card className="job-filter">
                        <CardBody>
                            <Form>
                                <Row className="g-3">
                                    <Col xxl={4} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="searchJob" placeholder="Search your job" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="locationInput" placeholder="San Francisco, LA" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="jobCategories" placeholder="Job Categories" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={6}>
                                        <div className="position-relative">
                                            <div id="datepicker1">
                                                <DatePicker
                                                    className="form-control"
                                                    selected={selectDate}
                                                    onChange={dateChange}
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={6}>
                                        <div className="position-relative h-100 hstack gap-3">
                                            <button type="submit" className="btn btn-primary h-100 w-100"><i className="bx bx-search-alt align-middle"></i> Find Jobs</button>
                                            <a href="#" onClick={toggle} className="btn btn-secondary h-100 w-100">
                                                <i className="bx bx-filter-alt align-middle"></i> Advance</a>
                                        </div>
                                    </Col>

                                    <Collapse isOpen={isOpen} id="collapseExample">
                                        <div>
                                            <Row className="g-3">
                                                <Col xxl={4} lg={6}>
                                                    <div>
                                                        <Label htmlFor="experience" className="form-label fw-semibold">Experience</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox1">All</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox2">Fresher</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox3">1-2</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox4">2-3</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox5">4+</Label>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6}>
                                                    <div>
                                                        <Label htmlFor="jobType" className="form-label fw-semibold">Job Type</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox6">Full Time</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox7">Part Time</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox8">Freelance</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option3" />
                                                        <Label className="form-check-label" htmlFor="inlineCheckbox9">Internship</Label>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={4}>
                                                    <div className="position-relative">
                                                        <Label htmlFor="qualificationInput" className="form-label fw-semibold">Qualification</Label>
                                                        <Input type="text" className="form-control" id="qualificationInput" autoComplete="off" placeholder="Qualification" />
                                                        <i className="ri-government-line filter-icon"></i>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Collapse>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                {(jobsGridData || []).map((item, key) => (
                    <Col xl={3} md={6} key={key}>
                        <Card>
                            <CardBody>
                                <div className="favorite-icon">
                                    <Link to="#"><i className="uil uil-heart-alt fs-18"></i></Link>
                                </div>
                                <img src={item.img} alt="" height="50" className="mb-3" />
                                <h5 className="fs-17 mb-2">
                                    <Link to="/job-details" className="text-dark">{item.title}</Link> <small className="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-1">Skote Technology Pvt.Ltd</p>
                                    </li>{" "}
                                    <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker"></i> {item.location}</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                                    </li>
                                </ul>
                                <div className="mt-3 hstack gap-2">
                                    <span className="badge rounded-1 badge-soft-success">Full Time</span>
                                    <span className="badge rounded-1 badge-soft-warning">Urgent</span>
                                    <span className="badge rounded-1 badge-soft-info">Private</span>
                                </div>
                                <div className="mt-4 hstack gap-2">
                                    <Link to="/job-details" className="btn btn-soft-success w-100">View Profile</Link>
                                    <Link to="#applyJobs" onClick={() => setModal(true)} className="btn btn-soft-primary w-100">Apply Now</Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="justify-content-between align-items-center mb-3">
                <div className="col-auto me-auto">
                    <p className="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
                </div>
                <div className="col-auto">
                    <Card className="d-inline-block ms-auto mb-0">
                        <CardBody className="p-2">
                            <nav aria-label="Page navigation example" className="mb-0">
                                <ul className="pagination mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            <span aria-hidden="true">&laquo;</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">...</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">12</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            <span aria-hidden="true">&raquo;</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </CardBody>
                    </Card>
                </div>
            </Row>

            {/* Modal */}
            <Modal
                isOpen={modal}
                toggle={() => {
                    setModal();
                }}
                id="applyJobs"
            >
                <div className="modal-content">
                    <ModalHeader toggle={() => setModal()} id="applyJobsLabel" className="modal-header">
                        Apply For This Job
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="fullnameInput" className="form-label">Full Name</Label>
                                    <Input type="text" className="form-control" id="fullnameInput" placeholder="Enter your name" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="emailInput" className="form-label">Email</Label>
                                    <Input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="phoneNumberInput" className="form-label">Phone Number</Label>
                                    <Input type="email" className="form-control" id="phoneNumberInput" placeholder="Enter your number" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="uploadResume" className="form-label">Upload Resume</Label>
                                    <Input type="file" className="form-control" id="uploadResume" placeholder="Upload resume" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-4">
                                    <Label htmlFor="messageInput" className="form-label">Message</Label>
                                    <textarea className="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="text-end">
                                    <button className="btn btn-success me-1">Send Application <i className="bx bx-send align-middle"></i></button>
                                    <button className="btn btn-outline-secondary">Cancel</button>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default JobData;