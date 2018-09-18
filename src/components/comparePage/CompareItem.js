// - - - imports - - - 
//react imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//action imports
import {removeCompare} from '../../actions/removeCompare';
import { addToCart } from "../../actions/addToCart";
import { addWish } from "../../actions/addWish";
//font awesome imports
import FaClose from 'react-icons/lib/fa/close';
import FaHeartO from 'react-icons/lib/fa/heart-o';
//json import
import data from '../../assets/data.json';

import "../../styles/comparePage/CompareItem.sass";
import { normalize } from "path";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	view: state.viewReducer.viewName,
	compare: state.iconReducer.compare,
	wishlist: state.iconReducer.wishlist
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		removeCompare: removeCompare,
		addWish: addWish,
		addToCart: addToCart
	}, dispatch);
}

class CompareItem extends React.Component {
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
	dispatchAddToCart(e) {
		const event = e;
		event.preventDefault();
		event.stopPropagation();
		
		const price = this.state.product.newPrice || this.state.product.price;
		const arr = [this.state.product.id, price];
		this.props.addToCart(arr);
	}

	dispatchAddWish() {
		if (!this.props.wishlist.includes(this.state.product.id)) {
			this.props.addWish(this.state.product.id);
		}
	}
	clickHandler() {
		this.props.removeCompare(this.props.number)
	}

	render() {
		const product = this.state.product;
		const price = product["new-price"] || product.price;
		let color = product["new-price"] ? "#007aff" : "#000000";
		let availabilityColor = product.quantity ? "#4cd964" : "#ff3b30";
		// get product image:
		const path = product.images ? require(`../../assets/img/products/${product.images[0]}`) : require(`../../assets/img/products/no-image.png`);
		return (
			<div className={"compare__item"}>
				<header>
					<h3>{product[this.props.lang].name}</h3>
					<div className={"remove-compare"} onClick={this.clickHandler}>
						<FaClose />
					</div>
				</header>
				<div 
					className={"compare__item-picture"}
					style={{
						backgroundImage: `url(${path})`
					}}
					>
					<div onClick={this.dispatchAddWish}>
						<FaHeartO />
					</div>
					<div className={"compare__item-picture__add-to-cart"} onClick={(e) => this.dispatchAddToCart(e)}>
						{
							this.props.lang === 'en' ?
								"Add to cart "
								: "Dodaj do koszyka"

						}
					</div>
				</div>
				<div className={"compare-table flex-center"}>
					<div className={"compare-table__column compare-table__column--left"}>
						<div className={"compare-table__item"}>
							{
								this.props.lang ==='en' ?
									"Category: "
								:	"Kategoria: "

							}
						</div>
						<div className={"compare-table__item"}>
							{
								this.props.lang ==='en' ?
									"Price: "
								:	"Cena: "

							}
						</div>
						<div className={"compare-table__item"}>
							{
								this.props.lang ==='en' ?
									"Available? "
								:	"Dostępny? "

							}
						</div>
						<div className={"compare-table__item"}>
							{
								this.props.lang ==='en' ?
									"Quantity: "
								:	"Ilość: "

							}
						</div>
					</div>
					<div className={"compare-table__column compare-table__column--right"}>
						<div className={"compare-table__item"}>
							{
								product[this.props.lang].category
							}
						</div>
						<div className={"compare-table__item"} style={{"color": color}}>
							{
								this.props.currencySymbol + 
								(price*this.props.currencyMultiplier).toFixed(2)
							}
						</div>
						<div className={"compare-table__item"} style={{ "color": availabilityColor }}>
							{
								this.props.lang === "en" ? 
									product.quantity ? "Yes" : "No"
									: product.quantity ? "Tak" : "Nie"
							}
						</div>
						<div className={"compare-table__item"}>
							{
								product.quantity
							}
						</div>
					</div>

				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CompareItem);