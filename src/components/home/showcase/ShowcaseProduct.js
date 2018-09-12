//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
import { showProduct } from "../../../actions/showProduct";
import { addToCart } from "../../../actions/addToCart";
import { addCompare } from "../../../actions/addCompare";
import { addWish } from "../../../actions/addWish";
import data from '../../../assets/data.json'

import '../../../styles/home/showcase/ShowcaseProduct.sass'

//module import
import { findId } from "../../../assets/js-modules/findId";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier
});
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addToCart: addToCart,
		addCompare: addCompare,
		showProduct: showProduct,
		addWish: addWish
	}, dispatch);
}
class ShowcaseProduct extends React.Component {
	constructor(props) {
		super(props);

		// method bindings
		this.clickHandler = this.clickHandler.bind(this);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddCompare = this.dispatchAddCompare.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);

	}
	//click Handler
	clickHandler(productId, e) {
		e.stopPropagation();
		this.props.showProduct(productId);
	}

	// dispatch methods
	dispatchAddToCart(e) {
		e.stopPropagation();
		let price = this.props.discount ? 
			this.getProduct().price - (this.getProduct().price * this.getProduct().tags.discount / 100).toFixed(2)
			: this.getProduct().price;
		let id = this.props.number;
		let arr = [id, price];
		this.props.addToCart(arr);
	}

	dispatchAddCompare() {
		if (!this.props.compare.includes(this.props.id) && this.props.compare.length < 5) {
			this.props.addCompare(this.props.id);
		}
	}
	dispatchAddWish() {
		if (!this.props.wishlist.includes(this.props.id)) {
			this.props.addWish(this.props.id);
		}
	}

	getProduct() {
		return findId(this.props.number, data);
	}

	render() {
		const product = this.getProduct();
		product.newPrice = product.price - (product.price * product.tags.discount / 100);
		return (
			<div className={"showcase-product__wrapper"}>
				<div className={"showcase-product__inner"} onClick={(e) => this.clickHandler(this.props.number, e)}>
					<div className={"showcase-product__photo"}></div>
						
					<p className={"showcase-product__name"} >{product[this.props.lang].name}</p>
						 {product.tags.discount ? 
						<div className={"showcase-product__prices"}> 
							<p className={"showcase-product__price"} >
								{this.props.currencySymbol + (product.newPrice*this.props.currencyMultiplier).toFixed(2)}
							</p>
							<p className={"showcase-product__old-price"} >
									{this.props.currencySymbol + (product.price * this.props.currencyMultiplier).toFixed(2)}
							</p>
						</div>
						: <p className={"showcase-product__price"} >
							{this.props.currencySymbol + (product.price * this.props.currencyMultiplier).toFixed(2)}
							</p>
						}
					<p className={"showcase-product__add-to-cart"} onClick={(e) => this.dispatchAddToCart(e)}>
						{this.props.lang === 'en' ? 'ADD TO CART' : 'Dodaj do koszyka'}
					</p> 
				</div>
			</div>
		);

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseProduct);