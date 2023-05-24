import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Home, About } from './pages'

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 *
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 *
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<Link className="site-logo" to="/">
					#VANLIFE
				</Link>
				<nav>
					<Link to="/about">About</Link>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)