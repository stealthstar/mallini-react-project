import { hot } from "react-hot-loader";
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import HomePage from './views/HomePage';

import "./styles/theme.sass";

const mapStateToProps = state => ({
	viewName: state.viewReducer.viewName
})
function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch);
}

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
		switch(this.props.viewName) {
			case 'home':
				return (
					<div className={"wrapper"}>
						<HomePage />
					</div>
				)
			case 'product':
				return (
					<div className={"wrapper"}>
						<Product />
					</div>
				)
			default:
				return null;
		}
	}

}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
