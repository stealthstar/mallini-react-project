import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
import Product from '../components/productPage/Product';
import Footer from '../components/footer/Footer';
import MobileShopByCat from "../components/mobileMenu/MobileShopByCat";
import WishlistItem from "../components/wishlistPage/WishlistItem";
//Font Awesome imports

import "../styles/productPage/ProductPage.sass";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu,
	lang: state.dropdownReducer.langDropdown,
	wishlist: state.iconReducer.wishlist,
	productId: state.viewReducer.activeProductId
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class ProductPage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className={
				// add correct class depending on the window width
				(this.props.width > 1200) ?
					"wrapper"
					: (this.props.width > 1000) ?
						"wrapper wrapper--medium"
						:
						"wrapper wrapper--mobile"
			}>
				{(this.props.width > 1000) && <TopBar />}
				<TopContainer />
				{(this.props.width > 1000) && <MainMenu />}
				{
					((this.props.mobileMenu) && (this.props.width <= 1000)) ?
						<MobileMenu />

						//rest of the page is wrapped in condition
						//which prevents it from displaying when mobile menu is visible
						: <div className={"wrapper"}>
							<Product />
							<Footer />
						</div>
				}

			</div>
		)
	}

}

export default connect(mapStateToProps)(ProductPage)