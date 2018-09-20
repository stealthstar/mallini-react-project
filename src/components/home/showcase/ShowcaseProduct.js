// React imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'
// component imports
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
// actions imports
import { changeProduct } from "../../../actions/changeProduct";
import { addToCart } from "../../../actions/addToCart";
import { addCompare } from "../../../actions/addCompare";
import { addWish } from "../../../actions/addWish";
// data import
import data from '../../../assets/data.json'
// style import
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
		changeProduct: changeProduct,
		addWish: addWish
	}, dispatch);
}
class ShowcaseProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			hover: false
		}
		// method bindings
		this.clickHandler = this.clickHandler.bind(this);
		this.toggleHover = this.toggleHover.bind(this);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddCompare = this.dispatchAddCompare.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);

	}

	toggleHover() {
		this.setState({ hover: !this.state.hover })
	}

	//click Handler
	clickHandler(productId, e) {
		this.props.changeProduct(productId);
	}

	// dispatch methods
	dispatchAddToCart(e) {
		let event = e;
		event.stopPropagation();
		event.preventDefault();
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
		const path = require(`../../../assets/img/products/${product.images[0]}`);
		const pathHover = require(`../../../assets/img/products/${product.images[1]}`);
		return (
			<div className={"showcase-product__wrapper"}>
			<NavLink
				style={{
					textDecoration: 'none',
					color: 'black'
				}}
					to={"/product/" + product.id}
				onClick={(e) => this.clickHandler(product.id, e)}>
				<div className={"showcase-product__inner"} 
					onClick={(e) => this.clickHandler(this.props.number, e)}
					onMouseEnter={this.toggleHover} 
					onMouseLeave={this.toggleHover}
					>
					<div 
						className={"showcase-product__photo"}
						style={{backgroundImage: `url(${this.state.hover ? pathHover : path})`}}
						></div>
						
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
			</NavLink>
			</div>
		);

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseProduct);