//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../assets/data.json'

import '../../styles/home/BestSelling.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class BestSelling extends React.Component {
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
			slidesToShow: 5,
			slidesToScroll: 1
		};
		return(
		 <section className={"bestselling"} >
				<div className={"bestselling__column bestselling__column--left"}>
					{this.props.lang === 'en' 
					?  	<div>
							<p className={"bold"}>2017's </p>
							<p>Best Selling Products</p>
						</div>
					
					: 	<div>
							<p >Najpopularniejsze produkty </p>
							<p className={"bold"}>2017 roku</p>
						</div>
					}
					
					<div className={"bestselling__buttons"}>
						<button className={"bestselling__button--left flex-center"} onClick={this.prev}>
							<AngleLeft />
						</button>
						<button className={"bestselling__button--right flex-center"} onClick={this.next}>
							<AngleRight />
						</button>	
					</div>
					<a className={"bestselling__link"}>{
							this.props.lang === 'en' ? "Full catalog >" : "Pełny katalog >"
						}</a>
			 	</div>
				<div className={"bestselling__column bestselling__column--right"}>
				<Slider ref={c => (this.slider = c)} {...settings}>
				{
					data.bestselling.map((el) => {
						const path = require("../../assets/img/bestselling-" + [el.id] + ".png");
						return (
							<div key={el.id} className={"bestselling__item"}>
								<img src={path}/>
								<p>{el.category[this.props.lang]}</p>
							</div>
						);
					})
				}
			</Slider>
			</div>
		</section>	
		);
	}
}


export default connect(mapStateToProps)(BestSelling);