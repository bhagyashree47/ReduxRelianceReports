import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
// import Drilldown from '/Page2Charts/DrilldownChart'
// import BarChartByDay from './Page2Charts/BarChartByDay'
//import FunnelChart from '../../../components/Page2Charts/FunnelChart'
// import Keywords from './Page2Charts/Keywords'
import Pie from '../../../components/PieData'
export default class Page2 extends Component {
    render() {
        return (
            <div>
                
                    <div style={{ 'width': '50%', 'display': 'inline-block' }}>

                        <Pie />

                    </div>
                    <div style={{ 'width': '50%', 'display': 'inline-block' }}>

                        {/* /<FunnelChart/> */}

                    </div>
                    <div style={{'width': '50%', 'display': 'inline-block'}}>
                       
                       <Pie/>
                 
        </div>
                               
                            
        <div style={{'width': '50%', 'display': 'inline-block'}}>
                       
                       <Pie/>
                 
        </div>

                
            </div>
        )
    }
}
