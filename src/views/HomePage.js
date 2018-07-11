import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../styles/home/HomePage.sass";

import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import Slider from '../components/home/Slider';
import Cards from '../components/home/Cards';

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
			{
					((this.props.mobileMenu) && (this.props.width <= 1000))? 
					<MobileMenu />
					//rest of the homepage is wrapped in condition
					//which prevents it from displaying when mobile menu is visible
				: 	<div>
						<Slider />
						<Cards />
					</div>
			}
			
			</div>
		)
	}

}

export default connect(mapStateToProps)(HomePage)