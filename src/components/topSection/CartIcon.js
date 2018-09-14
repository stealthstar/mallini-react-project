// - - - imports - - - 
// React imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'
// action imports
import { changeCurrency } from '../../actions/changeCurrency';
// Font Awesome imports
import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';
// styles import
import "../../styles/topSection/CartIcon.sass";
// - - - end imports - - - 

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	cartItems: state.cartReducer.itemsAmount,
	view: state.viewReducer.viewName,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeCurrency: changeCurrency,
	}, dispatch);
}

class CartIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {
		const styleNone = { backgroundColor: "#f5f5f5", color: "#0f0f0f" };
		const styled = { backgroundColor: "red", color: "white" };
		return (
			<NavLink to={"cart"} style={{textDecoration: "none"}}>
				<div className={"icon icon-cart"} onClick={this.clickHandler} >
					<FaShoppingBag />
					{
						<div className={"icon__number icon-cart__number flex-center"} 
							style={this.props.cartItems > 0 ? styled : styleNone }>
							{this.props.cartItems}
						</div>

					}
					
				</div>
			</NavLink>
			
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)