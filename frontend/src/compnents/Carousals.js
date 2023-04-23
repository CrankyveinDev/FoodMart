import React from "react";

export default function Carousals() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" style={{maxHeight:"500px"}}>
        <div className="carousel-caption" style={{"zIndex":"4"}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
        </div>
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://source.unsplash.com/random/900x700/?salad"
              className="d-block w-100"
              alt="..."
              style={{ "filter": "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://source.unsplash.com/random/900x700/?pizza"
              className="d-block w-100"
              alt="..."
              style={{ "filter": "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://source.unsplash.com/random/900x700/?momos"
              className="d-block w-100"
              alt="..."
              style={{ "filter": "brightness(30%)" }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
