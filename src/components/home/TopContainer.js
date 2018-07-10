import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/home/TopContainer.sass";

import Searchbar from './Searchbar';
import CompareIcon from './CompareIcon';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import CartWorth from './CartWorth';

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight
});
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class TopContainer extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {
		return (
			<section className={"top-container"}>
				<div className={"top-container__column"} >
					<p className={"top-container__logo"}>
						{
							(this.props.width > 1000) ?
						 		<span><b>Media</b>market</span> 
						 		:
								 null
						}
					</p>
				</div>
				<div 
					className=
					{"top-container__search-column"} >
					{(this.props.width > 1000) && <Searchbar />}
				</div>
				<div className={"top-container__column top-container__column--right"} >
					<CompareIcon />
					<WishlistIcon />
					<CartIcon />
					{(this.props.width > 1000) && <CartWorth />}
				</div>
			</section>
		)
	}

}


export default connect(mapStateToProps)(TopContainer)