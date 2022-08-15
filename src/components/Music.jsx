import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

function Music (){
  const [isPlaying, setIsPlaying] = useState(false)

  const audioPlayer = useRef()

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }
  return (
    <div className="home-contain-music">
      <h2>Escucha Nuestra Cancion</h2>
      <audio ref={audioPlayer} src="/audio/Perfect.mp3"></audio>
      <button onClick={togglePlayPause} className="home-music-icon">
        { isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
      </button>
    </div>
  )
}

export default Music