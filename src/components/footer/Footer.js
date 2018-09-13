// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FooterIcons from './FooterIcons';
import FooterColumns from './FooterColumns';
import FooterBottom from './FooterBottom';

import FaExchange from 'react-icons/lib/fa/exchange';

import "../../styles/footer/Footer.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.landDropdown,
	view: state.viewReducer.viewName,

});



class Footer extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {

		return (
			<footer className={"footer-main"}>
				<FooterIcons />
				<FooterColumns />
				<FooterBottom />
			</footer>
		)
	}

}

export default connect(mapStateToProps)(Footer)