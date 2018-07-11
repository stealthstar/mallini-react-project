// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from '../../assets/data.json'
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

class Card extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={"card"} style={{backgroundColor: this.props.color}}>
				<p className={"card__title"}>
					<b>{data.cards[this.props.itemNo][this.props.lang].name}</b> {data.cards[this.props.itemNo][this.props.lang]["name_2"]}
				</p>
				<p className={"card__slogan"}>{data.cards[this.props.itemNo][this.props.lang].slogan}</p>
				<p className={"card__cta"}>{data.cards[this.props.itemNo][this.props.lang].button}</p>
			</div>

		)
	}

}

export default connect(mapStateToProps)(Card)