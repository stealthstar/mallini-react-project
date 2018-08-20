//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

import {addToCart} from "../../actions/addToCart";
import {addCompare} from "../../actions/addCompare";
import {addWish} from "../../actions/addWish";

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
		addToCart: addToCart,
		addCompare: addCompare,
		addWish: addWish
	}, dispatch);
}

class BestSellingItem extends React.Component {
	constructor(props) {
		super(props);

		// method bindings
		this.handleHover = this.handleHover.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddCompare = this.dispatchAddCompare.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);
		
		this.state = {
			hover: false
		}
	}

	// helper hover tracker methods
	handleHover() {
		this.setState({
			hover: true
		});
	}
	handleMouseOut() {
		this.setState({
			hover: false
		});
	}

	// dispatch methods
	dispatchAddToCart() {
		let price = this.props.newPrice ? this.props.newPrice : this.props.price;
		let id = this.props.id;
		let arr = [id, price];
		this.props.addToCart(arr);
	}

	dispatchAddCompare() {
		if (!this.props.compare.includes(this.props.id) && this.props.compare.length < 5) {
			this.props.addCompare(this.props.id);
		}
	}
	dispatchAddWish() {
		if (!this.props.wishlist.includes(this.props.id)){
			this.props.addWish(this.props.id);
		}
	}


	render() {

		return (
			// const path = require("../../assets/img/bestselling-products-" + [el.id] + ".png");
			
			<div className={"bestselling-products__item-wrapper"} onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}>
				<div key={this.props.id} className={"bestselling-products__item"}>
					{/* <img src={path} /> */}
					<div className={"bestselling-products__image"}>
						<div onClick={this.dispatchAddCompare}>
							<FaExchange />
						</div>
						<div onClick={this.dispatchAddWish}>
							<FaHeartO />
						</div>	
					</div>
					{this.state.hover ? 
						<p className={"bestselling-products__price"} onClick={this.dispatchAddToCart}>
							{this.props.lang === 'en'?'ADD TO CART': 'Dodaj do koszyka'}
						</p> :
						this.props.newPrice ?
							<p className={"bestselling-products__price"}>
								{this.props.currencySymbol + (this.props.newPrice * this.props.currencyMultiplier).toFixed(2)}&nbsp;&nbsp;
								<span>
									{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
								</span>
							</p>
							: <p className={"bestselling-products__price"}>{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}</p>
					}
					<p className={"bestselling-products__name"}>{this.props.name}</p>
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(BestSellingItem);