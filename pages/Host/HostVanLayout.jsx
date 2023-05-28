import { useState, useEffect } from 'react'
import { NavLink, useParams, Outlet, Link } from 'react-router-dom'

const activeStyles = ({ isActive }) => {
	return isActive
		? { color: '#161616', fontWeight: 'bold', textDecoration: 'underline' }
		: null
}

const HostVanLayout = () => {
	const { id } = useParams()
	const [van, setVan] = useState({})

	useEffect(() => {
		const fetchVan = async () => {
			const response = await fetch(`/api/host/vans/${id}`)
			const data = await response.json()

			setVan(data.vans[0])
		}

		fetchVan().catch((err) => console.log(err))
	}, [])

	if (!van) {
		return <h1>Loading...</h1>
	}

	return (
		<section>
			<Link className="back-button" to=".." relative="path">
				&lt; <span>Back to all vans</span>
			</Link>

			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
					<div className="host-van-detail-info-text">
						<i className={`van-type van-type-${van.type}`}>
							{van.type}
						</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
				<nav className="host-van-detail-nav">
					<NavLink end to="." style={activeStyles}>
						Details
					</NavLink>
					<NavLink style={activeStyles} to="pricing">
						Pricing
					</NavLink>
					<NavLink style={activeStyles} to="photos">
						Photos
					</NavLink>
				</nav>
				<Outlet context={van} />
			</div>
		</section>
	)
}

export default HostVanLayout
