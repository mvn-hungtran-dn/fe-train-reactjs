import React from "react";
import { Link } from "react-router-dom";

export class Products extends React.Component {
  render () {
    return (
      <div class="container">
        <div class="row pt-4">
          <div className="col-4">
            <Link to="products/1">
              <div className="card">
                <img src="https://picsum.photos/seed/picsum/200/200"  className="img-thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <a href="#" className="btn btn-primary">Go detail</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="products/2">
              <div className="card">
                <img src="https://picsum.photos/seed/picsum/200/200"  className="img-thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <a href="#" className="btn btn-primary">Go detail</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="products/3">
              <div className="card">
                <img src="https://picsum.photos/seed/picsum/200/200"  className="img-thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <a href="#" className="btn btn-primary">Go detail</a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
