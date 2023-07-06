import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [userDetails, setuserDetails] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response =await fetch("http://localhost:5000/user/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        location: userDetails.location,
        password: userDetails.password,
      })
    });
    // console.log(response.json());
    console.log(response);
    const returnResponse = await response.json();
    console.log(returnResponse);
    if(response.status===404){
      alert(returnResponse.errors[0].msg);
    }else if(response.status===400){
      console.log(returnResponse);
    }else{
      localStorage.setItem("authToken",returnResponse.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
      console.log("data saved in database");
    }    

  };

  const handleChange = (event) => {
    setuserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container w-50">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="mt-3">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
              value={userDetails.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="text"
              className="form-control mb-2"
              id="Phone"
              name="phone"
              placeholder="Enter your 10 digit phone number"
              required
              onChange={handleChange}
              value={userDetails.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control mb-2"
              id="location"
              name="location"
              placeholder="Enter Your Addresponses Here"
              required
              onChange={handleChange}
              value={userDetails.location}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email addresponses</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={handleChange}
              value={userDetails.email}
            />
            <small id="email" className="form-text text-muted mb-2">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              id="Password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              value={userDetails.password}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
