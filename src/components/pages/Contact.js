import React, { useState } from 'react';

export default function Contact() {


  return (
    <div className="mx-4">
      <h1 className="mt-1">Contact me</h1>
      <form className="row justify-content-center">
        <div className="form-group col-10">
          <label for="formGroupExampleInput">Name:</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Doe"/>
        </div>
        <div className="form-group col-10">
          <label for="exampleInputEmail1">Email address:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">This email will not be shared</small>
        </div>
        <div className="form-group col-10">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}
