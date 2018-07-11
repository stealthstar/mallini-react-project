// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';

import "../../styles/topSection/CartIcon.sass";
// - - - end imports - - - 

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
			<div className={"icon icon-cart"}>
				<FaShoppingBag />
				<div className={"icon__number icon-cart__number flex-center"}>
					0
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartIcon)