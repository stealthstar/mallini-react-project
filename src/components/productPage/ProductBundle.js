import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductBundle.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})
class ProductBundle extends React.Component {
  render() {
	return (
	  <div>
		ProductBundle
	  </div>
	)
  }
}


export default connect(mapStateToProps)(ProductBundle)