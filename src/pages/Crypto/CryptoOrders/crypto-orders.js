import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import withRouter from "components/Common/withRouter";

import { Pdate, Type, Value, ValueinUSD, Status, Coin } from "./CryptoCol";

import TableContainer from "../../../components/Common/TableContainer";

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "assets/scss/datatables.scss";

// import { cryptoOrderData } from "../../../common/data";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import { getCryptoOrders } from "store/crypto/actions";

const CryptoOrders = props => {

  //meta title
  document.title = "Orders | Skote - React Admin & Dashboard Template";

  const { orders, onGetOrders } = props;
  const [activeTab, setActiveTab] = useState("1");
  const [startDate, setStartDate] = useState(new Date('04-03-2020'));
  const [selectCoin, setselectCoin] = useState('Bitcoin');
  const [selectType, setselectType] = useState('Buy');
  const [selectStatus, setselectStatus] = useState('Completed');
  const [productData, setSetProductData] = useState([orders]);

  useEffect(() => {
    onGetOrders();
    setSetProductData(orders);
  }, [onGetOrders]);


  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleFilter = () => {
    var allProduct = orders.filter(order => {
      return order.type === selectType && order.coin === selectCoin && order.status === selectStatus;
    }
    );
    setSetProductData(allProduct);
  };

  // Table Data

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "pdate",
        filterable: true,
        Cell: cellProps => {
          return <Pdate {...cellProps} />;
        },
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        Cell: cellProps => {
          return <Type {...cellProps} />;
        },
      },
      {
        Header: "Coin",
        accessor: "coin",
        filterable: true,
        Cell: cellProps => {
          return <Coin {...cellProps} />;
        },
      },
      {
        Header: "Value",
        accessor: "value",
        filterable: true,
        Cell: cellProps => {
          return <Value {...cellProps} />;
        },
      },
      {
        Header: "Value in USD",
        accessor: "valueInUsd",
        filterable: true,
        Cell: cellProps => {
          return <ValueinUSD {...cellProps} />;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: cellProps => {
          return <Status {...cellProps} />;
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Orders" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-3">Orders</h4>

                  <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggleTab("1");
                        }}
                      >
                        All Orders
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggleTab("2");
                        }}
                      >
                        Processing
                      </NavLink>
                    </NavItem>
                  </ul>

                  <TabContent activeTab={activeTab} className="p-3">
                    <TabPane tabId="1" id="all-order">
                      <Form>
                        <Row className="mb-4">
                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Date :</Label>
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="form-control"
                                dateFormat="d-MM-yyyy"
                                placeholderText="Select date"
                              />
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Coin</Label>
                              <select className="form-control select2-search-disable" value={selectCoin}
                                onChange={(e) => {
                                  setselectCoin(e.target.value);
                                }}>
                                <option value="Bitcoin">
                                  Bitcoin
                                </option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="Litecoin">Litecoin</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Type</Label>
                              <select className="form-control select2-search-disable" value={selectType}
                                onChange={(e) => {
                                  setselectType(e.target.value);
                                }}>
                                <option value="Buy">
                                  Buy
                                </option>
                                <option value="Sell">Sell</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Status</Label>
                              <select className="form-control select2-search-disable" value={selectStatus}
                                onChange={(e) => {
                                  setselectStatus(e.target.value);
                                }}>
                                <option value="Completed">
                                  Completed
                                </option>
                                <option value="Pending">Pending</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl align-self-end">
                            <div className="mb-3">
                              <Button
                                type="button"
                                color="primary"
                                className="w-md"
                                onClick={() => handleFilter()}
                              >
                                Filter
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>

                      <TableContainer
                        columns={columns}
                        data={orders}
                        isGlobalFilter={true}
                        isAddOptions={false}
                        customPageSize={10}
                      />
                    </TabPane>
                    <TabPane tabId="2" id="processing">
                      <div>
                        <TableContainer
                          columns={columns}
                          data={orders}
                          isGlobalFilter={true}
                          isAddOptions={false}
                          customPageSize={10}
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

CryptoOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

const mapStateToProps = ({ crypto }) => ({
  orders: crypto.orders,
});

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getCryptoOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoOrders));
