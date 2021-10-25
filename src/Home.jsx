import React, { Component } from 'react'
// import {CardGroup,Card,Button }from 'react-bootstrap'
// import { BiArrowBack } from 'react-icons/bi';

export default class Home extends Component {
    render() {
        return (
           <>
            {/* <div>
            <a
                class="btn-c"
                href="#"
                role="button"
                onClick={this.cancel.bind(this)}
            >
            </a>
            </div> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">ADD ROUTE</h5>
                  <p className="card-text">
                    Here admin can edit the Route details
                  </p>
                  <a href="/ListRoute" className="btn btn-primary">
                    Click
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title"> ADD SCHEDULE</h5>
                  <p className="card-text">Here admin edit schedule details</p>
                  <a href="/ListSchedule" className="btn btn-primary">
                    Click
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
           </>
        )
    }
}
