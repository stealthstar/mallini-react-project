import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {changeColor} from "../../actions/productPageActions/changeColor";
import { changeStyle } from "../../actions/productPageActions/changeStyle";

import ChevronUp from 'react-icons/lib/fa/chevron-up';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import "../../styles/productPage/ProductInputs.sass";
//data import
import data from "../../assets/data.json";
const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId,
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeColor: changeColor,
		changeStyle: changeStyle
	}, dispatch);
}

class ProductInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			input: this.props.lang === "en" ? `select ${this.props.valueType}` : `wybierz ${this.props.valueTypePL}`,
			visible: false,
		}

		this.optionClick = this.optionClick.bind(this);
		this.toggle = this.toggle.bind(this);

	}

	optionClick(e) {
		let event = e;
		this.setState({
			input: e.target.innerHTML
		});
		this.props.valueType === "color" ? this.props.changeColor(e.target.innerHTML) : this.props.changeStyle(e.target.innerHTML);
		this.toggle();

	}
	toggle() {
		if (this.state.visible) {
			this.setState({visible: false});
		} else {
			this.setState({ visible: true });
		}
	}
	getValues() {
		// returns an object containing data relevant
		// to the product with macthing id
		let id = this.props.productId, res;
		for (let i = 0; i < data.products.length; i++) {
			if (data.products[i].id === id) {
				res = data.products[i]
			}
		}
		
		return res[this.props.lang][this.props.valueType + "s"];;
	}

	render() {
		const values = this.getValues();
		const deactivated = (values && values.length > 0) ? '' : 'deactivated';
		return(
			<React.Fragment>
				<div className={`input-action-wrapper ${deactivated}`}>
					<div className={"input-action"} >
						<div className={"input-action__input-wrapper"}>
							<div className={"value flex-center"} onClick={this.toggle}>{this.state.input}</div>
							<div className={"controls"}>
								<button className={"down"} onClick={this.toggle}>
									<ChevronDown />
								</button>
							</div>
						</div>
					</div>
					{this.state.visible && (
						<div className={"input"}>
							{values ? values.map(value => <p key={value} onClick={(e)=>this.optionClick(e)}>{value}</p>):null
							}
						</div>
					)}
				</div>
			</React.Fragment>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInput)