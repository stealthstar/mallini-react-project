//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';

import data from '../../../assets/data.json'

import '../../../styles/home/showcase/ShowcaseProduct.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier
});

class ShowcaseProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"showcase-product__wrapper"}>
				<div className={"showcase-product__inner"}>
					<div className={"showcase-product__photo"}></div>
						{ this.props.newPrice ? 
						<div className={"showcase-product__prices"}> 
							<p className={"showcase-product__price"} >
								{this.props.currencySymbol + this.props.newPrice.toFixed(2)}
							</p>
							<p className={"showcase-product__old-price"} >
								{this.props.currencySymbol + this.props.price.toFixed(2)}
							</p>
						</div>
						: <p className={"showcase-product__price"} >
							{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
							</p>
						}
					<p className={"showcase-product__name"} >{this.props.name}</p>
				</div>
			</div>
		);

	}
}


export default connect(mapStateToProps)(ShowcaseProduct);