import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div className="ytbackground-image">
      <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                    <Link to="/yt/N14_XNH8Mqs">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/fa/c3/d9/fac3d957ecd9bcb6c6bbdcecbf8cbc74.jpg" className="img-fluid"  alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                
                
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/jg1O9hjtj58">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/48/99/84/4899843bf4dee30e4bd89528c5ecbee9.jpg" className="img-fluid"  alt="Video Thumbnail" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/ZtKPr1tpsQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/b9/6d/45/b96d457841c3022dbb75b819d6351b48.jpg" className="img-fluid" height="650" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div class="container mt-5">
            <div class="row">
            <div class="col-lg-4 mb-3">
                    <Link to="/yt/gS9xOczDEZY">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/54/87/93/548793a61dd1e8a18bbdd98b67a57034.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/_cp1aiGFVHc">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/c8/a9/98/c8a99834223362c96034e37326031d17.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/QGLnnk46UQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://i.pinimg.com/474x/ea/56/fa/ea56fa5812394c3faf2439f6be29f7de.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default Youtubepage;