// - - - imports - - - 
//react and redux imports
import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom';
import { Transition, config } from 'react-spring';
//action imports
import { changeSearchTerm } from '../../actions/changeSearchTerm';
import { hideMenu } from '../../actions/menuActions';
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
		hideMenu: hideMenu,
		changeProduct: changeProduct
	}, dispatch);
}

class Searchbar extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			result: [],
			resultsDisplay: 'flex'
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
		// function that updates the results array with matched searches
		// and notifies state whether the results window shoul be displayed
		let val = e.target.value.toUpperCase(),
			products = [];		
		
		if(val.length >= 3) {
			data.products.forEach(el => products.push([el[this.props.lang].name.toUpperCase(), el.id, el[this.props.lang].category]));
			products = products.filter(value => { 
				//quite long conditions, these
				return value[0].includes(val) && (value[2] === this.props.searchCategory || (this.props.searchCategory === "All Categories" || this.props.searchCategory ==="Wszystkie"))
			});
			this.setState({
				input: val,
				result: products,
				resultsDisplay: 'block'
			});
		} else {
			this.setState({
			input: val,
			result: [],
			resultsDisplay: 'none'
		});
		}

	}
	clickHandler(id) {
		this.props.changeProduct(id)
		this.setState({
			resultsDisplay: 'none'
		});
		this.props.hideMenu(); // hides the mobile menu if visible
	}
	render() {
		const result = this.state.result;
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
					<div className={"search-form__results"} style={{display: this.state.resultsDisplay}}>
						{this.state.result.map(element => (
							<NavLink to={"/product/" + element[1]} onClick={(e) => this.clickHandler(element[1])}>
								<p className={"search-link"} key={element[1]}>{element[0]}</p> 
							</NavLink> 
						))}
					</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)