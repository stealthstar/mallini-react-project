import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Breadcrumbs from "../reusableComponents/Breadcrumbs";
//Font Awesome imports

import ProductMain from "./ProductMain";
import ProductBundle from "./ProductBundle";
import ProductDescriptionBig from "./ProductDescriptionBig";
import RelatedProducts from "../reusableComponents/RelatedProducts";

//data import
import data from "../../assets/data.json";

import "../../styles/productPage/Product.sass";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class Product extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}

	getProduct() {
		// returns an object containing data relevant
		// to the product with macthing id
		let id = this.props.productId, res;
		for (let i = 0; i < data.products.length; i++) {
			if (data.products[i].id === id) {
				res = data.products[i]
			}
		}
		return res;
	}

	render() {
		const product = this.getProduct();

		return (
			<div className={"product"}>
				{ this.props.width > 1000 && <Breadcrumbs /> }
				<div className={"product__wrapper"}>
					<ProductMain 
						images={product.images || null} 
						category={product[this.props.lang].category}
						name={product[this.props.lang].name}
						desc={product[this.props.lang].desc}
						hotTag={product.tags.hot}
						discountTag={product.tags.discount}
						saleTag={product.tags.sale}
						newTag={product.tags.new}
						price={product.price}
						newPrice={product["new-price"]}
						quantity={product.quantity}
						/>
					<ProductBundle />
					<ProductDescriptionBig />
					<RelatedProducts />
				</div>
			</div>
		);
	}

}

export default connect(mapStateToProps)(Product)