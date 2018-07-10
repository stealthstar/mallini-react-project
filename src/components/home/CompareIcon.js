import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCompare } from '../../actions/addCompare';
import { resetCompare } from '../../actions/resetCompare';
import FaExchange from 'react-icons/lib/fa/exchange';
import "../../styles/home/CompareIcon.sass";

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	compare: state.iconReducer.compare,
	lang: state.dropdownReducer.landDropdown
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addCompare: addCompare,
		resetCompare: resetCompare
	}, dispatch);
}

class CompareIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		if (this.props.compare < 5)	{this.props.addCompare(1);}
		else {this.props.resetCompare(1)}
	}

	render() {
		const styleNone =	{ backgroundColor: "#f5f5f5", color: "#0f0f0f"};
		const styled = 		{ backgroundColor: "red", color: "white"};
		return (
			<div className={"icon icon-compare"} onClick={() => this.clickHandler()} 
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
						this.props.compare > 0 ? styled : styleNone
					}
					>
					{this.props.compare}
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CompareIcon)