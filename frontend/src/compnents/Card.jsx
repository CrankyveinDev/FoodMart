import React from "react";

const Card = () => {
  return (
    <>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title{" "}
          </p>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ color: "#fff" }}
            >
              {Array.from(Array(6), (v, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ color: "#fff" }}
            >
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
            <div className="d-inline fs-5 h-100">Total Price</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
