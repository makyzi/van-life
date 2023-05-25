import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Home, About, Vans, VanDetail } from './pages'

import Layout from './components/Layout'

import { Dashboard, Income, Reviews } from './pages/Host'

import './server'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vans" element={<Vans />} />
					<Route path="/vans/:id" element={<VanDetail />} />
					<Route path="/host" element={<Dashboard />}>
						<Route path="/host/income" element={<Income />} />
						<Route path="/host/reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
