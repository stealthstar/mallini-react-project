import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/home/WishlistIcon.sass";

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class WishlistIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>WishlistIcon</div>
		)
	}

}

export default connect(mapStateToProps)(WishlistIcon)