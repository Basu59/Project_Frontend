import React, { Component } from 'react'
 import bus from './bus.jpg'
import * as Icon from 'react-bootstrap-icons';
import { BiRightArrow } from 'react-icons/bi';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";



const Main = ({component: roles}) => {
    const { user: currentUser } = useSelector((state) => state.auth);
  
    if (!currentUser) {
      return <Redirect to="/login" />;
     
    }
  
    if(roles  === "ROLE_ADMIN"){
      return <Redirect to="/home" />;
    }else{
      return <Redirect to="/RouteDe" />;
    }
        return (
            <>
            <div className="mainimg">
                 <a href="/Home" ><img className="rounded-circle shadow" height="80px" src={bus}/>
                    </a>
            </div>
            <div>
           
            </div>
            </>
        )
   
}

export default Main;