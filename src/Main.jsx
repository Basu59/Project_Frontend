import React, { Component } from 'react'
import bus from './Bus.jpg'
const Main = () => {
  return (
    <>
      <div class="bg-warning d-flex justify-content-center">

        <div class="">Centurion University of Technology and Management
        </div>
      </div>
      
        <div className="mainimg">
          <a href="/Home" ><img className="rounded-circle shadow" height="80px" src={bus} /> <figcaption class="figure-caption text-dark">BUS DETAILS</figcaption>
          </a>
        </div>
        <div>

        </div>
    </>
      )

}

      export default Main;