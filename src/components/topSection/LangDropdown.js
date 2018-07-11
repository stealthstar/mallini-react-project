// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {changeLanguage} from '../../actions/changeLanguage';
import {changeSearchTerm} from '../../actions/changeSearchTerm';
import {resetCategory} from '../../actions/resetCategory';

import "../../styles/topSection/Dropdowns.sass";

const mapStateToProps = state => ({
	langDropdown: state.dropdownReducer.langDropdown,
	searchCategory: state.searchReducer.searchCategory
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLanguage: changeLanguage,
		changeSearchTerm: changeSearchTerm,
		resetCategory: resetCategory
	}, dispatch);
}
class LangDropdown extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			select: 'en'
		}
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e) {
		let val = e.target.value, result;
		this.setState({
			select: val
		});
		console.log(val)
		this.props.changeLanguage(val);
		switch(val){
			case 'en':
				result = "All Categories"
				break;
			case 'pl':
				result = "Wszystkie"
				break;
			default:
				result = "All Categories";
		}


		this.props.resetCategory(result);
		this.props.changeSearchTerm('');
	}

	render() {
		return (
			<select name={"language"} className={"dropdown language-dropdown"} onChange={(e)=>this.changeHandler(e)}>
				<option value={'en'} default>EN</option>
				<option value={'pl'}>PL</option>
			</select>
		)
	}


}

export default connect(mapStateToProps, mapDispatchToProps)(LangDropdown)