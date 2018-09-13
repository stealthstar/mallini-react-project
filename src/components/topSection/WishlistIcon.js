// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'

//Font Awesome import
import FaHeartO from 'react-icons/lib/fa/heart-o';
//styles import
import "../../styles/topSection/WishlistIcon.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	wishlist: state.iconReducer.wishlist
});



class WishlistIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function


	render() {
		const styleNone = { backgroundColor: "#f5f5f5", color: "#0f0f0f" };
		const styled = { backgroundColor: "red", color: "white" };
		return (
			<NavLink to={"/wishlist"} style={{textDecoration: "none"}}>
				<div className={"icon icon-wishlist"} >
					<FaHeartO />
					<div className={"icon__number icon-wishlist__number flex-center"} style={
						this.props.wishlist.length > 0 ? styled : styleNone
					}
					>
						{this.props.wishlist.length}
					</div>
				</div>
			</NavLink>
		)
	}

}

export default connect(mapStateToProps)(WishlistIcon)