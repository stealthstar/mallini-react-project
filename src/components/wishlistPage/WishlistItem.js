// - - - imports - - - 
//react imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//action imports
import {removeWish} from '../../actions/removeWish';
import { addToCart } from "../../actions/addToCart";
import { addWish } from "../../actions/addWish";
//font awesome imports
import FaClose from 'react-icons/lib/fa/close';
import FaHeartO from 'react-icons/lib/fa/heart-o';
//json import
import data from '../../assets/data.json';

import "../../styles/wishlistPage/WishlistItem.sass";
import { normalize } from "path";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	view: state.viewReducer.viewName,
	wishlist: state.iconReducer.wishlist
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		removeWish: removeWish,
		addWish: addWish,
		addToCart: addToCart
	}, dispatch);
}

class WishlistItem extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			product: data.products.filter(el => el.id === this.props.number)[0],		
		};

		this.clickHandler = this.clickHandler.bind(this);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);
	}



	// dispatch methods
	dispatchAddToCart() {
		let price = this.state.product.newPrice || this.state.product.price;
		let id = this.state.product.id;
		let arr = [id, price];
		this.props.addToCart(arr);
	}

	dispatchAddWish() {
		if (!this.props.wishlist.includes(this.state.product.id)) {
			this.props.addWish(this.state.product.id);
		}
	}
	clickHandler() {
		this.props.removeWish(this.props.number);
	}

	render() {
		const product = this.state.product;
		const price = product["new-price"] || product.price;
		let color = product["new-price"] ? "#007aff" : "#000000";
		let availabilityColor = product.quantity ? "#4cd964" : "#ff3b30";
		console.log(product);	
		return (
			<div className={"wishlist__item"}>
				<header>
					<h3>{product[this.props.lang].name}</h3>
					<div className={"remove-wishlist"} onClick={this.clickHandler}>
						<FaClose />
					</div>
				</header>
				<div className={"wishlist__item-picture"}>
					<div onClick={this.dispatchAddWish}>
						<FaHeartO />
					</div>
					
				</div>
				<div className={"wishlist-table flex-center"}>
					<div className={"wishlist-table__column wishlist-table__column--left"}>

						<div className={"wishlist-table__item"}>
							{
								this.props.lang ==='en' ?
									"Price: "
								:	"Cena: "

							}
						</div>
						<div className={"wishlist-table__item"}>
							{
								this.props.lang ==='en' ?
									"Available? "
								:	"Dostępny? "

							}
						</div>

					</div>
					<div className={"wishlist-table__column wishlist-table__column--right"}>

						<div className={"wishlist-table__item"} style={{"color": color}}>
							{
								this.props.currencySymbol + 
								(price*this.props.currencyMultiplier).toFixed(2)
							}
						</div>
						<div className={"wishlist-table__item"} style={{ "color": availabilityColor }}>
							{
								this.props.lang === "en" ? 
									product.quantity ? "Yes" : "No"
									: product.quantity ? "Tak" : "Nie"
							}
						</div>

					</div>
				</div>
				<div className={"wishlist__item-picture__add-to-cart"} onClick={this.dispatchAddToCart}>
					{
						this.props.lang === 'en' ?
							"Add to cart "
							: "Dodaj do koszyka"

					}
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);