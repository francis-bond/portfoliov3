import React from 'react';

export default function Contact() {


  return (
    <div className="mx-4">
      <h1 className="mt-2">Contact me</h1>
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
        <div className="form-group col-10">
        <button class="btn btn-primary" type="submit" disabled>Send</button>
        </div>
      </form>
      <h4 className="mt-3 ml-5">Email: francisbond1996@gmail.com</h4>
      <h4 className="mt-3 ml-5">LinkedIn: <a href="https://www.linkedin.com/in/francis-bond-839952164/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/francis-bond-839952164/</a></h4>
    </div>
  );
}
