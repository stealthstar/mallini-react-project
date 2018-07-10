import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/home/WishlistIcon.sass";
import FaHeartO from 'react-icons/lib/fa/heart-o';
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
			<div className={"icon icon-wishlist"}>
				<FaHeartO />
				<div className={"icon__number icon-wishlist__number"}>
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps)(WishlistIcon)