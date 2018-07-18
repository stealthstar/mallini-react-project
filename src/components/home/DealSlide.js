//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import Counter from './Counter';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';


import '../../styles/home/DealSlide.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class DealSlide extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const data = this.props.dealData;
		const y = data.ends[0], m = data.ends[1] - 1, d = data.ends[2], h = data.ends[3], min = data.ends[4];
		const expiry = Date.UTC(y,m,d,h,min,0);
		return (
			<div className={"slide"}>
				<div className={"slide__image--wrapper"}>
				</div>
				<div className={"slide__price--wrapper"}></div>
				<div className={"slide__availability"}></div>
				<div className={"slide__rule"}></div>
				<Counter countFrom={expiry/1000} countTo={Math.floor(Date.now()/1000)}/>
			</div>
			
		);
	}
}


export default connect(mapStateToProps)(DealSlide);