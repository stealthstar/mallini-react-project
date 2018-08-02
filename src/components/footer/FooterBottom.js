// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import FooterLogoColumn from './FooterLogoColumn';
import FooterLinksColumn from './FooterLinksColumn';
import data from '../../assets/data.json';

import "../../styles/footer/FooterBottom.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName

});
class FooterBottom extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.generatePath = this.generatePath.bind(this);
	}
	generatePath(name){
		return `../../assets/img/logo-${name}.jpg`;
	}

	render() {
		const paypal = require(`../../assets/img/logo-paypal.jpg`);
		const mastercard = require(`../../assets/img/logo-mastercard.jpg`);
		const skrill = require(`../../assets/img/logo-skrill.jpg`);
		const wu = require(`../../assets/img/logo-wu.jpg`);
		const visa = require(`../../assets/img/logo-visa.jpg`);
		return (
			<div className={"footer-bottom"} >
				<div className={"footer-bottom__left"}>
					<img src={visa} />
					<img src={mastercard} />
					<img src={paypal} />
					<img src={skrill} />
					<img src={wu} />
				</div>
				<p>{"\u00A9"}&nbsp;2018 Designed&nbsp;by&nbsp;Igor&nbsp;Ten.<br/>Coded&nbsp;by&nbsp;Rafał&nbsp;Skwara</p>
				<div className={"footer-bottom__right"}></div>
			</div>
		)
	}

}

export default connect(mapStateToProps)(FooterBottom);