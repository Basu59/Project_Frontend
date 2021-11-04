import React from "react";
import { useSelector } from "react-redux";
import { Component } from "react";
import { Redirect } from 'react-router-dom';

const Profile = ({component: roles}) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <header className="">
        <h3>
         WELCOME  <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      
      <p>
        Your <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        Your <strong>Email:</strong> {currentUser.email}
      </p>You have
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
