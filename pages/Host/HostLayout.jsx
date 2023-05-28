import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {
	return (
		<>
			<nav className="host-nav">
				<NavLink
					to="."
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
					to="income"
				>
					Income
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					to="vans"
				>
					Vans
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'active-link' : null
					}
					to="reviews"
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default HostLayout
