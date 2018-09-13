import { hot } from "react-hot-loader";
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
import  {windowResize} from './actions/windowResize';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect } from 'react-router-dom'

import HomePage from './views/HomePage';
import ComparePage from './views/ComparePage';
import CartPage from './views/CartPage';
import ProductPage from './views/ProductPage';
import WishlistPage from './views/WishlistPage';

import "./styles/theme.sass";

const mapStateToProps = state => ({
	viewName: state.viewReducer.viewName
})
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		resize: windowResize
	}, dispatch);
}

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerHeight,
			height: window.innerWidth
		}

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
			height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

		this.setState({ width: width, height: height });
		this.props.resize([width, height]);
	}

	//lifecycle methods
	componentWillMount() {
		this.updateDimensions();
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	// - - render - -
    render() {

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/product" component={ProductPage} />
				<Route path="/compare" component={ComparePage} />
				<Route path="/wishlist" component={WishlistPage} />
				<Route path="/cart" component={CartPage} />
			</Switch>
		</Router>
		)
	}

}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
