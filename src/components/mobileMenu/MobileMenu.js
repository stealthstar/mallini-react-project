// - - - - - imports - - - - 

//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeActive} from '../../actions/menuActions';
import Transition from 'react-spring';
import { BrowserRouter as Link, NavLink } from 'react-router-dom'
//component imports
import Searchbar from '../topSection/Searchbar.js';
//font-awesome imports
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Pinterest from 'react-icons/lib/fa/pinterest';
import YouTube from 'react-icons/lib/fa/youtube-play';
//
import { showMenu, hideMenu } from '../../actions/menuActions'
//style import
import "../../styles/mobileMenu/MobileMenu.sass";

// - - - - - end imports - - - - 

const mapStateToProps = state => ({
	language: state.dropdownReducer.langDropdown,
	active: state.menuReducer.active,
	mobileMenu: state.menuReducer.mobileMenu
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeActive: changeActive,
		hideMenu: hideMenu
	}, dispatch);
}
class MobileMenu extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		let id = e.target.id;
		if(this.props.active === id){
			this.props.changeActive('');	
		} else {
			this.props.changeActive(id);
		}

	}

	render() {

		return (
			<div className={"mobile-menu"}>
			
				<NavLink to="/" className={"mobile-menu__section mobile-menu__section--home"} >
					<div className={"mobile-menu__label"}
						id={"home"}
						onClick={(e) => this.clickHandler(e)}
						>
						<p>{this.props.language === "en" ?
							'Home' : 'Strona Główna'
						}</p>

					</div>

				</NavLink>
				<div className={"mobile-menu__section mobile-menu__section--shop"} >
					<div className={"mobile-menu__label"} 
						id={"shop"} 
						onClick={(e) => this.clickHandler(e)}
						>
						<p>{this.props.language === "en" ?
							'Shop' : 'Kup'
						}</p>

						{this.props.active==="shop"?<ChevronUp />:<ChevronDown />}
					</div>
					{ // conditionally render submenu
						this.props.active === "shop" ? 
						<div className={"mobile-menu__subsection"}>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'By Categories' : 'Według Kategorii'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'By Room' : 'Według pomieszczeń'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'Outlet' : 'Outlet'
							}</div>
						</div> : null
					}
					
				</div>
				<div className={"mobile-menu__section mobile-menu__section--blog"}>
					<div className={"mobile-menu__label"} id={"blog"}
						onClick={(e) => this.clickHandler(e)}>
						<p>{this.props.language === "en" ?
							'Blog' : 'Blog'
						}</p>
						{this.props.active === "blog" ? <ChevronUp /> : <ChevronDown />}
					</div>
					{ // conditionally render submenu
						this.props.active === "blog" ? 
						<div className={"mobile-menu__subsection"}>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'Latest Post' : 'Najnowszy wpis'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'Most popular' : 'Najpopularniejsze'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'All posts' : 'Wszystkie wpisy'
							}</div>
						</div>
						: 
						null
					}
					
				</div>
				<div className={"mobile-menu__section mobile-menu__section--pages"}>
					<div className={"mobile-menu__label"} id={"pages"}
						onClick={(e) => this.clickHandler(e)}>
						<p>{this.props.language === "en" ?
							'pages' : 'strony'
						}</p>
						{this.props.active === "pages" ? <ChevronUp /> : <ChevronDown />}
					</div>
					{// conditionally render submenu
						this.props.active === "pages" ? 
						<div className={"mobile-menu__subsection"}>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'Contact' : 'Kontakt'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'FAQ' : 'FAQ'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'404 Page' : 'Strona 404'
							}</div>
							<div className={"mobile-menu__item"}>{this.props.language === "en" ?
								'Coming Soon' : 'Wkrótce'
							}</div>
						</div> : null
					}
						
				</div>
				<div className={"mobile-menu__section mobile-menu__section--products"} >
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							'Products' : 'Produkty'
						}</p>
					</div>
				</div>
				<div className={"mobile-menu__section mobile-menu__section--brands"} >
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							'Brands' : 'Marki'
						}</p>
					</div>
				</div>
				<div className={"mobile-menu__section mobile-menu__section--deals"} >
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							"today's deals" : "Dzisiejsze Promocje"
						}</p>
					</div>
				</div>
				<div className={"mobile-menu__section mobile-menu__section--new"} >
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							"New arrivals" : "Nowości"
						}</p>
					</div>
				</div>
				<div className={"mobile-menu__section mobile-menu__section--gift"} >
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							"Gift cards" : "Karty Podarunkowe"
						}</p>
					</div>
				</div>
				<Searchbar />	
				<div className={"mobile-menu__section mobile-menu__section--footer"} >
					<div className={"mobile-menu__label mobile-menu__label--social"}>
						<Facebook />
						<Twitter />
						<Pinterest />
						<YouTube />
					</div>
					<div className={"mobile-menu__label"}>
						<p>{this.props.language === "en" ?
							"\u00A9 Rafał Skwara. All Rights Reserved" : "\u00A9 Rafał Skwara. Wszystkie Prawa Zastrzeżone"
						}</p>
					</div>
				</div>
			</div>

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);