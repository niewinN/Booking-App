import PropTypes from 'prop-types'
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'
import ThemeContext from '../../../context/themeContext'
import { useContext } from 'react'

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
}

function Hotel(props) {
	const theme = useContext(ThemeContext)
	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						<img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.name}</p>

								<p>
									<span className='badge bg-secondary'>{props.city}</span>
								</p>
							</div>
							<div className='col text-end'>
								<h5>Ocena: {props.rating}</h5>

								<a
									href='#section'
									className={`btn btn-${theme.color} float-end mt-2 px-5`}>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

Hotel.propTypes = propTypes

export default Hotel
