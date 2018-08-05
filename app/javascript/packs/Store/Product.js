import React, {Component} from 'react'
import Item from './Item'

class Product extends Component {
	render() {
		return(
			<div className="product">
				<Item product={this.props.product}/>
				<div className="cart-controls">
					<p className="price">{this.props.product.attributes[0]}</p>
					<button>Add to Cart</button>
					<button>Remove from Cart</button>
				</div>
			</div>		
		)
	}
}	

export default Product