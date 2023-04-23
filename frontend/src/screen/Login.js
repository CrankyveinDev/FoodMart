import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"

const Login = () => {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response =await fetch("http://localhost:5000/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userDetails.email,
        password: userDetails.password,
      })
    });
    // console.log(response.json());
    // console.log(response);
    const returnResponse = await response.json();
    // console.log(returnResponse);
    if(response.status===404){
      alert(returnResponse.errors[0].msg);
    }else if(response.status!==200){
      alert(returnResponse.error);
      // console.log(returnResponse);
    }else{
      navigate("/");
    }

  };

  const handleChange = (event) => {
    setuserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container w-50">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label htmlFor="email">Email address</label>
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
            New user Sign UP
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
