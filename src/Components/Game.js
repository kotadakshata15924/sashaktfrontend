import React from 'react';
import { Link } from 'react-router-dom';
const Game = () => {
  return (
    <div>
    <div class="main">
<div class="card1">

<div class="image">
<img src="https://i.pinimg.com/474x/36/f0/32/36f032b2a1225dc2b7a040bef7126b73.jpg" 
className="d-block w-100" height="300" alt="..." />
</div>
<div class="title">
<h1>
Candy Crush</h1>
</div>
<div class="des">
<Link to="/candyhome"><button>Let's Play</button></Link>

</div>
</div>


<div class="card1">

<div class="image">
<img src="https://i.pinimg.com/474x/76/8f/c9/768fc971adca82d0f67b6b895f94e5e2.jpg"
 className="d-block w-100" height="300" alt="..." />
</div>
<div class="title">
<h1>
JigSaw</h1>
</div>
<div class="des">
<Link to="/jigsaw"><button>Let's Play</button></Link>
</div>
</div>
<div class="card1">
<div class="image">
<img src="https://i.pinimg.com/474x/46/ab/be/46abbe6b89d78aa4d71509b8f97b8ff8.jpg" 
 className="d-block w-100" height="300" alt="..." />
</div>
<div class="title">
<h1>
Memory Game</h1>
</div>
<div class="des">
<Link to="/memorygame"><button>Let's Play</button></Link>
</div>
</div>
</div>
</div>
  );
}

export default Game;