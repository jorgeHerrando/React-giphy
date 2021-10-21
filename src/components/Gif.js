import React from "react";

function Gif({ textLoading, images, title, username }) {
  // console.log(elem);
  if (textLoading) {
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <h4 className="card-title">{textLoading}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={images.downsized.url}
            alt={username}
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
