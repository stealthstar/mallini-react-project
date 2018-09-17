import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//component imports
import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
import Footer from '../components/footer/Footer';
import MobileShopByCat from "../components/mobileMenu/MobileShopByCat";
import CartItem from "../components/cartPage/CartItem";
import CartSummary from "../components/cartPage/CartSummary";
//Font Awesome imports
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import "../styles/cartPage/CartPage.sass";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu,
	lang: state.dropdownReducer.langDropdown,
	cartItems: state.cartReducer.items,
	cartSize: state.cartReducer.itemsAmount
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class CartPage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={
				(this.props.width > 1200) ?
				"wrapper"
					: (this.props.width > 720) ?
						"wrapper wrapper--medium"
						:
						"wrapper wrapper--mobile"
				}>
			{(this.props.width > 720) && <TopBar />}
			<TopContainer />
			{(this.props.width > 720) && <MainMenu />}
			{
					((this.props.mobileMenu) && (this.props.width <= 720))? 
					<MobileMenu />
					
					// the rest of the page is wrapped in condition
					// which prevents it from displaying when mobile menu is visible
				: 	<div className={"wrapper"}>
						<section className={"cart"} >
							<h2>{
								this.props.lang === 'en' ? "Your Cart" : "Twój koszyk"
							}</h2>
							<p>
							</p>
							
									{this.props.cartSize > 0 ?
									<div className={"inner-wrapper"}> 
										<div className={"cart__items"}>
											<div style={{"width":"100%"}}>
												<div className={"cart__items__top-row"}>
													<p>{this.props.lang === "en" ? "Qty:" : "Ilość:"}</p>
													<p>{this.props.lang === "en" ? "Price:" : "Cena:"}</p>
													<p>{this.props.lang === "en" ? "Total:" : "Wartość:"}</p>
												</div>
												{
													Object.keys(this.props.cartItems).map((key) => {
													if (this.props.cartItems[key] > 0) {
														return <CartItem number={Number(key)} key={key} amount={this.props.cartItems[key]}/>
													}
												}	
											)}
											</div>	
										</div>
										<CartSummary />							
									</div>
								:
									this.props.lang === 'en' ? 
											<div className={"no-cart"}>
												<span>Your cart is empty.</span>
												<FaShoppingCart />
											</div> 
											: <div className={"no-cart"}>
												<span>Twój koszyk jest pusty.</span>
												<FaShoppingCart />
											</div>
								
							}
							
						</section>
						<Footer />
					</div>
			}
			
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartPage)