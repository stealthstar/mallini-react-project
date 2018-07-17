//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import data from '../../assets/data.json'

import '../../styles/home/Showcase.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class DealSlide extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div className={"slide"}>
				
			</div>
			
		);
	}
}


export default connect(mapStateToProps)(DealSlide);