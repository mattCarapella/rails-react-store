import React from 'react'

const Item = ({product}) => 
	<div className="item-container">
		<h2>{ product.name }</h2>
		<h3>{product.caption}</h3>
		<div className="sticker">
			<img src={product.images[0]} alt={product.name} width="200" height="200" />
		</div>
		<h3>Free Shipping!</h3> 
	</div>

export default Item