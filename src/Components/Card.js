import React from "react";
import { Link } from "react-router-dom";
const Card = () => {
    return (
        <div class="container mt-4 " >
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col cardstyling">
                    <Link to="/Game" class="card-Link">
                    <div class="card ">
                        <img src="https://i.pinimg.com/564x/e3/c7/e7/e3c7e7fbf40e05303d28bb352262f0d1.jpg" class="card-img-top" alt="..." />
                        <div class="d-grid gap-2 ">
                           <button class="btn btn-info">GAMES</button>
                        </div>
                    </div>
                    </Link>
                </div>
    
                <div class="col cardstyling">
                    <div class="card ">
                        <img src="https://i.pinimg.com/474x/28/32/65/283265b4e40db7e97185803b6797745c.jpg" class="card-img-top" alt="..." />
                        <div class="d-grid gap-2 ">
                            <Link to="/card" class="btn btn-info">AUDIOS</Link>
                        </div>
                    </div>
                </div>
                <div class="col cardstyling">
                    <Link to="/see" class="card-Link">
                    <div class="card ">
                        <img src="https://i.pinimg.com/474x/9c/00/6b/9c006b269a6f6ec50a4431e3cae4c4b9.jpg" class="card-img-top" alt="..." />
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-info">VIDEOS</button>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col cardstyling">
                    <Link to="/read" class="card-Link">
                    <div class="card ">
                        <img src="https://i.pinimg.com/474x/55/d7/48/55d748cacf5ef1a6b9eab43d71ae6c7c.jpg" class="card-img-top" alt="..." />
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-info">READ-ALONG STORIES</button>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
