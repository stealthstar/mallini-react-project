// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/topSection/CartWorth.sass";
// - - - end imports - - - 

const mapStateToProps = state => ({
	cartWorth: state.cartReducer.cartWorth,
	currency: state.dropdownReducer.currency,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class CartWorth extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={'cart-worth'}>
				{this.props.currencySymbol + (this.props.currencyMultiplier*this.props.cartWorth).toFixed(2)}
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartWorth)