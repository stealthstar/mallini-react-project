// - - - imports - - - 
//react imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//action imports
import { addToCart } from "../../actions/addToCart";
import { removeFromCart } from "../../actions/removeFromCart";
import { addWish } from "../../actions/addWish";
//font awesome imports
import FaClose from 'react-icons/lib/fa/close';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
//json import
import data from '../../assets/data.json';

//module import
import { findId } from"../../assets/js-modules/findId";

import "../../styles/cartPage/CartItem.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	view: state.viewReducer.viewName,
	cartItems: state.cartReducer.items,
	wishlist: state.iconReducer.wishlist
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addWish: addWish,
		addToCart: addToCart,
		removeFromCart: removeFromCart
	}, dispatch);
}

class CartItem extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			product: data.products.filter(el => el.id === this.props.number)[0],
			price: 0
		};

		this.clickHandler = this.clickHandler.bind(this);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchRemoveFromCart = this.dispatchRemoveFromCart.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);
	}

	componentWillMount() {
		//set up an array which will be used to add or remove this exact item
		const discount = this.getProduct().tags.discount;
		const price = discount > 0 ?
			this.state.product.price - (this.state.product.price*discount/100).toFixed(2)
			: this.state.product.price;
		this.setState({
			productArray: [this.state.product.id, price]
		});
	}

	// dispatch methods
	dispatchAddToCart() {
		this.props.addToCart(this.state.productArray);
	}
	dispatchRemoveFromCart() {
		this.props.removeFromCart(this.state.productArray);
	}

	dispatchAddWish() {
		if (!this.props.wishlist.includes(this.state.product.id)) {
			this.props.addWish(this.state.product.id);
		}
	}
	 clickHandler() {
		let counter = this.props.amount;
		for (let i = 0; i < counter; i++) {
			this.props.removeFromCart(this.state.productArray);
		}
		
	 }
	getProduct() {
		// external function filtering to get product in object
		return findId(this.props.number, data);
	}

	render() {
		const product = this.getProduct();
		const price = product.tags.discount ?
			product.price - (product.price * product.tags.discount / 100)
			: product.price;
		const color = product.tags.discount ? "#007aff" : "#000000";
	 	const availabilityColor = product.quantity ? "#4cd964" : "#ff3b30";
		return (
			<div className={"cart__item"}>
				<div className={"cart__item-picture"}/>
				<h3>{product[this.props.lang].name}</h3>
				<div className={"cart__item__input-wrapper"}>
					<p className={"cart__item__amount flex-center"}>{this.props.amount}</p>
					<div className={"buttons"}>
						<button className={"cart__item__btn cart__item__btn--add"} onClick={this.dispatchAddToCart}>
							<FaPlus />
						</button>
						<button className={"cart__item__btn cart__item__btn--remove"} onClick={this.dispatchRemoveFromCart}>
							<FaMinus />
						</button>
					</div>
				</div>
				<div className={"cart__item__price"}>
					<p>{this.props.currencySymbol + (price*this.props.currencyMultiplier).toFixed(2)}</p>
				</div>
				<div className={"cart__item__value"}>
					<p>{this.props.currencySymbol + (price*this.props.currencyMultiplier*this.props.amount).toFixed(2)}</p>
				</div>
				<div className={"remove-cart"} onClick={this.clickHandler}>
					<FaClose />
				</div>
				
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);