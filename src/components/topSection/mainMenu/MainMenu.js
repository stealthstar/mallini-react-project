import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SortDesc from 'react-icons/lib/fa/sort-desc';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import EllipsisV from 'react-icons/lib/fa/ellipsis-v';

import { changeView } from '../../../actions/changeView';

import data from '../../../assets/data.json';

import "../../../styles/topSection/mainMenu/MainMenu.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	width: state.windowSizeReducer.windowWidth
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeView: changeView
	}, dispatch);
}

class MainMenu extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.state={
			activeMenu: ''
		}

		this.menuClickHandler = this.menuClickHandler.bind(this);
		this.clickChangeView = this.clickChangeView.bind(this);
	}

	componentDidMount() {
		let self=this;
		document.addEventListener('click', (e) => {
			self.menuClickHandler(e);
		})
	}

	menuClickHandler(e) {
		let event = e;
		let id = event.target.id;
		if (event.target.classList.contains('submenu__toggle')) {
			this.setState({
				activeMenu: id
			})
		} else if (event.target.classList.contains('submenu__content')) {
			this.setState({
				activeMenu: this.state.activeMenu
			})
		} else {
			this.setState({
				activeMenu: ''
			})
		}
		id === 'home' ? this.props.changeView(id) : null
	}

	clickChangeView(view) {
		
	}

	render() {
		let styleBlue = {color: 'blue'};
		const categories = data.categories;
		return (
			<div>
				<div className={"main-menu"} >
					<div className={"submenu__wrapper submenu__category"}>
						<button id={"category"} className={"submenu__toggle submenu__category-toggle"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en"?
								"Shop by category"
								:
								"Kategorie"
							}
							<SortDesc />
						</button>
						{
							this.state.activeMenu === "category" ?
								<div className={"submenu__content"}>
									{categories[this.props.lang].map((el) => (
										<p key={el} className={"submenu__item"}>{el}</p>	
									))}
								</div>
							: 
							 null
						}
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button 
							id={"home"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en"?
								"Home"
								:
								"Home"
							}

						</button>
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button id={"shop"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en" ?
								"Shop "
								:
								"Kup "
							}
							{
								this.state.activeMenu === "shop" ?
									<ChevronUp /> 
									: <ChevronDown />
								
							}
						</button>
						{
							this.state.activeMenu === "shop" ?
								<div className={"submenu__content"}>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'By Categories' : 'Według Kategorii'
									}</p>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'By Room' : 'Według pomieszczeń'
									}</p>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'Outlet' : 'Outlet'
									}</p>
								</div>
								:
								null
						}
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button id={"blog"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en" ?
								"Blog "
								:
								"Blog "
							}
							{
								this.state.activeMenu === "blog" ?
									<ChevronUp /> : <ChevronDown />
								
							}
						</button>
						{
							this.state.activeMenu === "blog" ?
								<div className={"submenu__content"}>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'Latest Post' : 'Najnowszy wpis'
									}</p>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'Most popular' : 'Najpopularniejsze'
									}</p>
									<p className={"submenu__item"}>{this.props.lang === "en" ?
										'All posts' : 'Wszystkie wpisy'
									}</p>
								</div>
								:
								null
						}
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button id={"pages"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en" ?
								"Pages "
								:
								"Strony "
							}
							{
								this.state.activeMenu === "pages" ?
									<ChevronUp /> : <ChevronDown />
								
							}
						</button>
						{
							this.state.activeMenu === "pages" ?
								<div className={"submenu__content"}>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"Contact"
											:
											"Kontakt"
										}
									</p>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"FAQ"
											:
											"FAQ"
										}
									</p>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"404 Page"
											:
											"Strona 404"
										}
									</p>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"Coming Soon"
											:
											"Wkrótce"
										}
									</p>
								</div>
								:
								null
						}
					</div>

					<div className={"submenu__wrapper submenu--small"}>
						<button
							id={"deals"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en" ?
								"Today's deals"
								:
								"Promocje"
							}

						</button>
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button
							id={"new"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							{this.props.lang === "en" ?
								"New arrivals"
								:
								"Nowości"
							}

						</button>
					</div>
					<div className={"submenu__wrapper submenu--small"}>
						<button id={"rest"} className={"submenu__toggle submenu__toggle--small"} onClick={(e) => this.menuClickHandler(e)}>
							...
						</button>
						{
							this.state.activeMenu === "rest" ?
								<div className={"submenu__content"}>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"Brands"
											:
											"Marki"
										}
									</p>
									<p className={"submenu__item"}>
										{this.props.lang === "en" ?
											"Products"
											:
											"Produkty"
										}
									</p>
								</div>
								:
								null
						}
					</div>
				</div>

			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)