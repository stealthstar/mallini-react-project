import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SortDesc from 'react-icons/lib/fa/sort-desc';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import "../../styles/mobileMenu/MobileShopByCat.sass";

import data from '../../assets/data.json';

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	width: state.windowSizeReducer.windowWidth
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class MobileShopByCat extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.state = {
			activeMenu: false
		}

		this.menuToggle = this.menuToggle.bind(this);
	}



	componentDidMount() {
		let self = this;
		document.addEventListener('click', (e) => {
			let event = e;
			let condition = !event.target.classList.contains('mobile-cat__category-toggle');
			if (this.state.activeMenu && condition) {
				self.menuToggle();
			}
		});
	}



	menuToggle() {
		this.setState({
			activeMenu: !this.state.activeMenu
		});
	}



	render() {
		let styleBlue = { color: 'blue' };
		const categories = data.categories;
		return (
			<div className={"mobile-cat__wrapper"}>

				<div className={"mobile-cat__category"}>
					<button id={"category-mobile"} className={"mobile-cat__toggle mobile-cat__category-toggle"} onClick={this.menuToggle}>
						{this.props.lang === "en" ?
							"Shop by category"
							:
							"Kategorie"
						}
						<SortDesc />
					</button>
					{
						this.state.activeMenu && (
							<div className={"mobile-cat__content"}>
								{
									categories[this.props.lang].map((el) => (
										<p key={el} className={"mobile-cat__item"}>{el}</p>	
									))
								}
							</div>
						)
					}
				</div>
				
			</div>
		)
	}

}

export default connect(mapStateToProps)(MobileShopByCat)