// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'
//action imports
import { changeSearchTerm } from '../../actions/changeSearchTerm';
import { changeProduct } from '../../actions/changeProduct';
//Font Awesome imports
import FaSearch from 'react-icons/lib/fa/search';
//component import
import SearchCategories from './SearchCategories'
//data import
import data from "../../assets/data.json";
//styles import
import "../../styles/topSection/Searchbar.sass";
//- - - end imports


const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currencyDropdown: state.dropdownReducer.currencyDropdown,
	searchCategory: state.searchReducer.searchCategory,
	searchTerm: state.searchReducer.searchTerm,
	width: state.windowSizeReducer.windowWidth
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeSearchTerm: changeSearchTerm,
		changeProduct: changeProduct
	}, dispatch);
}

class Searchbar extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			result: []
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.sumbitHandler = this.sumbitHandler.bind(this);
	}

	sumbitHandler(e) {
		let event = e;
		event.preventDefault();
		this.props.changeSearchTerm(this.state.input);
	}

	changeHandler(e) {
		let val = e.target.value.toUpperCase(),
			products = [];		
		
		if(val.length >= 3) {
			data.products.forEach(el => products.push([el[this.props.lang].name.toUpperCase(), el.id, el[this.props.lang].category]));
			products = products.filter(value => value[0].includes(val));
			this.setState({
				input: val,
				result: products
			});
		} else {
			this.setState({
			input: val,
			result: []
		});
		}

	}
	clickHandler(id, e) {
		// e.preventDefault();
		this.props.changeProduct(id)
	}
	render() {
		return (
			<div className={"search-form__container"}>
				<form className={"search-form"}>
					<div className={"search-form__input-wrapper"}>
						<input 
							type={"text"} 
							value={this.state.input} 
							onChange = {(e) => this.changeHandler(e) }
							placeholder={
								this.props.lang === 'en' ? 
									"Search..."
								:
									"Szukaj..."
							}/>
						{this.props.width > 870 && <SearchCategories />}
					</div>
					<div className={"search-form__categories"}>
						<div className={"search-form__submit"} onClick={(e) => this.sumbitHandler(e)}>
							<FaSearch />
						</div>
					</div>
				</form>
				{this.state.input && 
					<div className={"search-form__results"}>
						{this.state.result.map(element => (
						element[2] === this.props.searchCategory || this.props.searchCategory === "All Categories" || "Wszystkie" ?
							<NavLink to="/product" onClick={(e) => this.clickHandler(element[1], e)}>
								<p className={"search-link"} key={element[1]}>{element[0]}</p> 
							</NavLink> : null
						)
						)}
					</div>
				}
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)