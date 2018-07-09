import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../actions/changeCurrency';

import "../styles/Dropdowns.sass";

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown
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
		this.setState({
			select: val
		});
		console.log(val)
		this.props.changeCurrency(val);
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