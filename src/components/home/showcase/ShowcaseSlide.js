//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
import ShowcaseProduct from './ShowcaseProduct';

import data from '../../../assets/data.json'

import '../../../styles/home/showcase/Showcase.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	width: state.windowSizeReducer.windowWidth,
});

class ShowcaseSlide extends React.Component {
	constructor(props) {
		super(props);

	}

	// product array generators
	newProducts() {
		let products = data.products, res = [];
		for (let i = products.length - 1; i > (products.length - 7); i--) {
			res.push(products[i]);
		}
		return res;
	}

	topRated() {
		let products = data.products;
		products.sort((a, b) => a.rating < b.rating);
		return products.slice(0, 6);
	}

	onSale() {
		let products = data.products, res = [];
		for (let i = 0; i < products.length; i++) {
			if(products[i].tags.sale === true && res.length < 6) {
				res.push(products[i]);
			}
		}
		return res;
	}

	popularProducts() {
		let products = data.products;
		products.sort((a, b) => a.sold < b.sold);
		return products.slice(0, 6);
	}

	getProducts(slideName) {
		switch(slideName) {
			case "new":
				return this.newProducts();
			case "sale":
				return this.onSale();
			case "topRated":
				return this.topRated();
			case "popular":
				return this.popularProducts();
			default:
				return '';
		}
	}
	// - - -
	render() {
		let products = this.getProducts(this.props.slideName), 
			productsShort = products.slice(0, 4),
			productsVeryShort = products.slice(0, 2);
		return (
			<div className={"showcase__slide"}>
				<div className={"showcase__slide__inner-wrapper"}>
					{this.props.width > 1400 ?
							products.map(el => <ShowcaseProduct key={el.id} number={el.id} discount={el.tags.discount}/>) 
							:
							this.props.width > 600 ?
								productsShort.map(el => <ShowcaseProduct key={el.id} number={el.id} discount={el.tags.discount}/>)
								: productsVeryShort.map(el => <ShowcaseProduct key={"vs"+el.id} number={el.id} discount={el.tags.discount}/>)
					}
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps)(ShowcaseSlide);