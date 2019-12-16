import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import React, { Component } from 'react'
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer";
class GaugeChart extends Component {
    state = {
        gaugeData: false

    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.gaugeDataData || (this.state.gaugeData && this.state.gaugeData.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({
                            gaugeData: response.data
                        })
                    })
            }

        }
    }
    render() {

        let dropDownDefault = (


            <Col md={12} xl={6}>

                <h6 className='mb-4'>Overall Satisfaction Score</h6>
                <div className="row d-flex align-items-center">
                    <div className="col-5">
                        <ReactSpeedometer minValue={-1} maxValue={1}
                            value={this.state.gaugeData.id} />
                    </div>
                </div>

            </Col>


        );



        return (
            <div>
                {dropDownDefault}
            </div>
        );
    }
}
export default GaugeChart;