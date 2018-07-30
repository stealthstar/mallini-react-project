// - - - imports - - - 
import * as React from "react";
import { connect } from 'react-redux';

import "../../styles/footer/FooterIcons.sass";
//- - - end imports - - -

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	currency: state.dropdownReducer.currencyDropdown,
	currencySymbol: state.dropdownReducer.currencySymbol,
	currencyMultiplier: state.dropdownReducer.currencyMultiplier,
	view: state.viewReducer.viewName,

});
class FooterIcons extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

	}

	getPaths(array) {
		for (let i = 1; i < 7; i++) {
			array.push("../../assets/img/icons/icon-" + [i] + ".png");
		}
	}

	render() {
		let imgArr = [];
		this.getPaths(imgArr);
		return (
				<section className={"footer-main__icons"}>
					<div className={"footer-main__icon footer-main__icon-1"}>
						<img src={require("../../assets/img/icons/icon-1.png")} />
						<div classname={"footer-main__text"}>
							<p>
								{
									this.props.lang === "en" ?
									"Free Delivery" : "Darmowa Dostawa"
								}
							</p>
							<p>
							{
								this.props.lang === "en" ?
									`From ${this.props.currencySymbol}${Math.round(this.props.currencyMultiplier * 50)}` : 
									`Od ${this.props.currencySymbol}${Math.round(this.props.currencyMultiplier * 50)}`
					}

							</p>
						</div>
					</div>
					<div className={"footer-main__icon footer-main__icon-2"}>
						<img src={require("../../assets/img/icons/icon-2.png")} />
						<div classname={"footer-main__text"}>
							<p>
								{
									this.props.lang === "en" ?
										"Customer Support" : "Wsparcie klienta"
								}
							</p>
							<p>
								{
									this.props.lang === "en" ?
										"Always 24/7" :
										"Zawsze 24/7"
								}

							</p>
						</div>
					</div>
					<div className={"footer-main__icon footer-main__icon-3"}>
						<img src={require("../../assets/img/icons/icon-3.png")} />	
						<div classname={"footer-main__text"}>
							<p>
								{
									this.props.lang === "en" ?
										"Secure Payments" : "Bezpieczne płatności"
								}
							</p>
							<p>
								{
									this.props.lang === "en" ?
										"Safe shopping" :
										"Bezpieczne zakupy"
								}

							</p>
						</div>
					</div>
					<div className={"footer-main__icon footer-main__icon-4"}>
						<img src={require("../../assets/img/icons/icon-4.png")} />
						<div classname={"footer-main__text"}>
							<p>
								{
									this.props.lang === "en" ?
										"Discount" : "Zniżki"
								}
							</p>
							<p>
								{
									this.props.lang === "en" ?
										"From 10%" :
										"Od 10%"
								}

							</p>
						</div>	
					</div>
					<div className={"footer-main__icon footer-main__icon-5"}>
						<img src={require("../../assets/img/icons/icon-5.png")} />	
						<div classname={"footer-main__text"}>
							<p>Cashback</p>
							<p>
								{
									this.props.lang === "en" ?
										"Buy online" :
										"Kupuj online"
								}

							</p>
						</div>
					</div>
					<div className={"footer-main__icon footer-main__icon-6"}>
						<img src={require("../../assets/img/icons/icon-6.png")} />	
						<div classname={"footer-main__text"}>
							<p>
								{
									this.props.lang === "en" ?
										"Bonus" : "Premie"
								}
							</p>
							<p>
								{
									this.props.lang === "en" ?
										"Daily deals" :
										"Oferty dnia"
								}

							</p>
						</div>	
					</div>
				</section>
		)
	}

}

export default connect(mapStateToProps)(FooterIcons);