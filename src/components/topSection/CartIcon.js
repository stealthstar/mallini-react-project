// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';

import "../../styles/topSection/CartIcon.sass";
// - - - end imports - - - 

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	items: state.cartReducer.items
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class CartIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		const styleNone = { backgroundColor: "#f5f5f5", color: "#0f0f0f" };
		const styled = { backgroundColor: "red", color: "white" };
		return (
			<div className={"icon icon-cart"}>
				<FaShoppingBag />
				{
					<div className={"icon__number icon-cart__number flex-center"} 
					style = { this.props.items.length > 0 ? styled : styleNone }>
						{this.props.items.length}
					</div>

				}
				
			</div>
		)
	}

}

export default connect(mapStateToProps)(CartIcon)