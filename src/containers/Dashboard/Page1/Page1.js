import React, { Component } from 'react'
import Table from '../../../components/Page1Charts/Table'
import Gauge from '../../../components/Page1Charts/Gauge'
import CardChart from '../../../components/Page1Charts/CardChart'
 import Pie from '../../../components/PieData'
import { Dropdown, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/dropdown'
import * as actionCreators1 from '../../../store/actions/data'

import {dropDownClick} from '../../../store/actions/dropdown'

class Page1 extends Component {
    // state = {
    //     Data: [],
    //     dropdownValue: "Select Agent Name"
    // }
    // handleDropdownClick = (id) => {

    //     this.setState({ dropdownValue: id })
    // }

    componentDidMount() {
       this.props.onFetchData();

    }
    render() {
        return (
            <div className="container">
                <CardChart id={this.props.dropdownValue} />

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.props.dropdownValue}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {this.props.Data.map(data => <Dropdown.Item key={data.id} value={data.id}><div onClick={() => this.props.onHandleDropdown(data.id)}>{data.id}</div></Dropdown.Item>)}

                    </Dropdown.Menu>
                </Dropdown>

                <Row>
                    <Gauge id={this.props.dropdownValue} />
                    <Table data={this.props.Data} />
                </Row>

                 <div className="row">
                    <div className="col-md-4 col-lg-3">
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="chart-container">
                                        <Pie />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log( state.dropdownValue)
    return {
        dropdownValue: state.dropdownR.dropdownValue,
        Data:state.dataR.Data,
        error:state.dataR.error
    };

}
const mapDispatchToProps = dispatch => {
    return {
        onHandleDropdown: (id) => dispatch(actionCreators.dropDownClick(id)),
        onFetchData:()=>dispatch(actionCreators1.fetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
