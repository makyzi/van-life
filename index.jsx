import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Route,
	Link,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom'

import { Home, About, Vans, VanDetail, PageNotFound } from './pages'

import Layout from './components/Layout'

import {
	Dashboard,
	Income,
	Reviews,
	HostLayout,
	HostVans,
	HostVanLayout,
	HostVanDetails,
	HostVanPhotos,
	HostVanPricing,
} from './pages/Host'

import './server'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />

			<Route path="about" element={<About />} />
			<Route path="vans" element={<Vans />} />
			<Route path="vans/:id" element={<VanDetail />} />

			<Route path="host" element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="income" element={<Income />} />
				<Route path="vans" element={<HostVans />} />
				<Route path="vans/:id" element={<HostVanLayout />}>
					<Route index element={<HostVanDetails />} />
					<Route path="pricing" element={<HostVanPricing />} />
					<Route path="photos" element={<HostVanPhotos />} />
				</Route>
				<Route path="reviews" element={<Reviews />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
)

const App = () => {
	return <RouterProvider router={router}></RouterProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
