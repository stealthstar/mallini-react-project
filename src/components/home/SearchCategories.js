import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/home/SearchCategories.sass";
import FaSearch from 'react-icons/lib/fa/search';

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class SearchCategories extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			category: 'All Categories',
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
			category: val,
			menuVisible: false
		})
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
			<div className={"categories-wrapper"} >
				{!this.state.menuVisible ?
					<button onClick={(e) => this.menuToggle(e)}>{this.state.category}</button>
				: 
					<div className="categories--menu">
						<p onClick={(e) => this.clickHandler(e)}>Category1</p>
					</div>
				}
			</div>


		)
	}

}

export default connect(mapStateToProps)(SearchCategories)