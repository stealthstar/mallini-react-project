import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeLanguage} from '../../actions/changeLanguage';

import "../../styles/home/Dropdowns.sass";

const mapStateToProps = state => ({
	langDropdown: state.dropdownReducer.langDropdown,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLanguage: changeLanguage
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
		let val = e.target.value;
		this.setState({
			select: val
		});
		console.log(val)
		this.props.changeLanguage(val);

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