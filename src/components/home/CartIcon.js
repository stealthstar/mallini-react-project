import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/home/CartIcon.sass";
import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';
const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class CartIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={"icon"}>
				<FaShoppingBag />
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartIcon)