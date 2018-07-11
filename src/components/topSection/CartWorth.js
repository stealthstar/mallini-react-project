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
	currencySymbol: state.dropdownReducer.currencySymbol
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
				{
				this.props.cartWorth % 1 === 0 ?
					this.props.currencySymbol+this.props.cartWorth.toFixed(2)
				:
					this.props.cartWorth
				}
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartWorth)