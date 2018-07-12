//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel } from 'react-responsive-carousel';

import data from '../../assets/data.json'

import '../../styles/home/Slider.sass'

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class Slider extends React.Component {
	constructor(props) {
		super(props);
		
	}

	getImages() {
		let arr = [];
		for (let i in data.images.carousel) {
			arr.push('')
		}
	}

	render() {
		const img1 = require("../../assets/img/" + data.images.carousel[0])
		const img2 = require("../../assets/img/" + data.images.carousel[1])
		const img3 = require("../../assets/img/" + data.images.carousel[2])
		return (
			<Carousel
				infiniteLoop={true}
				verticalSwipe={'natural'}
				dynamicHeight
				showThumbs={false}
				autoplay={true}
				interval={4000}
				emulateTouch
				showStatus={false}
				showArrows={false}
			>
				<div>
					<img src={img1} />
					<p className="legend legend-1 ">High-quality working station</p>
					<div className={"slider-details"}>
						<p className={"slider-details__category"}>Laptops</p>
						<p className={"slider-details__title"}>MacBook </p>
						<p className={"slider-details__subtitle"}>Laptop by Apple Inc.</p>
						<button className={"slider-details__cta"}>Discover now</button>
					</div>
				</div>
				<div>
					<img src={img2} />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src={img3} />
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>
		);
	}
}


export default connect(mapStateToProps)(Slider);