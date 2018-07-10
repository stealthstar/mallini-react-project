import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../styles/home/HomePage.sass";

import TopBar from '../components/home/TopBar';
import TopContainer from '../components/home/TopContainer';

// const mapStateToProps = state => ({
	
// })
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }

export default class HomePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {
		return (
			<div className={"wrapper"}>
			<TopBar />
			<TopContainer />
			</div>
		)
	}

}