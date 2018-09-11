//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

import {addToCart} from "../../actions/addToCart";
import {addCompare} from "../../actions/addCompare";
import {addWish} from "../../actions/addWish";
import {changeView} from "../../actions/changeView";
import {showProduct} from "../../actions/showProduct";

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';
import FaExchange from 'react-icons/lib/fa/exchange';
import FaHeartO from 'react-icons/lib/fa/heart-o';

import '../../styles/home/BestsellingItem.sass'


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
		showProduct: showProduct,
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
	clickHandler(id) {
		this.props.showProduct(id)
	}


	// dispatch methods
	dispatchAddToCart(e) {
		e.stopPropagation();
		let price = this.props.newPrice ? this.props.newPrice : this.props.price;
		let id = this.props.id;
		let arr = [id, price];
		this.props.addToCart(arr);
	}

	dispatchAddCompare(e) {
		e.stopPropagation();
		if (!this.props.compare.includes(this.props.id) && this.props.compare.length < 5) {
			this.props.addCompare(this.props.id);
		}
	}
	dispatchAddWish(e) {
		e.stopPropagation();
		!this.props.wishlist.includes(this.props.id) ? this.props.addWish(this.props.id) : null;
	}


	render() {

		return (
			// const path = require("../../assets/img/bestselling-products-" + [el.id] + ".png");
			
			<div className={"bestselling-products__item-wrapper"} onClick={() => this.clickHandler(this.props.id)}>
				<div key={this.props.id} className={"bestselling-products__item"}>
					{/* <img src={path} /> */}
					<div className={"bestselling-products__image"}>
						<div onClick={(e) => this.dispatchAddCompare(e)}>
							<FaExchange />
						</div>
						<div onClick={(e) => this.dispatchAddWish(e)}>
							<FaHeartO />
						</div>	
					</div>
						<p className={"bestselling-products__name"}>{this.props.name}</p>
						{this.props.newPrice ?
							<p className={"bestselling-products__price"}>
								{this.props.currencySymbol + (this.props.newPrice * this.props.currencyMultiplier).toFixed(2)}&nbsp;&nbsp;
								<span>
									{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
								</span>
							</p>
							:
							<p className={"bestselling-products__price"}>{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}</p>
						}
					
					<p className={"bestselling-products__add-to-cart"} onClick={(e) => this.dispatchAddToCart(e)}>
						{this.props.lang === 'en'?'ADD TO CART': 'Dodaj do koszyka'}
					</p> 
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(BestSellingItem);