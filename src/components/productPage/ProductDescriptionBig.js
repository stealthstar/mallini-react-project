import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductDescriptionBig.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})
class ProductDescriptionBig extends React.Component {
	render() {
		return (
			<div>
				ProductDescriptionBig	
			</div>
		)
	}
}


export default connect(mapStateToProps)(ProductDescriptionBig)