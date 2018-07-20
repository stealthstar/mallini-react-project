//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import Counter from './Counter';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';


import '../../../styles/home/showcase/DealSlide.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier

});

class DealSlide extends React.Component {
	constructor(props) {
		super(props);

	}
	barStyle() {
		const data = this.props.dealData;
		switch(true) {
			case (data.quantity < 10):
				return {
					width: data.quantity *2 + '%',
					backgroundColor: '#78ec8c'
				};
			case (data.quantity < 50):
				return {
					width: data.quantity *2 + '%',
					backgroundColor: '#4cd964'
				};
			default:
				return { width: '100%' };
		}
	}
	render() {
		const data = this.props.dealData;
		const y = data.ends[0], m = data.ends[1] - 1, d = data.ends[2], h = data.ends[3], min = data.ends[4];
		const expiry = Date.UTC(y,m,d,h,min,0)/1000;

		return (
			<div className={"slide"}>
				<div className={"slide__image--wrapper"}>
					<div className={"savings"}>
						<p>{
							this.props.lang === 'en' ? `Save` : `Taniej o`
						}</p>
						<p>{this.props.currencySymbol + (data.price * this.props.currencyMultiplier - data['new-price'] * this.props.currencyMultiplier).toFixed(2)}</p>
					</div>
				</div>
				<div className={"slide__price--wrapper"}>
					<div className={"slide__price--wrapper__row--top"}>
						<p>{this.props.currencySymbol + (data['new-price'] * this.props.currencyMultiplier).toFixed(2)}</p>
						<p>{this.props.currencySymbol + (data['price'] * this.props.currencyMultiplier).toFixed(2)}</p>
					</div>
					<p className={"slide__item-name"}>{data[this.props.lang].name}</p>
				</div>
				<div className={"slide__availability"}>
					<div className={"row--top"}>
						<p className={'green'}>
							{
								this.props.lang === 'en' ? `Available:  ` : `Dostępne:  `
							}
							<span>{data.quantity}</span>
						</p>
						<p className={'red'}>
							{
								this.props.lang === 'en' ? `Already Sold:  ` : `Sprzedane:  `
							} 
							<span>{data.sold}</span>
						</p>
					</div>
					<div className={"row--bottom flex-center"}>
						<div className={"bar"}>
							<div 
								className={"bar__filling"}
								style={this.barStyle()}
							></div>
						</div>
						
					</div>
				</div>
				<div className={"slide__rule"}></div>
				<Counter countFrom={expiry} countTo={Math.floor(Date.now()/1000)}/>
			</div>
			
		);
	}
}


export default connect(mapStateToProps)(DealSlide);