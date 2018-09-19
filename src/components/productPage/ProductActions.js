import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ProductQtyInput from './ProductQtyInput';
import ProductInput from './ProductInput';
import "../../styles/productPage/ProductActions.sass";

//data import
import data from "../../assets/data.json";
const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId,
	quantity: state.cartReducer.quantity
})

class ProductActions extends React.Component {
	constructor(props) {
		super(props);
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
					<button className={"product-main__details__button add-to-cart"}>
						{this.props.lang === "en" ? "Add to cart" : "Dodaj do koszyka"}
					</button>
				</div>

			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductActions)