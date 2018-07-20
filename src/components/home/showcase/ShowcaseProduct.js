//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/lib/slider';
import DealsOfTheMonth from './DealsOfTheMonth';

import data from '../../../assets/data.json'

import '../../../styles/home/showcase/ShowcaseProduct.sass'


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

class ShowcaseProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"showcase-product__wrapper"}>{this.props.name}
				<div className={"showcase-product__inner"}></div>
			</div>
		);

	}
}


export default connect(mapStateToProps)(ShowcaseProduct);