//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components imports
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';
import ShowcaseSlide from './ShowcaseSlide';
// font awesome imports
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';
// data/json import
import data from '../../../assets/data.json'
// styles imports
import '../../../styles/home/Slider.sass'
import '../../../styles/home/showcase/Showcase.sass'
// - - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	width: state.windowSizeReducer.windowWidth,
});

class Showcase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0
		};
		// slider methods bindings
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.goTo = this.goTo.bind(this);
		this.afterChange = this.afterChange.bind(this);
		
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

	// - - -
	render() {
		return (
			<section className={"showcase"} >
				<div className={"showcase__column showcase__column--left"}>
					<DealsOfTheMonth />
				</div>
				<div className={"showcase__column showcase__column--right"}>
					<div className={"showcase__menu"}>
						<div className={"buttons"}>
							<button id={"btn-0"} className={"btn slider-button active"} onClick={(e) => this.goTo(e, 0)}>
									{this.props.lang === 'en' ? "New\u00a0Arrivals" : "Nowości"}
							</button>
							<button id={"btn-1"} className={"btn slider-button"} onClick={(e) => this.goTo(e, 1)}>
								{this.props.lang === 'en' ? `On\u00a0Sale` : "Przeceny"}
							</button>
							<button id={"btn-2"} className={"btn slider-button"} onClick={(e) => this.goTo(e, 2)}>
								{this.props.lang === 'en' ? "Best\u00a0Rated" : "Najlepiej\u00a0oceniane"}
							</button>
							<button id={"btn-3"} className={"btn slider-button"} onClick={(e) => this.goTo(e, 3)}>
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
					
							<ShowcaseSlide slideName={"new"} />
							<ShowcaseSlide slideName={"sale"} />
							<ShowcaseSlide slideName={"topRated"} />
							<ShowcaseSlide slideName={"popular"} />

						
					</Slider>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Showcase);