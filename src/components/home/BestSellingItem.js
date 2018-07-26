//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import '../../styles/home/BestsellingItem.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier
});

class BestSellingItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleHover = this.handleHover.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.state = {
			hover: false
		}
	}

	handleHover() {

		this.setState({
			hover: true
		});
	}
	handleMouseOut() {
		this.setState({
			hover: false
		});
	}


	render() {

		return (
			// const path = require("../../assets/img/bestselling-products-" + [el.id] + ".png");
			
			<div className={"bestselling-products__item-wrapper"} onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}>
				<div key={this.props.id} className={"bestselling-products__item"}>
					{/* <img src={path} /> */}
					<div className={"bestselling-products__image"}></div>
					{this.state.hover ? <p className={"bestselling-products__price"}>{this.props.lang === 'en'?'ADD TO CART': 'Dodaj do koszyka'}</p> :
						this.props.newPrice ?
							<p className={"bestselling-products__price"}>
								{this.props.currencySymbol + (this.props.newPrice * this.props.currencyMultiplier).toFixed(2)}&nbsp;&nbsp;
								<span>
									{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}
								</span>
							</p>
							: <p className={"bestselling-products__price"}>{this.props.currencySymbol + (this.props.price * this.props.currencyMultiplier).toFixed(2)}</p>
					}
					<p className={"bestselling-products__name"}>{this.props.name}</p>
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps)(BestSellingItem);