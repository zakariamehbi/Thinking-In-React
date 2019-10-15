import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		let rows = [];
		let categoryName = null;

		this.props.products.forEach(product => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}

			if (inStockOnly && !product.stocked) {
				return;
			}

			if (product.category !== categoryName) {
				console.log('ProductCategoryRow : ' + product.category)

				rows.push(<ProductCategoryRow key={product.category} categoryName={product.category} />)
			}

			console.log('productName : ' + product.name)

			rows.push(<ProductRow key={product.name} stocked={product.stocked} name={product.name} price={product.price} />)

			categoryName = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
				{ rows }
				</tbody>
			</table>
		)
	}
}
