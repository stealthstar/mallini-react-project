// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import data from '../../assets/data.json';

import "../../styles/footer/FooterLinksColumn.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName

});
class FooterLinksColumn extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	render() {
		let title = data.footer[this.props.lang][this.props.links][0]
		let links = data.footer[this.props.lang][this.props.links].slice(1);
		return (
			<div className={`footer-main__column footer-main__column--links ${title[0]}`} >
				<p>{title}</p>
				
				{
					links.map(el => (
						<a href={"#"} key={el}>{el}</a>
					))
				}
			</div>
		)
	}

}

export default connect(mapStateToProps)(FooterLinksColumn);