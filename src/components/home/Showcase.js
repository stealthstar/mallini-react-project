//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth'
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../assets/data.json'

import '../../styles/home/Showcase.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class Showcase extends React.Component {
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
	render() {
		const settings = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<section className={"showcase"} >
				<div className={"showcase__column showcase__column--left"}>
					<DealsOfTheMonth />
				</div>
				<div className={"showcase__column showcase__column--right"}>
					<Slider ref={c => (this.slider = c)} {...settings}>
						
							<div className={"slide"}>
								1
							</div>
							<div className={"slide"}>
								2
							</div>
							<div className={"slide"}>
								3
							</div>
						
					</Slider>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Showcase);