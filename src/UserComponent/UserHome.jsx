import React, { Component } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';


export default class UserHome extends Component {
    render() {
        return (
            <>
    
        <div class="bg-warning d-flex justify-content-center">
          <div class="">Centurion University of Technology and Management
          </div>
        </div>
        <a href="/Main" className="ms-5"><MdArrowBackIosNew />
        </a>
        <div className="container ">
          <div className="row">
            <div className="col-sm-6">
              <div className="card shadow-lg">
                <div className="card-body shadow">
                  <h5 className="card-title">ROUTE</h5>
                  <p className="card-text">
                    Here Route details
                  </p>
                  <a href="/RouteDe" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title"> SCHEDULE</h5>
                  <p className="card-text">Here schedule details are available</p>
                  <a href="/ScheduleDe" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>

          </div>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body shadow-lg">
                    <h5 className="card-title">BUS</h5>
                    <p className="card-text">
                      Here the Bus details are available
                    </p>
                    <a href="/BusDe" className="btn btn-primary">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body shadow-lg">
                    <h5 className="card-title"> PASSENGER</h5>
                    <p className="card-text">Here Passenger details are available</p>
                    <a href="/PassengerDe" className="btn btn-primary">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body shadow-lg">
                      <h5 className="card-title"> STOPS</h5>
                      <p className="card-text">Here Stop details are available</p>
                      <a href="/StopDe" className="btn btn-primary">
                        Click Here
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
