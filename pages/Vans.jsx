import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

import { Van } from '../components'

const Vans = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get('type')

	const [vans, setVans] = useState([])

	useEffect(() => {
		const fetchVans = async () => {
			const data = await fetch('/api/vans')
			const json = await data.json()

			setVans(json.vans)
		}

		fetchVans().catch((e) => console.log(e))
	}, [])

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans

	return (
		<div className="van-list-container">
			<h2>Explore our van options</h2>
			<div className="van-list-filter-buttons">
				<button
					className={`${
						typeFilter === 'simple'
							? 'van-type simple selected'
							: 'van-type simple'
					}`}
					onClick={() => setSearchParams({ type: 'simple' })}
				>
					Simple
				</button>
				<button
					className={`${
						typeFilter === 'luxury'
							? 'van-type luxury selected'
							: 'van-type luxury'
					}`}
					onClick={() => setSearchParams({ type: 'luxury' })}
				>
					Luxury
				</button>
				<button
					className={`${
						typeFilter === 'rugged'
							? 'van-type rugged selected'
							: 'van-type rugged'
					}`}
					onClick={() => setSearchParams({ type: 'rugged' })}
				>
					Rugged
				</button>
				{typeFilter && (
					<button
						className="van-type clear-filters"
						onClick={() => setSearchParams({})}
					>
						Clear filter
					</button>
				)}
			</div>
			<div className="van-list">
				{displayedVans.map((van) => (
					<Van van={van} key={van.id} />
				))}
			</div>
		</div>
	)
}

export default Vans
