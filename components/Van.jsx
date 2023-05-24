import React from 'react'
import { Link } from 'react-router-dom'

const Van = ({ van: { id, imageUrl, name, price, type } }) => {
	return (
		<div className="van-tile">
			<Link to={`/vans/${id}`}>
				<img src={imageUrl} />
				<div className="van-info">
					<h3>{name}</h3>
					<p>
						${price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${type} selected`}>{type}</i>
			</Link>
		</div>
	)
}

export default Van
