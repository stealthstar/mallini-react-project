// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from '../../assets/data.json';
import Card from './Card';

import "../../styles/home/Cards.sass";
// - - - end imports - - - 

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		changeCurrency: changeCurrency
// 	}, dispatch);
// }

class Cards extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<section className={"cards"}>
				<Card color={"#6454e1"} itemNo={1}/>
				<Card color={"#55ce85"} itemNo={2}/>
				<Card color={"#2a9add"} itemNo={3}/>
			</section>
		)
	}

}

export default connect(mapStateToProps)(Cards)