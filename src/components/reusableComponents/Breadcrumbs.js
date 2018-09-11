import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//Font Awesome imports

//data import
import data from "../../assets/data.json";

import "../../styles/reusableComponents/Breadcrumbs.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({

// 	}, dispatch);
// }
class Breadcrumbs extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}



	render() {
		return (
					<div className={"breadcrumbs"}>
						{this.props.lang === "en" ?
							<React.Fragment>
								<span>Shop&nbsp;&nbsp;</span><span> > Shop Detail Product Large</span>
							</React.Fragment>
							:
							<React.Fragment>
								<span>Zakupy&nbsp;&nbsp;</span> <span> > Szczegóły produktu</span>
							</React.Fragment>
						}
					</div>

		);
	}

}

export default connect(mapStateToProps)(Breadcrumbs)