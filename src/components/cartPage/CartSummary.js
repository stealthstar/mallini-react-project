// - - - imports - - - 
//react imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/cartPage/CartSummary.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	cartItemsAmount: state.cartReducer.itemsAmount,
	cartWorth: state.cartReducer.cartWorth,
});


class CartSummary extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={"cart__summary"}>
				<header>
					{this.props.lang === "en" ? "Order Summary" : "Podsumowanie zamówienia"}
				</header>
                <div className={"cart__summary__row"}>
                    <div className={"cart__summary__column"}>
                        {this.props.lang === "en" ? "Items in cart:" : "Produkty w koszyku:"}
					</div>
                    <div className={"cart__summary__column"}>
					{this.props.cartItemsAmount}
					</div>
				</div>
                <div className={"cart__summary__row"}>
                    <div className={"cart__summary__column"}>
                        {this.props.lang === "en" ? "Shipping:" : "Koszty przesyłki:"}
					</div>
                    <div className={"cart__summary__column"}>
                        {this.props.lang === "en" ? "FREE!" : "DARMOWA!"}
					</div>
				</div>
                <div className={"cart__summary__row"}>
                    <div className={"cart__summary__column"}>
                        {this.props.lang === "en" ? "Subtotal:" : "Wartość zakupów"}
					</div>
                    <div className={"cart__summary__column"}>
                        {this.props.currencySymbol + this.props.cartWorth.toFixed(2)}
					</div>
				</div>
                <div className={"cart__summary__row cart__summary__row--total"}>
                    <div className={"cart__summary__column cart__summary__column--total"}>
                        {this.props.lang === "en" ? "Estimated Total:" : "Koszt całkowity:"}
					</div>
                    <div className={"cart__summary__column cart__summary__column--total"}>
                        {this.props.currencySymbol + this.props.cartWorth.toFixed(2)}
					</div>
				</div>
			</div>
		);
		
	}

}

export default connect(mapStateToProps)(CartSummary);