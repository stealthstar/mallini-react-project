// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Link, NavLink } from 'react-router-dom'
import FaExchange from 'react-icons/lib/fa/exchange';

import "../../styles/topSection/CompareIcon.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	compare: state.iconReducer.compare,
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName,

});



class CompareIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	
	render() {
		const styleNone =	{ backgroundColor: "#f5f5f5", color: "#0f0f0f"};
		const styled = 		{ backgroundColor: "red", color: "white"};
		return (
			<NavLink 

				style={{
					textDecoration: 'none',
					color: 'black'
				}}
				to={"/compare"} 
				>
					<div 
						className={"icon icon-compare"}
						title={
							this.props.lang ==="en" ? 
								"max 5 items"
							:
								"maksymalnie 5"
							}
						>
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
			</NavLink>
		)
	}

}

export default connect(mapStateToProps)(CompareIcon)