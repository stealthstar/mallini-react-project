//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import { NavLink } from 'react-router-dom'
import {addToCart} from "../../actions/addToCart";
import {addCompare} from "../../actions/addCompare";
import {addWish} from "../../actions/addWish";
import { changeProduct } from "../../actions/changeProduct";

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';
import FaExchange from 'react-icons/lib/fa/exchange';
import FaHeartO from 'react-icons/lib/fa/heart-o';

import '../../styles/home/BestsellingItem.sass'
//module import
import { findId } from "../../assets/js-modules/findId";
//data import
import data from "../../assets/data.json";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	compare: state.iconReducer.compare,
	wishlist: state.iconReducer.wishlist
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeProduct: changeProduct,
		addToCart: addToCart,
		addCompare: addCompare,
		addWish: addWish
	}, dispatch);
}

class BestSellingItem extends React.Component {
	constructor(props) {
		super(props);

		// method bindings
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddCompare = this.dispatchAddCompare.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		

	}

	//click Handler
	clickHandler(id, e) {
		// e.preventDefault();
		this.props.changeProduct(id)
	}


	// dispatch methods
	dispatchAddToCart(e) {
		let event = e;
		event.stopPropagation();
		event.preventDefault();
		// if discount applied calculate new price
		// else get price with getProduct method
		let price = this.props.discount ? 
			this.getProduct().price - (this.getProduct().price * this.getProduct().tags.discount / 100) 
			: this.getProduct().price;
		let id = this.props.id;
		let arr = [id, price];
		this.props.addToCart(arr);
	}

	dispatchAddCompare(e) {
		let event = e;
		event.stopPropagation();
		event.preventDefault();
		if (!this.props.compare.includes(this.props.id) && this.props.compare.length < 5) {
			this.props.addCompare(this.props.id);
		}
	}
	dispatchAddWish(e) {
		let event = e;
		event.stopPropagation();
		event.preventDefault();
		!this.props.wishlist.includes(this.props.id) ? this.props.addWish(this.props.id) : null;
	}


	getProduct() {
		return findId(this.props.id, data);
	}

	render() {
		const product = this.getProduct();
		product.newPrice = product.price - (product.price*product.tags.discount/100);
		const path = product.images ? require(`../../assets/img/products/${product.images[0]}`) : require(`../../assets/img/products/no-image.png`);
		return (
			
			<NavLink
				to={"/product"}
				className={"bestselling-products__item-wrapper"} 
				onClick={(e) => this.clickHandler(product.id, e)}>
				<div key={product.id} className={"bestselling-products__item"}>
					{/* <img src={path} /> */}
					<div 
						className={"bestselling-products__image"}
						style={{
							backgroundImage: `url(${path})`
						}}
						>
						<div onClick={(e) => this.dispatchAddCompare(e)}>
							<FaExchange />
						</div>
						<div onClick={(e) => this.dispatchAddWish(e)}>
							<FaHeartO />
						</div>	
					</div>
					<p className={"bestselling-products__name"}>{product[this.props.lang].name}</p>
						{product.tags.discount > 0 ?
							<p className={"bestselling-products__price"}>
							{this.props.currencySymbol + (product.newPrice * this.props.currencyMultiplier).toFixed(2)}&nbsp;&nbsp;
								<span>
								{this.props.currencySymbol + (product.price * this.props.currencyMultiplier).toFixed(2)}
								</span>
							</p>
							:
						<p className={"bestselling-products__price"}>{this.props.currencySymbol + (product.price * this.props.currencyMultiplier).toFixed(2)}</p>
						}
					
					<p className={"bestselling-products__add-to-cart"} onClick={(e) => this.dispatchAddToCart(e)}>
						{this.props.lang === 'en'?'ADD TO CART': 'Dodaj do koszyka'}
					</p> 
				</div>
			</NavLink>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(BestSellingItem);