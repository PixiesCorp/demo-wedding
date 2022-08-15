import CountdownTimer from "./CountdownTimer/CountdownTimer"
import Music from "./Music"

const Home = () => {
  return (
    <div className="home-contain">
      <div className="home-contain-title">
        <h1>Alexis & Andrea</h1>
        <h3>Nuestra Boda</h3>
      </div>
      <Music />
      <h3 className="home-date">3 de Septiembre del 2022</h3>
      <CountdownTimer 
      countdownTimestampMs={1662163200000}/>
    </div>
  )
}

export default Home