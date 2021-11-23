import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew } from 'react-icons/md';
import { Redirect, } from 'react-router-dom';
import { useSelector } from "react-redux";



const Home = ({ component: roles }) => {
  const { user: currentUser } = useSelector((state) => state.auth);


  if (currentUser.roles == "ROLE_USER") {
    return <Redirect to="/userhome" />;
  } else {
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
              <div className="card">
                <div className="card-body shadow">
                  <h5 className="card-title">ADD ROUTE</h5>
                  <p className="card-text">
                    Here admin can edit the Route details
                  </p>
                  <a href="/ListRoute" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow">
                  <h5 className="card-title"> ADD SCHEDULE</h5>
                  <p className="card-text">Here admin edit schedule details</p>
                  <a href="/ListSchedule" className="btn btn-primary">
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
                  <h5 className="card-title">ADD BUS</h5>
                  <p className="card-text">
                    Here admin can edit the Bus details
                  </p>
                  <a href="/ListBus" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title"> ADD PASSENGER</h5>
                  <p className="card-text">Here admin edit Passenger details</p>
                  <a href="/ListPassenger" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">ADD STOP</h5>
                  <p className="card-text">
                    Here admin can edit the Stop details
                  </p>
                  <a href="/ListStop" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">VEHICLE REGISTRATION</h5>
                  <p className="card-text">
                    Registration of vehicle
                  </p>
                  <a href="/listvech" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>


            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title"> USER VIEW</h5>
                  <p className="card-text">Here admin Can see the User view</p>
                  <a href="/userhome" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
