// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components imports
import LangDropdown from './LangDropdown';
import CurrencyDropdown from './CurrencyDropdown';
//styles
import "../../styles/topSection/TopBar.sass";
//- - - end imports - - - 

const mapStateToProps = state => ({
	language: state.dropdownReducer.langDropdown
})

class TopBar extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	render() {
		return (
			<div className={"top-bar"}>
				<div className={"column column-left"}>
					<LangDropdown />
					<CurrencyDropdown />
				</div>
				<div className={"column column-right"}>
					<button>
						{
							this.props.language === "en" ?
								'Help & Contact'
							:
								'Pomoc i kontakt'
						}	
					</button>
					<button>
						{
							this.props.language === "en" ?
								'Order Status'
								:
								'Status zamówienia'
						}	
					</button>
					<button>
						{
							this.props.language === "en" ?
								'My Account'
								:
								'Moje konto'
						}
					</button>
				</div>

			</div>
		)
	}

}

export default connect(mapStateToProps)(TopBar);