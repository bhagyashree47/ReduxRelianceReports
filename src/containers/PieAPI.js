import React, { Component } from 'react'
import axios from 'axios'
import PieData from '../components/PieData'
export default class PieAPI extends Component {
    constructor(props){
            super(props);
            this.state={
                callData:[],
               
            }
    }
    componentDidMount=()=>{
            axios.get(' http://192.168.101.65:5000/api/page2_pie_chart ')
            .then(res => {
                const callsByCategory = res.data.Calls_by_Category;
                
               
                this.setState({
                    callData:callsByCategory,
                   
                })
               
                
              
            })
                     
    }
    render() {
        
        return (
            <div>
                <PieData data={this.state.callData} />
            </div>
        )
    }
}
