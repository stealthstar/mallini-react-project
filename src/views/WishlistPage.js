import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
import Footer from '../components/footer/Footer';
import MobileShopByCat from "../components/mobileMenu/MobileShopByCat";
import WishlistItem from "../components/wishlistPage/WishlistItem";
//Font Awesome imports
import FaHeartO from 'react-icons/lib/fa/heart-o';
import "../styles/wishlistPage/WishlistPage.sass";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu,
	lang: state.dropdownReducer.langDropdown,
	wishlist: state.iconReducer.wishlist
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class WishlistPage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={
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
					((this.props.mobileMenu) && (this.props.width <= 1000))? 
					<MobileMenu />
					
					//rest of the page is wrapped in condition
					//which prevents it from displaying when mobile menu is visible
				: 	<div className={"wrapper"}>
						<section className={"wishlist"} >
							<h2>{
								this.props.lang === 'en' ? "Wishlist" : "Ulubione"
							}</h2>
							<p>
							</p>
							<div className={"wishlist__items"}>
								{	this.props.wishlist.length > 0 ? 
										this.props.wishlist.map(el => <WishlistItem number={el} />)								
								:
									this.props.lang === 'en' ? 
											<div className={"no-wishlist"}>
												<span>"This is a page which will display the products once you add them to your wishlist."</span>
												<FaHeartO />
											</div> 
											: <div className={"no-wishlist"}>
												<span>"Na tej stronie wyświetlone zostaną przedmioty, które dodasz do ulubionych."</span>
												<FaHeartO />
											</div>
							}
							</div>
						</section>
						<Footer />
					</div>
			}
			
			</div>
		)
	}

}

export default connect(mapStateToProps)(WishlistPage)