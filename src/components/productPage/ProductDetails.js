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

	getProductRating(reviews) {
		if(reviews.length > 0) {
			let subSum = reviews.reduce((previousValue, currentValue, index, array) => {
				return previousValue + array[index].rating;
			}, 0);
			return subSum / reviews.length;
		}
			return 0;
	}

	render() {
		const product = this.getProduct();
		// star-rating logic
		product.rating = this.getProductRating(product.reviews);
		const 	stars_img = require('../../assets/img/icons/stars-empty.png'),
				stars_img_filled = require('../../assets/img/icons/stars-filled.png'),
				starFillSize = product.rating / 5 * 100;
		product.newPrice = product.price - (product.price * product.tags.discount / 100);

		return (
			<div className={"product-main__details"}>
				<div className={"product-main__details--top"}>
					<p>{product[this.props.lang].category}</p>
					<div className={"product-main__tag-wrapper"}>
					{/* - - - check for tags and add them when needed - - - */}
						{ product.tags.sale && <div className={"product-main__tag--sale product-main__tag"}>sale</div>}
						{ product.tags.discount > 0 && <div className={"product-main__tag--discount product-main__tag"}>{`-${Math.round(product.tags.discount)}%`}</div> }
						{ product.tags.new && <div className={"product-main__tag--new product-main__tag"}>new</div>}
						{ product.tags.hot && <div className={"product-main__tag--hot product-main__tag"}>hot!</div> }
					{/* - - */}
					</div>
				</div>
				<div className={"product-main__details--bottom"}>
					<div className={"product-main__details__name"}>
						{product[this.props.lang].name}
					</div>
					<div className={"product-main__details__essentials"}>
						<div className={"product-main__details__price"}>
							{/* if there's discount, display both prices */}
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
						<div className={"product-main__details__availability"} >
							Availability:&nbsp;
							<span style={{ color: product.quantity > 0 ? "#4cd964" :"#ff3b30"}}>
							{
								product.quantity > 0 ? 
									this.props.lang ==="en" ? 
									"In Stock" : "Dostępny"
									: 
										this.props.lang === "en" ? 
										"Out of Stock" : "Brak w magazynie"
							}
							</span>
							
						</div>
					</div>
					<div className={"rating"}>
						<div className={"rating-bg"} style={{backgroundImage: `url(${stars_img})`}}>
							<div className={"rating-fill"} style={{ 
								backgroundImage: `url(${stars_img_filled})`, 
								width:starFillSize+"%" 
								}}>
							</div>
						</div>
						<p>
						{product.reviews.length > 0 ?
								this.props.lang === "en" ? `(Based on ${product.reviews.length} reviews)`
									: `(${product.reviews.length} ocen)`
							:
								this.props.lang === "en" ? "(No reviews yet)" : "(Brak ocen)"
						 }
						 </p>
					</div>
					<div className={"product-main__details__descritpion"}>
						{product[this.props.lang].desc ? product[this.props.lang].desc :
							this.props.lang ==="en" ? "Sorry! No more information available" : "Przepraszamy! Brak informacji"}
					</div>
				</div>

			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductDetails)