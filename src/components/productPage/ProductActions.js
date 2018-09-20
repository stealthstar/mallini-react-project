// React/Redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action import
import { addToCart } from "../../actions/addToCart";
import { addWish } from "../../actions/addWish";
import { addCompare } from "../../actions/addCompare";
//module import
import { findId } from "../../assets/js-modules/findId";
// FontAwesome imports
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import FaExchange from 'react-icons/lib/fa/exchange';
import FaHeartO from 'react-icons/lib/fa/heart-o';
// components imports
import ProductQtyInput from './ProductQtyInput';
import ProductInput from './ProductInput';
// styles import
import "../../styles/productPage/ProductActions.sass";

//data import
import data from "../../assets/data.json";
const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId,
	quantity: state.cartReducer.quantity,
	compare: state.iconReducer.compare,
	wishlist: state.iconReducer.wishlist
})
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addToCart: addToCart,
		addCompare: addCompare,
		addWish: addWish
	}, dispatch);
}

class ProductActions extends React.Component {
	constructor(props) {
		super(props);
		this.dispatchAddToCart = this.dispatchAddToCart.bind(this);
		this.dispatchAddCompare = this.dispatchAddCompare.bind(this);
		this.dispatchAddWish = this.dispatchAddWish.bind(this);
	}


	dispatchAddToCart() {
		const product = findId(this.props.productId, data);
		const price = product.tags.discount ? (product.price - (product.price * product.tags.discount/100)).toFixed(2) : product.price;
		
		for (let i = 1; i <= this.props.quantity; i++) {
			this.props.addToCart([this.props.productId, Number(price)]);
		}
	}

	dispatchAddCompare() {
		if (!this.props.compare.includes(this.props.productId) && this.props.compare.length < 5) {
			this.props.addCompare(this.props.productId);
		}
	}
	dispatchAddWish() {
		!this.props.wishlist.includes(this.props.productId) ? this.props.addWish(this.props.productId) : null;
	}

	render() {
		return(
			<div className={"product-main__details__actions"} >
				<div className={"product-main__details__inputs"} >
					<ProductQtyInput />
					<ProductInput valueType={"color"} valueTypePL={"kolor"}/>
					<ProductInput valueType={"style"} valueTypePL={"styl"}/>

				</div>
				<div className={"product-main__details__buttons"} >
					<button 
						className={"product-main__details__button add-to-cart flex-center"}
						onClick={this.dispatchAddToCart}
						>
						{this.props.lang === "en" ? "Add to cart" : "Dodaj do koszyka"}
					</button>
					<button 
						className={"product-main__details__button add-to-wishlist flex-center"}
						onClick={this.dispatchAddWish}
						>
						<div className={"icon flex-center"}>
							<FaHeartO />
						</div>
						{this.props.lang === "en" ? "Add to wishlist" : "Dodaj do ulubionych"}
					</button>
					<button 
						className={"product-main__details__button add-to-compare flex-center"}
						onClick={this.dispatchAddCompare}
						>
						<div className={"icon flex-center"}>
							<FaExchange />
						</div>
						{this.props.lang === "en" ? "Add to compare" : "Dodaj do porównania"}
					</button>
				</div>

			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActions)