import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {
	return (
		<>
			<nav className="host-nav">
				<NavLink
					to="/host"
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					end
				>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					to="/host/income"
				>
					Income
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					to="/host/vans"
				>
					Vans
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					to="/host/reviews"
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default HostLayout
