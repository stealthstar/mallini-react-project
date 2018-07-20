//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
import ShowcaseProduct from './ShowcaseProduct';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../../assets/data.json'

import '../../../styles/home/Slider.sass'
import '../../../styles/home/showcase/Showcase.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class Showcase extends React.Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.goTo = this.goTo.bind(this);
		this.afterChange = this.afterChange.bind(this);

		this.state = {
			activeSlide: 0
		};
	}
	// - - slider methods - -
	next() {
		this.slider.slickNext();
	}
	prev() {
		this.slider.slickPrev();
	}

	afterChange(next) {
		this.setState({ activeSlide: next });
		let btns = document.querySelectorAll('.slider-button');
		btns.forEach(el => {
			el.classList.remove('active');
			let number = Number(el.id.substr(4,1));
			if (number === next) {
				el.classList.add('active');
			}
		})
	}

	goTo(e, num) {
		let event = e;
		let btns = document.querySelectorAll('.slider-button');
		this.slider.slickGoTo(num);
	}
	// - - end of Slider methods - - 
	newProducts() {
		let products = data.products, res=[];
		for (let i = products.length-1; i > (products.length-7); i--) {
			res.push(products[i]);
		}
		return res;
	}

	render() {
		let products = this.newProducts();
		console.log(products)
		return (
			<section className={"showcase"} >
				<div className={"showcase__column showcase__column--left"}>
					<DealsOfTheMonth />
				</div>
				<div className={"showcase__column showcase__column--right"}>
					<div className={"showcase__menu"}>
						<div className={"buttons"}>
							<button id={"btn-0"} className={"slider-button active"} onClick={(e) => this.goTo(e, 0)}>
									{this.props.lang === 'en' ? "New\u00a0Arrivals" : "Nowości"}
							</button>
							<button id={"btn-1"} className={"slider-button"} onClick={(e) => this.goTo(e, 1)}>
								{this.props.lang === 'en' ? `On\u00a0Sale` : "Przeceny"}
							</button>
							<button id={"btn-2"} className={"slider-button"} onClick={(e) => this.goTo(e, 2)}>
								{this.props.lang === 'en' ? "Best\u00a0Rated" : "Najlepiej\u00a0oceniane"}
							</button>
							<button id={"btn-3"} className={"slider-button"} onClick={(e) => this.goTo(e, 3)}>
								{this.props.lang === 'en' ? "Popular\u00a0products" : "Popularne\u00a0produkty"}
							</button>
						</div>
						<div className={"spacer"}></div>
						<div className={"arrow-buttons"} >
							<AngleLeft onClick={this.prev}/>
							<AngleRight onClick={this.next}/>
						</div>
					</div>		
					<Slider ref={c => (this.slider = c)} 
						infiniteLoop={true}
						verticalSwipe={'natural'}
						dynamicHeight
						showThumbs={false}
						autoplay={false}
						arrows={false}
						emulateTouch
						showStatus={false}
						showArrows={false}
						afterChange={(next) => this.afterChange(next)}>
					
							<div className={"showcase__slide"}>
							<div className={"showcase__slide__inner-wrapper"}>
								{products.map(el => (
									
								<ShowcaseProduct key={el.id} name={el[this.props.lang].name} price={el.price} newPrice={el["new-price"]} />
								))}
								</div>
							</div>
							<div className={"showcase__slide"}>
								On Sale
							</div>
							<div className={"showcase__slide"}>
								Best Rated
							</div>
							<div className={"showcase__slide"}>
								Popular products
							</div>
						
					</Slider>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Showcase);