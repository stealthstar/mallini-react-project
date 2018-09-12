import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductDetails.sass";
//data import
import data from "../../assets/data.json";
const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier
})

class ProductDetails extends React.Component {
	constructor(props){
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
		product.newPrice = product.price - (product.price * product.tags.discount / 100);
		return (
			<div className={"product-main__details"}>
				<div className={"product-main__details--top"}>
					<p>{product[this.props.lang].category}</p>
					<div className={"product-main__tag-wrapper"}>
						{product.tags.sale && <div className={"product-main__tag--sale product-main__tag"}>sale</div>}
						{ product.tags.discount > 0 && <div className={"product-main__tag--discount product-main__tag"}>{`-${product.tags.discount}%`}</div> }
						{ product.tags.new && <div className={"product-main__tag--new product-main__tag"}>new</div>}
						{ product.tags.hot && <div className={"product-main__tag--hot product-main__tag"}>hot!</div> }
						
					</div>
				</div>
				<div className={"product-main__details--bottom"}>
					<div className={"product-main__details__name"}>
						{product[this.props.lang].name}
					</div>
					<div className={"product-main__details__essentials"}>
						<div className={"product-main__details__price"}>
							{product.tags.discount ? 
								<React.Fragment>
									<p>{ 
										this.props.currencySymbol + 
										(product.newPrice * this.props.currencyMultiplier).toFixed(2)
										}
									</p>
									<p className={"old-price"}>
										{
											this.props.currencySymbol +
											(product.price * this.props.currencyMultiplier).toFixed(2)
										}
									</p>
								</React.Fragment>
								:
									<p>
										{
											this.props.currencySymbol +
											(product.price * this.props.currencyMultiplier).toFixed(2)
										}
									</p>
							}
						</div>
					</div>
				</div>

			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductDetails)