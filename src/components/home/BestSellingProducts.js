//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import BestSellingItem from './BestSellingItem';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../assets/data.json'

import '../../styles/home/bestsellingProducts.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	width: state.windowSizeReducer.windowWidth
});

class BestsellingProducts extends React.Component {
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

	getProducts() {
		let products = data.products;
		products.sort((a, b) => a.sold < b.sold);
		return products;
	}

	render() {
		const settings = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 760,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2,
						dots: false
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false
					}
				}
			]
		};
		let products = this.getProducts();
		return (
			<section className={"bestselling-products"} >
				<div className={"bestselling-products__row bestselling-products__row--top"}>
					{this.props.lang === 'en'
						? <div>
							<p><b>Best Sellers</b> Products</p>
						</div>

						: <div>
							<p><b>Bestsellery</b></p>
						</div>
					}

					<div className={"bestselling-products__buttons"}>
						<AngleLeft onClick={this.prev}/>
						<AngleRight onClick={this.next}/>
					</div>

				</div>
				<div className={"bestselling-products__row bestselling-products__row--bottom"}>
					<Slider ref={c => (this.slider = c)} {...settings}>
						{
							products.map((el) => {
								// const path = require("../../assets/img/bestselling-products-" + [el.id] + ".png");
								return (
									<BestSellingItem 
										price={el.price}
										newPrice={el["new-price"]}
										id={el.id}
										name={el[this.props.lang].name}
										key={el.id}
									
									/>

								);
							})
						}
					</Slider>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(BestsellingProducts);