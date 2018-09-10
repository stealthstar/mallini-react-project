//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
import { addToCart } from "../../../actions/addToCart";
import { addCompare } from "../../../actions/addCompare";
import { addWish } from "../../../actions/addWish";
import data from '../../../assets/data.json'

import '../../../styles/home/showcase/ShowcaseProduct.sass'


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
		addWish: addWish
	}, dispatch);
}
class ShowcaseProduct extends React.Component {
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

	render() {
		return (
			<div className={"showcase-product__wrapper"} onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}>
				<div className={"showcase-product__inner"}>
					<div className={"showcase-product__photo"}></div>
					{this.state.hover ?
						<p className={"showcase-product__price showcase-product__price--hovered"} onClick={this.dispatchAddToCart}>
							{this.props.lang === 'en' ? 'ADD TO CART' : 'Dodaj do koszyka'}
						</p> :
						 this.props.newPrice ? 
						<div className={"showcase-product__prices"}> 
							<p className={"showcase-product__price"} >
								{this.props.currencySymbol + (this.props.newPrice*this.props.currencyMultiplier).toFixed(2)}
							</p>
							<p className={"showcase-product__old-price"} >
									{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
							</p>
						</div>
						: <p className={"showcase-product__price"} >
							{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
							</p>
						}
					<p className={"showcase-product__name"} >{this.props.name}</p>
				</div>
			</div>
		);

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseProduct);