// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeView } from '../../actions/changeView';
import FooterIcons from './FooterIcons';

import FaExchange from 'react-icons/lib/fa/exchange';

import "../../styles/footer/Footer.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.landDropdown,
	view: state.viewReducer.viewName,

});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeView: changeView
	}, dispatch);
}

class Footer extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.changeView('compare');
	}

	render() {
		return (
			<footer className={"footer-main"}>
				<FooterIcons />
			</footer>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)