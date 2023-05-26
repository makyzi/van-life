import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {
	const [vans, setVans] = useState([])

	useEffect(() => {
		const fetchVans = async () => {
			const response = await fetch('/api/host/vans')
			const data = await response.json()
			setVans(data.vans)
		}

		fetchVans()
	}, [])

	return (
		<div>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				{vans.map((van) => (
					<Link
						to={`/host/vans/${van.id}`}
						key={van.id}
						className="host-van-link-wrapper"
					>
						<div className="host-van-single" key={van.id}>
							<img
								src={van.imageUrl}
								alt={`Photo of ${van.name}`}
							/>
							<div className="host-van-info">
								<h3>{van.name}</h3>
								<p>${van.price}/day</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default HostVans
