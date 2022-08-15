import './App.css'
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./components/Home'))
const Location = React.lazy(() => import('./components/Location'))
const NavBar = React.lazy(() => import('./components/Nav'))
const Asist = React.lazy(() => import('./components/Asist'))
const Gallery = React.lazy(() => import('./components/Gallery'))

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ubicacion' element={<Location />} />
          <Route path='/asistencia' element={<Asist />} />
          <Route path='/galeria' element={<Gallery />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
