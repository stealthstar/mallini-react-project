import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
})
class RelatedProducts extends React.Component {
	render() {
		return (
			<div>
				RelatedProducts
			</div>
		)
	}
}


export default connect(mapStateToProps)(RelatedProducts)