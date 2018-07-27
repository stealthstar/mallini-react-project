// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';

import "../../styles/footer/FooterIcons.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.landDropdown,
	view: state.viewReducer.viewName,

});
class FooterIcons extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	render() {
		return (
				<section className={"footer-main__icons"}>
					<div clasName={"footer-main__icon footer-main__icon-1"}>
						<img src={"../../assets/img/icons/1.png"} />
					</div>
					<div clasName={"footer-main__icon footer-main__icon-2"}>
						<img src={"../../assets/img/icons/2.png"} />
					</div>
					<div clasName={"footer-main__icon footer-main__icon-3"}>
						<img src={"../../assets/img/icons/3.png"} />
					</div>
					<div clasName={"footer-main__icon footer-main__icon-4"}>
						<img src={"../../assets/img/icons/4.png"} />
					</div>
					<div clasName={"footer-main__icon footer-main__icon-5"}>
						<img src={"../../assets/img/icons/5.png"} />
					</div>
					<div clasName={"footer-main__icon footer-main__icon-6"}>
						<img src={"../../assets/img/icons/6.png"} />
					</div>
				</section>
		)
	}

}

export default connect(mapStateToProps)(FooterIcons);