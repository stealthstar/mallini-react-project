import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "../../styles/productPage/ProductGallery.sass";

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown,
	productId: state.viewReducer.activeProductId,
	width: state.windowSizeReducer.windowWidth
})

class ProductGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			images: [],
			activeImage: 0
		}

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.mouseOutHandler = this.mouseOutHandler.bind(this);
		this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
	}


	
	
	changeSlide(e) {
		const event = e;
		const slideNumber = event.target.id.slice(-1);
		this.setState({
			activeImage: slideNumber
		});
	}

	mouseMoveHandler(e) {
		//logic that manipulates bg position on mouse move
		const event = e;
		let x = ((event.pageX - event.target.offsetLeft) / event.target.offsetWidth * 100);
		let y = ((event.pageY - event.target.offsetTop) / event.target.offsetHeight * 100); 
		
		this.setState({
			position: x+"% "+y+"%"
		});
	}
	mouseOutHandler() {
		this.setState({ 
			position: "center center",
			bgSize: 100
		});
	}
	mouseEnterHandler() {
		// here set the scale of magnification in %
		this.setState({ 
			bgSize: 300
		});
	}

	render() {
		const images = this.props.images;
		const handlers = this.props.images ? {
			onMouseMove: (e) => this.mouseMoveHandler(e),
			onMouseOut: this.mouseOutHandler, 
			onMouseEnter: this.mouseEnterHandler
		} : null;
		return (
			<div className={"product-main__gallery"}>
				<div className={"product-main__thumbnails"}>
					{images.map(image => (
						<div className={"thumbnail-wrapper flex-center"} >
							<img id={`img-toggle${images.indexOf(image)}`} 
								key={images.indexOf(image)} 
								src={image} 
								onClick={(e)=>this.changeSlide(e)}
								/>
						</div>
					))					
					}
				
				</div>
				<div 
					className={"product-main__big-image"} 
					style={{ 
						"backgroundImage": `url(${images[this.state.activeImage]})`,
						"backgroundPosition": this.state.position,
						"backgroundSize": this.state.bgSize+"%"
					}}
					{...handlers}
				>
					{/* <img src={images[this.state.activeImage]} /> */}
				</div>
				{	 
						this.props.images && this.props.width > 680? 
							<p>
								{
									this.props.lang === "en" ? 
										"Roll over image to zoom in" 
										: "Najedź na obrazek, by powiększyć"
								}
							</p>
							: null
				}
				
			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductGallery)