import React, { Component } from 'react'
import {Route,NavLink} from 'react-router-dom'
import Page1 from '../Dashboard/Page1/Page1'
import Page2 from '../Dashboard/Page2/Page2'
import Page3 from '../Dashboard/Page3/Page3'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                 <nav className="fixed-bottom">
                        <ul class="pagination">
                            <div class="d-md-flex d-block flex-row mx-md-auto mx-0">
                                <li class="page-item">

                                    <a class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><NavLink exact to={'/page1'} className="nav-link"> Page1 </NavLink></li>
                                <li class="page-item"><NavLink to={'/page2'} className="nav-link"> Page2 </NavLink></li>
                                <li class="page-item"><NavLink to={'/page3'} className="nav-link"> Page3 </NavLink></li> 
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                <Route path='/page1' exact component={Page1}/>
                <Route path='/page2' component={Page2}/>
                <Route path='/page3' component={Page3}/>


                
            </div>
        )
    }
}
