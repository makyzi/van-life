import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div className="not-found-container">
			<h1>Sorry, the page you tried to request was not found.</h1>
			<Link className="link-button" to={'/'}>
				Return to home
			</Link>
		</div>
	)
}

export default PageNotFound
