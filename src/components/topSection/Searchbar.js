// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//action imports
import { changeSearchTerm } from '../../actions/changeSearchTerm';

//Font Awesome imports
import FaSearch from 'react-icons/lib/fa/search';

//component import
import SearchCategories from './SearchCategories'

//styles import
import "../../styles/topSection/Searchbar.sass";
//- - - end imports


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	searchTerm: state.searchReducer.searchTerm
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeSearchTerm: changeSearchTerm
	}, dispatch);
}

class Searchbar extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.sumbitHandler = this.sumbitHandler.bind(this);
	}

	sumbitHandler(e) {
		let event = e;
		event.preventDefault();
		this.props.changeSearchTerm(this.state.input);
	}

	changeHandler(e) {
		let val = e.target.value;
		this.setState({
			input: val
		});
		
	}

	render() {
		return (

			<form className={"search-form"}>
				<div className={"search-form__input-wrapper"}>
					<input 
						type={"text"} 
						value={this.state.input} 
						onChange = {(e) => this.changeHandler(e) }
						placeholder={
							this.props.lang === 'en' ? 
								"Type to search..."
							:
								"Wyszukaj..."
						}/>
					<SearchCategories />
				</div>
				<div className={"search-form__categories"}>
					<div className={"search-form__submit"} onClick={(e) => this.sumbitHandler(e)}>
						<FaSearch />
					</div>
				</div>
			</form>

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)