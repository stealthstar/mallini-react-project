import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';
import FaExchange from 'react-icons/lib/fa/exchange';
import "../../styles/home/CompareIcon.sass";

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class CompareIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={"icon"}>
				<FaExchange />
			</div>
		)
	}

}

export default connect(mapStateToProps)(CompareIcon)