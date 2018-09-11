import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductGallery.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})

class ProductGallery extends React.Component {
	render() {
		return (
			<div className={"product-main__gallery"}>
				gallery
			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductGallery)