import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../styles/home/HomePage.sass";

import TopBar from '../components/home/TopBar';
import TopContainer from '../components/home/TopContainer';

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight
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
			</div>
		)
	}

}

export default connect(mapStateToProps)(HomePage)