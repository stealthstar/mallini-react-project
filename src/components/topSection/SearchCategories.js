// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//action imports
import { changeCategory } from '../../actions/changeCategory';
//Font Awesome import
import FaSearch from 'react-icons/lib/fa/search';
//json import
import data from '../../assets/data.json';
//styles import
import "../../styles/topSection/SearchCategories.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	searchCategory: state.searchReducer.searchCategory,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeCategory: changeCategory
	}, dispatch);
}

class SearchCategories extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false
		}
		this.clickHandler = this.clickHandler.bind(this);
		this.menuToggle = this.menuToggle.bind(this);
		
	}

	clickHandler(e) {
		let event = e;
		e.preventDefault();
		let val = event.target.innerHTML;
		console.log(val);
		this.setState({
			menuVisible: false
		});
		this.props.changeCategory(val);
	}

	menuToggle(e) {
		let event = e;
		e.preventDefault();
		this.setState({
			menuVisible: true
		})
	}

	render() {
		return (
			<div className={"categories__wrapper"} >
				{!this.state.menuVisible ?
					<button onClick={(e) => this.menuToggle(e)}>{this.props.searchCategory}</button>
				: 
					<div className="categories__menu">
						{data.categories[this.props.lang].map((el) => (
							<p key={el} onClick={(e) => this.clickHandler(e)}>{el}</p>
						))}
						
					</div>
				}
			</div>


		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCategories)