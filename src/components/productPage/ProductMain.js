import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';

import "../../styles/productPage/ProductMain.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})

class ProductMain extends React.Component {
  render() {
	return (
	  <div className={"product-main__wrapper"}>
			<ProductGallery images={this.props.images.map(el => require(`../../assets/img/products/${el}`))}/>
		<div className={"spacer"} ></div>
		<ProductDetails />
	  </div>
	)
  }
}
export default connect(mapStateToProps)(ProductMain)