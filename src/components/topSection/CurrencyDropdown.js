// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/topSection/Dropdowns.sass";
// - - - end imports - - -

const mapStateToProps = state => ({
	currency: state.dropdownReducer.currency
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeCurrency: changeCurrency
	}, dispatch);
}

 class CurrencyDropdown extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			select: 'usd'
		}
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e) {
		let val = e.target.value;
		let symbols = ['\u0024', '\u00A3', '\u20AC', 'PLN '];
		let symbol = () => {
			switch(val) {
				case 'usd':
					return symbols[0];
				case 'gbp':
					return symbols[1];
				case 'eur':
					return symbols[2];
				case 'pln':
					return symbols[3];
				default: 
					return '&dollar;';
			}
		}
		this.setState({
			select: val
		});
		console.log(val)
		let result = [val, symbol(val)]

		this.props.changeCurrency(result);
	}

	render() {
		return (
			<form>
				<select name={"language"} className={"dropdown currency-dropdown"} onChange={(e) => this.changeHandler(e)}>
					<option value={'usd'} default >USD</option>
					<option value={'gbp'}>GBP</option>
					<option value={'eur'}>EUR</option>
					<option value={'pln'}>PLN</option>
				</select>
			</form>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)