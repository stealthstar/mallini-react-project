// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions import
import { changeCurrency } from '../../actions/changeCurrency';
//Font Awesome import
import FaHeartO from 'react-icons/lib/fa/heart-o';
//styles import
import "../../styles/topSection/WishlistIcon.sass";
//- - - end imports - - -

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