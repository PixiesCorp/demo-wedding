import SendMessages from './SendMessages'
import './Asist.css'
import { useState } from 'react'
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion'
import { RiCloseFill } from 'react-icons/ri'

function Asist() {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className="asist">
			<h1 className="asist-title">Codigo de Vestimenta</h1>
			<div className="asist-contain-img">
				<img src="/images/suit.png" alt="img" className="suit" />
				<img src="/images/dress.png" alt="img" className="dress" />
			</div>
			<h3 className="type-event">Formal</h3>
			<div className="info">
				<p>$Buzon de Dinero$</p>
				<p>!No Niños!</p>
			</div>
			<h1 className="confirm">!Confirma tu asistencia!</h1>
			<LazyMotion features={domAnimation}>
				{
					<m.button
						whileTap={{
							scale: 1.5,
						}}
						onClick={() => setOpen(true)}
						className="confirm-btn"
					>
						Confirmar
					</m.button>
				}
			</LazyMotion>

			<div className="fill"></div>
			<LazyMotion features={domAnimation}>
				{
					<AnimatePresence>
						{isOpen && (
							<m.div
								key="modal"
								initial={{
									y: -900,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{
									duration: 1.2,
									type: 'spring',
								}}
								exit={{
									y: -900,
									opacity: 0,
								}}
								className="communication"
							>
								<SendMessages />
								<m.div
									whileTap={{
										scale: 1.5,
									}}
									className="btn-exit"
									onClick={() => setOpen(false)}
								>
									<RiCloseFill color="white" size="2em" />
								</m.div>
							</m.div>
						)}
					</AnimatePresence>
				}
			</LazyMotion>
		</div>
	)
}

export default Asist
