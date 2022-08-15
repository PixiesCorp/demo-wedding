import './Location.css'
import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Location = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyAxynDSNPkm8RgKJnY4ZgzZatgeZt7RHQQ",
	})

	if (!isLoaded) return <div>Loading...</div>
	return (
		<div className="location">
			<h1 className="location-title">Iglesia San Lorenzo</h1>
      <Map />
			<div className="location-date">
				<h2>Hora</h2>
				<h3>5:30pm</h3>
			</div>
			<a href="https://www.google.com.mx/maps/place/Santuario+de+San+Lorenzo/@31.7396798,-106.4272914,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1e3d2eeb9533d:0xaad5a0375c25dfa1!8m2!3d31.7396764!4d-106.4250177" className="location-btn">
				Ubicacion
			</a>
			<h1 className="location-title">Salon de Eventos Nuvo</h1>
			<Map2 />
			<div className="location-date">
				<h2>Hora</h2>
				<h3>9:00pm - 1:00am</h3>
			</div>
			<a href="https://www.google.com.mx/maps/place/Nuv%C3%B3+Centro+de+Eventos/@31.680983,-106.3919158,17z/data=!4m5!3m4!1s0x86e75d063c0fffff:0x7d1fb8d8f6619e9a!8m2!3d31.6810926!4d-106.3893838" className="location-btn">
				Ubicacion
			</a>
			<div className="location-fill"></div>
		</div>
	)
}

function Map() {
  const center = useMemo(() => ({ lat: 31.739700218975738, lng: -106.4250295401936 }), [])
	return (
		<GoogleMap
			zoom={15}
			center={center}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
			mapContainerClassName="location-map"
		>
      <Marker position={center}/>
    </GoogleMap>
	)
}

function Map2() {
  const center = useMemo(() => ({ lat: 31.68105600125817, lng: -106.38942673529553 }), [])
	return (
		<GoogleMap
			zoom={15}
			center={center}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
			mapContainerClassName="location-map"
		>
      <Marker position={center}/>
    </GoogleMap>
	)
}

export default Location
