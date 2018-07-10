import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/home/TopContainer.sass";

import Searchbar from './Searchbar';
import CompareIcon from './CompareIcon';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import CartWorth from './CartWorth';
// const mapStateToProps = state => ({

// })
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }

export default class TopContainer extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {
		return (
			<section className={"top-container"}>
				<div className={"top-container__column"} >
					<p className={"top-container__logo"}><b>Media</b>market</p>
				</div>
				<div className={"top-container__search-column"} >
					<Searchbar />
				</div>
				<div className={"top-container__column top-container__column--right"} >
					<CompareIcon />
					<WishlistIcon />
					<CartIcon />
					<CartWorth />
				</div>
			</section>
		)
	}

}