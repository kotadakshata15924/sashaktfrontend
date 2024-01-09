//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyNav from './Components/MyNav';
import Home from './Components/home';
import Card from './Components/Card';
import About from './Components/About';
import Contact from './Components/Contact';
import Audio from './Components/Audio';
import Game from './Components/Game';
import GameHome from './Components/JigsawHome';
import Participation from './Components/JigRightPart';
import Labour from './Components/JigLabour';
import GameBoard from './Components/GameBoard';
import QuizPage from './Components/MemQuiz';
import Read from './Components/Read';
import YouTubeVideo from './Components/YouTubeVideo';
import Videoquiz from './Components/Videoquiz';
import Youtubepage from './Components/YoutubePage';
import Location from './Components/Location';
import CandyHome from './Components/CandyHome';
import CandyAbout from './Components/CandyAbout';
import CandyGame from './Components/CandyGame';
import Quiz from './Components/quiz';
import Kids from './Components/Kids';
import ChoicePage from './Components/ChoicePage';
function App() {
  return (
    <div>
      <MyNav />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Audio' element={<Audio />} />
          <Route path='/Game' element={<Game />} />
          <Route path="/jigsaw" element={<GameHome />} />
          <Route path="/part" element={<Participation />} />
          <Route path="/lab" element={<Labour />} />
          <Route path="/memorygame" element={<GameBoard/>} />
          <Route path="/memquiz" element={<QuizPage/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/see" element={<Youtubepage/>}/>
          <Route path="/yt/:vid" element={<YouTubeVideo/>}/>
          <Route path="/vidquiz" element={<Videoquiz/>}/>
          <Route path="/Location" element={<Location/>}/>
          <Route path="/candyhome" element={<CandyHome/>} />
          <Route path="/candygame" element={<CandyGame/>} />
          <Route path="/candyabout" element={<CandyAbout/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/ChoicePage" element={<ChoicePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;