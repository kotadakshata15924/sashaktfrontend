import { Link } from "react-router-dom";

const home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/474x/b5/14/21/b51421853a2c93114c681675e860a28e.jpg"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
        {/* Add more carousel items as needed */}
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/474x/a1/71/b7/a171b70d08e23407122eecef27d6a01d.jpg"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/474x/96/aa/a3/96aaa3d268390ce9896f5cb979f10c89.jpg"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
      </div>
      <div className="carousel-caption d-md-block text-center">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control form-control-sm" id="name" style={{ width: '50%', margin: '0 auto' }} />
            </div>
          </div>
          <div className="col-md-12 mx-auto">
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="text" className="form-control form-control-sm" id="age" style={{ width: '50%', margin: '0 auto' }} />
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <Link to="/card" className="btn btn-dark btn-lg">
              GET STARTED
            </Link>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default home;