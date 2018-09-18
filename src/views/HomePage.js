import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import "../styles/home/HomePage.sass";

import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
import Slider from '../components/home/Slider';
import Cards from '../components/home/Cards';
import BestSelling from '../components/home/BestSelling';
import BestSellingProducts from '../components/home/BestSellingProducts';
import Showcase from '../components/home/showcase/Showcase';
import Footer from '../components/footer/Footer';
import MobileShopByCat from "../components/mobileMenu/MobileShopByCat";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class HomePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		window.scrollTo({
			"behavior": "smooth",
			"left": 0,
			"top": 0
		});

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
					
					//rest of the homepage is wrapped in condition
					//which prevents it from displaying when mobile menu is visible
				: 	<div>
						<Slider />
						{(this.props.width < 720) && <MobileShopByCat />}
						<Cards />
						<BestSelling />
						<Showcase />
						<BestSellingProducts />
						<Footer />
					</div>
			}
			
			</div>
		)
	}

}

export default withRouter(connect(mapStateToProps)(HomePage))