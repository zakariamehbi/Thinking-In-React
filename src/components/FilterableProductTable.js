import React, { Component } from 'react'

import ProductTable from "./ProductTable";
import SearchBar from './SearchBar'

import productsArray from "../data.json";

export default class FilterableProductTable extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filterText: '',
			inStockOnly: false
		}

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(filterText) {
		this.setState({
			filterText
		})
	}

	handleInStockChange(inStockOnly) {
		this.setState({
			inStockOnly
		})
	}

	render() {
		const state = this.state;

		return (
			<div>
				<SearchBar filterText={state.filterText} isStockOnly={state.isStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange} />
				<ProductTable filterText={state.filterText} inStockOnly={state.inStockOnly} products={productsArray} />
			</div>
		)
	}
}

