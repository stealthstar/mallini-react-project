import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrency } from '../../actions/changeCurrency';

import "../../styles/home/Searchbar.sass";
import FaSearch from 'react-icons/lib/fa/search';
import SearchCategories from './SearchCategories'

const mapStateToProps = state => ({
	currencyDropdown: state.dropdownReducer.currencyDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

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
	}

	changeHandler(e) {
		let val = e.target.value;
		this.setState({
			input: val
		});
		//this.props.changeCurrency(val);
	}

	render() {
		return (

			<form className={"search-form"}>
				<div className={"search-form__input-wrapper"}>
					<input type={"text"} value={this.state.input} onChange = {(e) => this.changeHandler(e) }/>
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

export default connect(mapStateToProps)(Searchbar)