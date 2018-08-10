// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import data from '../../assets/data.json';
import { bindActionCreators } from 'redux';
import {removeCompare} from '../../actions/removeCompare'


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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		removeCompare: removeCompare
	}, dispatch);
}

class CompareItem extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.removeCompare(this.props.number)
	}

	render() {
		const product = data.products.filter(el => el.id === this.props.number)[0];
		console.log(product);	
		return (
			<div className={"compare__item"}>
				<header>
					<h3>{product[this.props.lang].name}</h3>
					<div className={"remove-compare"} onClick={this.clickHandler}>X</div>
				</header>
				<div className={"compare__item-picture"}>

				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CompareItem);