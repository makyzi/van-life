import { useState, useEffect } from 'react'
import { NavLink, useParams, Outlet, Link } from 'react-router-dom'

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
			<Link to="/host/vans">&lt;- Back to all vans</Link>
			<div className="host-van-single-details">
				<div className="host-van-single-wrapper">
					<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
					<div className="host-van-single-details-info">
						<i>
							<span>{van.type}</span>
						</i>
						<h3>{van.name}</h3>
						<p>${van.price}/day</p>
					</div>
				</div>
				<nav>
					<NavLink
						end
						to={`/host/vans/${id}`}
						style={({ isActive }) =>
							isActive
								? { color: '#000', textDecoration: 'underline' }
								: null
						}
					>
						Details
					</NavLink>
					<NavLink
						style={({ isActive }) =>
							isActive
								? { color: '#000', textDecoration: 'underline' }
								: null
						}
						to={`/host/vans/${id}/pricing`}
					>
						Pricing
					</NavLink>
					<NavLink
						style={({ isActive }) =>
							isActive
								? { color: '#000', textDecoration: 'underline' }
								: null
						}
						to={`/host/vans/${id}/photos`}
					>
						Photos
					</NavLink>
				</nav>
			</div>

			<Outlet />
		</section>
	)
}

export default HostVanLayout
