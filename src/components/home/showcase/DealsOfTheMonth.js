//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealSlide from './DealSlide';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../../assets/data.json'

import '../../../styles/home/showcase/DealsOfTheMonth.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class DealsOfTheMonth extends React.Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	prev() {
		this.slider.slickPrev();
	}

	getDeals() {
		let products = data.products;
		let deals = [];
		for (let i = 0; i < products.length; i++){
			if (products[i]["month-deal"] === true) {
				deals.push(products[i]);
			}

		}
		return deals;
	}

	render() {
		const settings = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const dealsData = this.getDeals();
		return (
				<div className={"deals"}>
					<div className={"deals__header"}>
						<button className={"bestselling__button--left flex-center"} onClick={this.prev}>
							<AngleLeft />
						</button>
							<p>
								{
									this.props.lang === 'en' ? "Deals of the month" : "Promocje miesiąca"
								}
							</p>
						<button className={"bestselling__button--left flex-center"} onClick={this.prev}>
							<AngleRight />
						</button>
					</div>
					<div className={"deals__content"} >
						<Slider ref={c => (this.slider = c)} {...settings}>
								
							<DealSlide dealData={dealsData[0]}/>
							<DealSlide dealData={dealsData[1]}/>
							<DealSlide dealData={dealsData[2]}/>
						</Slider>
					</div>
				</div>
		);
	}
}


export default connect(mapStateToProps)(DealsOfTheMonth);