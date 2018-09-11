import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductDetails.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})

class ProductDetails extends React.Component {
	render() {
		return (
			<div className={"product-main__details"}>
				Product details
			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductDetails)