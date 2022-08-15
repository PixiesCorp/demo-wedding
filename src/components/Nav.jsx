import { Link } from 'react-router-dom'
import {HiHome , HiLocationMarker , HiCheck, HiPhotograph} from 'react-icons/hi'
import { motion } from "framer-motion";

function NavBar (){
  return (
      <nav className='nav'>
        <ul className='contain-nav'>
          <motion.li
            whileTap={{
              scale: 1.5
            }}
            >
            <Link to="/" className='link'>
              <HiHome size="1.5em"/>
              <p>Inicio</p>
            </Link>
          </motion.li>
          <motion.li
            whileTap={{
              scale: 1.5
            }}
            >
            <Link to="/ubicacion" className='link'>
              <HiLocationMarker size="1.5em"/>
              <p>Ubicacion</p>
            </Link>
          </motion.li>
          <motion.li
            whileTap={{
              scale: 1.5
            }}
            >
            <Link to="/asistencia" className='link'>
              <HiCheck size="1.5em"/>
              <p>Asistencia</p>
            </Link>
          </motion.li>
          <motion.li
            whileTap={{
              scale: 1.5
            }}
            >
            <Link to="/galeria" className='link'>
              <HiPhotograph size="1.5em"/>
              <p>Galeria</p>
            </Link>
          </motion.li>
        </ul>
      </nav>
  )
}

export default NavBar