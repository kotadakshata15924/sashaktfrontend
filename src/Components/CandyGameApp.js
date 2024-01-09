import CandyHome from './Components/CandyHome';
import CandyAbout from './Components/CandyAbout';
import CandyGame from './Components/CandyGame';
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from './Pics/logo.png';
import candy_crush_audio from './candy-crush-react_src_audio_candy_crush_intro.ogg';
import volume_off from './Pics/volume-xmark-solid.svg';
import volume_on from './Pics/volume-high-solid.svg';
import CandyHeader from './CandyHeader';



const CandyGameApp = () => {

    // Mute and Play Audio 
    const [isMuted, setIsMuted] = useState(false);

    // Plays Audio 

    useEffect(() => {

        const audio = new Audio(candy_crush_audio);

        audio.loop = true;

        const playAudio = () => {

            if (!isMuted) {

                audio.play();
            }
        };

        document.addEventListener('click', playAudio);

        return () => {

            document.removeEventListener('click', playAudio);
            audio.pause();
        };

    }, [isMuted]);

    // Mute and Unmute 
    const toggleMute = () => {

        setIsMuted(!isMuted);
    };

    return (
        <>
            <CandyHeader
                logo={logo}
                toggleMute={toggleMute}
                volume_off={volume_off}
                volume_on={volume_on}
                isMuted={isMuted}
            />

            <Routes>

            <Route path="/candyhome" element={<CandyHome/>} />
            <Route path="/candygame" element={<CandyGame/>} />
            <Route path="/candyabout" element={<CandyAbout/>} />

            </Routes>

        </>

    )
}

export default CandyGameApp