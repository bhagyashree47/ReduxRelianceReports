import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import React, { Component } from 'react'
import axios from 'axios';
class CardChart extends Component {
    state = {
        loadedData: false

    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedData || (this.state.loadedData && this.state.loadedData.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({
                            loadedData: response.data
                        })
                    })
            }

        }
    }
    render() {

        let dropDownDefault = (
            <Row>

                <Col md={6} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Count</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Positive Call Count</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">  {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Complaint Calls</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                                </div>


                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Calls Resolved in 180 Sec</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                                </div>


                            </div>

                        </Card.Body>
                    </Card>
                </Col>
           


            <Col md={6} xl={3}>
                <Card>
                    <Card.Body>
                        <h6 className='mb-4'>Neutral Call</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                            </div>


                        </div>

                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} xl={3}>
                <Card>
                    <Card.Body>
                        <h6 className='mb-4'>Negative Call Count</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0}</h3>
                            </div>


                        </div>

                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} xl={3}>
                <Card>
                    <Card.Body>
                        <h6 className='mb-4'>Query Calls</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0"> {this.state.loadedData ? this.state.loadedData.id : 0} </h3>
                            </div>


                        </div>

                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} xl={3}>
                <Card>
                    <Card.Body>
                        <h6 className='mb-4'>Average Call Duration</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0">{this.state.loadedData ? Math.round(this.props.id * 100) / 100 : 0}</h3>
                            </div>


                        </div>

                    </Card.Body>
                </Card>
            </Col>

        </Row>       
            );



        return (
            <div>
                {dropDownDefault}
            </div>
        );
    }
}
export default CardChart;