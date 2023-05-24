import React from 'react'

const Van = ({ van: { imageUrl, name, price, type } }) => {
	return (
		<div className="van-tile">
			<img src={imageUrl} />
			<div className="van-info">
				<h3>{name}</h3>
				<p>
					${price}
					<span>/day</span>
				</p>
			</div>
			<i className={`van-type ${type} selected`}>{type}</i>
		</div>
	)
}

export default Van
