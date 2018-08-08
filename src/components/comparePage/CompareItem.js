// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import data from '../../assets/data.json';
import "../../styles/comparePage/CompareItem.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	view: state.viewReducer.viewName,
	compare: state.iconReducer.compare
});
class CompareItem extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	render() {
		const product = data.products[Number(this.props.number)-1];
		return (
			<div className={"compare__item"}>
			{
				product[this.props.lang].name
			}

			</div>
		)
	}

}

export default connect(mapStateToProps)(CompareItem);