import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from './'

import Header from './Header'

const Layout = () => {
	return (
		<div className="site-wrapper">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
