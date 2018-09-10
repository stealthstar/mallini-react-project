// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions import
import { changeView } from '../../actions/changeView';
//Font Awesome import
import FaHeartO from 'react-icons/lib/fa/heart-o';
//styles import
import "../../styles/topSection/WishlistIcon.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	wishlist: state.iconReducer.wishlist
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeView: changeView
	}, dispatch);
}

class WishlistIcon extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this)
	}

	clickHandler() {
		this.props.changeView('wishlist');
	}


	render() {
		const styleNone = { backgroundColor: "#f5f5f5", color: "#0f0f0f" };
		const styled = { backgroundColor: "red", color: "white" };
		return (
			<div className={"icon icon-wishlist"} onClick={this.clickHandler}>
				<FaHeartO />
				<div className={"icon__number icon-wishlist__number flex-center"} style={
					this.props.wishlist.length > 0 ? styled : styleNone
				}
				>
					{this.props.wishlist.length}
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon)