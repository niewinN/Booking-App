import { useContext, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../../context/themeContext'
// import reportWebVitals from '../../../reportWebVitals'

const propTypes = {
	onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
	const [term, setTerm] = useState('')
	const theme = useContext(ThemeContext)
	const inputRef = useRef()

	const search = () => {
		props.onSearch(term)
	}

	const keyDownHandler = e => {
		if (e.key === 'Enter') {
			search()
		}
	}

	const focusInput = () => {
		inputRef.current.focus()
	}

	useEffect(() => {
		focusInput()
	}, [])

	return (
		<div className='d-flex'>
			<input
				ref={inputRef}
				value={term}
				onKeyDown={keyDownHandler}
				onChange={e => setTerm(e.target.value)}
				type='text'
				placeholder='Szukaj..'
				className='form-control'
			/>

			<button onClick={search} className={`btn btn-${theme.color} ms-1`}>
				Szukaj
			</button>
		</div>
	)
}

Searchbar.propTypes = propTypes

export default Searchbar
