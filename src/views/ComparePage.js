import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../styles/comparePage/ComparePage.sass";

import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
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
class ComparePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

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
					
					//rest of the homepage is wrapped in condition
					//which prevents it from displaying when mobile menu is visible
				: 	<div>
						Compare
						<Footer />
					</div>
			}
			
			</div>
		)
	}

}

export default connect(mapStateToProps)(ComparePage)