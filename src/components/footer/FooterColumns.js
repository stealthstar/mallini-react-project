// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';
import FooterLogoColumn from './FooterLogoColumn';
import FooterLinksColumn from './FooterLinksColumn';
import data from '../../assets/data.json';

import "../../styles/footer/FooterColumns.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	view: state.viewReducer.viewName

});
class FooterColumns extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<section className={"footer-main__columns"} >
				<FooterLogoColumn />
				<FooterLinksColumn links={"about"}/>
				<FooterLinksColumn links={"category"}/>
				<FooterLinksColumn links={"support"}/>
				<FooterLinksColumn links={"partnerships"}/>
				<FooterLinksColumn links={"customer"}/>
			</section>
		)
	}

}

export default connect(mapStateToProps)(FooterColumns);