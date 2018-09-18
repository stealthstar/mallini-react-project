import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import TopBar from '../components/topSection/TopBar';
import TopContainer from '../components/topSection/TopContainer';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import MainMenu from '../components/topSection/mainMenu/MainMenu';
import Footer from '../components/footer/Footer';
import MobileShopByCat from "../components/mobileMenu/MobileShopByCat";
import CompareItem from "../components/comparePage/CompareItem";
//Font Awesome imports
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import "../styles/comparePage/ComparePage.sass";

const mapStateToProps = state => ({
	width: state.windowSizeReducer.windowWidth,
	height: state.windowSizeReducer.windowHeight,
	mobileMenu: state.menuReducer.mobileMenu,
	lang: state.dropdownReducer.langDropdown,
	compare: state.iconReducer.compare
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class ComparePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.documentElement.scrollTo({
			"left": 0,
			"top": 0,
			"behavior": "smooth"
		});
	}
	render() {
		return (
			<div className={
				(this.props.width > 1200) ?
				"wrapper"
					: (this.props.width > 720) ?
						"wrapper wrapper--medium"
						:
						"wrapper wrapper--mobile"
				}>
			{(this.props.width > 720) && <TopBar />}
			<TopContainer />
			{(this.props.width > 720) && <MainMenu />}
			{
					((this.props.mobileMenu) && (this.props.width <= 720))? 
					<MobileMenu />
					
					//rest of the page is wrapped in condition
					//which prevents it from displaying when mobile menu is visible
				: 	<div className={"wrapper"}>
						<section className={"compare"} >
							<h2>{
								this.props.lang === 'en' ? "Comparison" : "Porównanie"
							}</h2>
							<p>
							</p>
							<div className={"compare__items"}>
								{	this.props.compare.length > 0 ? 
										this.props.compare.map(el => <CompareItem number={el} />)								
								:
									this.props.lang === 'en' ? 
											<div className={"no-compare"}>
												<span>"This is a page which will display the products you choose to compare."</span>
												<FaBarChart />
											</div> 
											: <div className={"no-compare"}>
												<span>"Na tej stronie wyświetlone zostaną przedmioty, które wybierzesz do porównania."</span>
												<FaBarChart />
											</div>
							}
							</div>
						</section>
						<Footer />
					</div>
			}
			
			</div>
		)
	}

}

export default connect(mapStateToProps)(ComparePage)