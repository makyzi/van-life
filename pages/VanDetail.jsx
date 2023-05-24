import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VanDetail = () => {
	const [vanDetails, setVanDetails] = useState({})
	const { id: vanId } = useParams()

	useEffect(() => {
		const fetchVanData = async () => {
			const response = await fetch(`/api/vans/${vanId}`)
			const data = await response.json()
			setVanDetails(data.vans)
		}

		fetchVanData()
	}, [vanId])

	const { imageUrl, type, name, price, description } = vanDetails

	return (
		<div className="van-detail-container">
			{vanDetails ? (
				<div className="van-detail">
					<img src={imageUrl} alt="Image of van" />
					<i className={`van-type ${type} selected`}>{type}</i>
					<h2>{name}</h2>
					<p className="van-price">
						<span>${price}</span>/day
					</p>
					<p>{description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading ... </h2>
			)}
		</div>
	)
}

export default VanDetail
