// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'
//components imports
import Searchbar from './Searchbar';
import CompareIcon from './CompareIcon';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import CartWorth from './CartWorth';
//actions imports
import {showMenu, hideMenu} from '../../actions/menuActions'
//Font Awesome imports
import Menu from 'react-icons/lib/md/menu';
import Close from 'react-icons/lib/md/close';
//styles imports
import "../../styles/topSection/TopContainer.sass";

// - - - end imports


const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu
});
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		showMenu: showMenu,
		hideMenu: hideMenu,
	}, dispatch);
}


class TopContainer extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.props.mobileMenu ?
			this.props.hideMenu() :
			this.props.showMenu()
	}


	render() {
		return (
			<section className={"top-container"}>
				<div className={"top-container__column top-container__column--left"} >
					{
						(this.props.width > 720) ?
							<NavLink to={"/"} style={{textDecoration: "none", color: "black"}}>
								<p className={"top-container__logo"}>
									<span><b>Media</b>market</span> 
								</p>
								</NavLink>
							:
								this.props.mobileMenu ?
								<div className={"menu-toggle menu-toggle--yellow flex-center"} onClick={this.handleClick}>
									<Close />
								</div>
								:	
								<div className={"menu-toggle flex-center"} onClick={this.handleClick}>
									<Menu />
								</div>	
					}
					
				</div>
				<div 
					className=
					{"top-container__search-column"} >
					{(this.props.width > 720) && <Searchbar />}
				</div>
				<div className={"top-container__column top-container__column--right"} >
					<CompareIcon />
					<WishlistIcon />
					<CartIcon />
					{(this.props.width > 720) && <CartWorth />}
				</div>
			</section>
		)
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(TopContainer)