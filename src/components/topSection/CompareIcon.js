// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeView } from '../../actions/changeView';

import FaExchange from 'react-icons/lib/fa/exchange';

import "../../styles/topSection/CompareIcon.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	compare: state.iconReducer.compare,
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName,

});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeView: changeView
	}, dispatch);
}

class CompareIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.changeView('compare');
	}

	render() {
		const styleNone =	{ backgroundColor: "#f5f5f5", color: "#0f0f0f"};
		const styled = 		{ backgroundColor: "red", color: "white"};
		return (
			<div className={"icon icon-compare"}
				onClick={this.clickHandler} 
				title={
					this.props.lang ==="en" ? 
						"max 5 Items"
					:
						"maksymalnie 5"
					}>
				<FaExchange />
				<div 
					className={"icon__number icon-compare__number flex-center"}
					style={
						this.props.compare.length > 0 ? styled : styleNone
					}
					>
					{this.props.compare.length}
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CompareIcon)