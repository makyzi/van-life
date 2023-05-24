import { useState, useEffect } from 'react'

import { Van } from '../components'

const Vans = () => {
	const [vans, setVans] = useState([])

	useEffect(() => {
		const fetchVans = async () => {
			const data = await fetch('/api/vans')
			const json = await data.json()

			setVans(json.vans)
		}

		fetchVans().catch((e) => console.log(e))
	}, [])

	console.log(vans)

	return (
		<div className="van-list-container">
			<h2>Explore our van options</h2>
			<div className="van-list">
				{vans.map((van) => (
					<Van van={van} key={van.id} />
				))}
			</div>
		</div>
	)
}

export default Vans
