import { hot } from "react-hot-loader";
import * as React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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
		let body = document.getElementsByTagName('body')[0],
			width =  document.documentElement.clientWidth || body.clientWidth,
			height = document.documentElement.clientHeight || body.clientHeight;			
		this.setState({ width: width, height: height });
		this.props.resize([width, height]);
	}

	//lifecycle methods
	
	componentDidMount() {
		this.updateDimensions();
		console.log("/storefront")
		window.addEventListener("resize", this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	// - - render - -
    render() {
		return (
			<Router basename={"/storefront"} > 
			{/* change the string in basename to "/" for development */}
				<Switch>
					<Route key={"product"} path={"/product"} component={ProductPage} />
					<Route key={"compare"} path={"/compare"} component={ComparePage} />
					<Route key={"wish"} path={"/wishlist"} component={WishlistPage} />
					<Route key={"cart"} path={"/cart"} component={CartPage} />
					<Route key={"home"} path={"/"} exact component={HomePage} />
					<Redirect from={"*"} to={"/"} />
				</Switch>
			</Router>
			)
	}

}

export default withRouter(hot(module)(connect(null, mapDispatchToProps)(App)))
