import React, { Component } from 'react'
import bus from './bus.jpg'
import * as Icon from 'react-bootstrap-icons';
import { BiRightArrow } from 'react-icons/bi';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";



const Main = ({ component: roles }) => {
  const { user: currentUser } = useSelector((state) => state.auth);



  return (
    <>
      <div class="bg-warning d-flex justify-content-center">

        <div class="">Centurion University of Technology and Management
        </div>


      </div>
      <div className="mainimg">
        <a href="/Home" ><img className="rounded-circle shadow" height="80px" src={bus} />
        </a>
      </div>
      <div>

      </div>
    </>
  )

}

export default Main;