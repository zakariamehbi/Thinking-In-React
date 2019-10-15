import React, { Component } from 'react'

export default class ProductRow extends Component {
	render() {
		const product = this.props;
		const productName = product.stocked ? product.name : <span style={{ color: 'red' }}>
			{product.name}
		</span>

		return (
			<tr>
				<td>{ productName }</td>
				<td>{ product.price }</td>
			</tr>
		)
	}
}

