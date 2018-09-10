// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from '../../assets/data.json';
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
			select: this.props.currency
		}
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e) {
		let val = e.target.value;
		let symbols = ['\u0024', '\u00A3', '\u20AC', 'PLN '];
		let symbol = val => data.currency[val].symbol;
		let multiplier = val => data.currency[val].multiplier;
		this.setState({
			select: val
		});
		let result = [val, symbol(val), multiplier(val)]

		this.props.changeCurrency(result);

	}

	render() {
		return (
			<form>
				<select name={"language"} 
					className={"dropdown currency-dropdown"} 
					onChange={(e) => this.changeHandler(e)}
					value={this.props.currency}
					>
					<option value={'usd'} >USD</option>
					<option value={'gbp'} >GBP</option>
					<option value={'eur'} >EUR</option>
					<option value={'pln'} >PLN</option>
				</select>
			</form>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)