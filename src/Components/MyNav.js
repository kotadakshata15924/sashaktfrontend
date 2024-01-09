import { Link } from "react-router-dom";
const MyNav = () => {
  return ( 
    <div>
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#top">SASHAKT
            <img src="https://tse1.mm.bing.net/th?id=OIP.2jeT_WyJMbhoJHKlMnBI4gHaHa&pid=Api&P=0&h=180" alt="Bootstrap"
              width="30" height="24"/>

          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">About Us</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contact">Contact Us</a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default MyNav;