import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {changeQuantity} from "../../actions/productPageActions/changeQuantity";

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
		changeQuantity: changeQuantity
	}, dispatch);
}

class ProductQtyInput extends React.Component {
	constructor(props) {
		super(props);
		this.state= { 
			input: 0
		}

		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
	}

	increase() {
		this.setState({
			input: this.state.input + 1
		});
		this.props.changeQuantity(this.state.input + 1)
	}
	decrease() {
		if (this.state.input > 0){
			this.setState({
				input: this.state.input - 1
			});
			this.props.changeQuantity(this.state.input - 1)
		}
	}

	render() {
		return(
			<div className={"quantity-action"} >
				<p>{this.props.lang === "en" ? "Qty" : "Ilość"}</p>
				<div className={"quantity-action__input-wrapper"}>
					<div className={"number flex-center"}>{this.state.input}</div>
					<div className={"controls"}>
						<button className={"up"} onClick={this.increase}>
							<ChevronUp />
						</button>
						<button className={"down"} onClick={this.decrease}>
							<ChevronDown />
						</button>
					</div>
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductQtyInput)