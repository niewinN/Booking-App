import { useEffect, useState, useLayoutEffect } from 'react'

const quotes = [
	'Podróże to jedyna rzecz na którą wydajemy pieniądze, a stajemy się bogatsi',
	'Turyści nie wiedzą gdzie byli, podróżnicy nie wiedzą gdzie będą',
	'Aby poznać człowieka, trzeba zostać jego towarzyszem podróży',
	'Raz do roku pojedź w miejsce, w którym jeszcze nie byłeś',
]

const styles = {
	position: 'absolute',
	padding: '10px',
	top: '10px',
	left: 0,
	right: 0,
	textAlign: 'center',
	color: '#fff',
	fontStyle: 'italic',
}

function InspiringQuote(props) {
	const [quote, setQuote] = useState('Wczytywanie cytatu..')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		//pobiera
		setLoading(false)
	}, [])

	useLayoutEffect(() => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)])
	}, [loading])

	return <p style={styles}>{quote}</p>
}

export default InspiringQuote
