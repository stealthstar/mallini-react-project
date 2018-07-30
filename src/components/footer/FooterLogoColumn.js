// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import data from '../../assets/data.json';

import "../../styles/footer/FooterLogoColumn.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName

});
class FooterLogoColumn extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div className={"footer-main__column footer-main__column--logo"} >
				<p className={"footer-main__column--logo__big"}><b>Media</b>market</p>
				<p className={"footer-main__column--logo__big"}>+1(732)446-6721</p>
				<p className={"footer-main__column--logo__small"}>Media Market, LLC</p>
				<p className={"footer-main__column--logo__small"}>+5 South Main Street,</p>
				<p className={"footer-main__column--logo__small"}>Englishtown, NJ 07726</p>
			</div>
		)
	}

}

export default connect(mapStateToProps)(FooterLogoColumn);