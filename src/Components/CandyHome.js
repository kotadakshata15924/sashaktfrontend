import { Link } from 'react-router-dom';
import React from 'react';
import candy_crush from '../Pics/candy_crush.jpg';
import CandyHeader from './CandyHeader';

const GameHome = () => {
  
  return (

    <div className="Gamehomepage">
      <div className='main-body9'>
        <CandyHeader marginTop="50px" />
        <div className="content9">
          <h1 className='banner9'>Candy Crush</h1>
          <div className='motto9'>"Get ready to crush it! Join the sweetest puzzle adventure with Candy Crush today!"</div> 
        </div>

        <Link to={"/candygame"}>
          <button className='start-game9'>Start Game</button>
        </Link> 

        <div className='main-second'> 
          <img className='candy-crush-image9' src={candy_crush} alt="candy crush logo" />
        </div>
      </div>

      <div className="footer9">
        Developed by Mellow Stack 
      </div>
    </div>
  );
}

export default GameHome;