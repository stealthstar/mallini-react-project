import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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
			activeImage: 0,
			bgSize: 100
		}

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.moveHandler = this.moveHandler.bind(this);
		this.normaliseImage = this.normaliseImage.bind(this);
		this.magnifyImage = this.magnifyImage.bind(this);
	}


	componentDidMount() {
		this.targetElement = document.querySelector('.product-main__big-image');

	}

	componentWillUnmount() {
		clearAllBodyScrollLocks();
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
	moveHandler(e) {
		//logic that manipulates bg position on touch move
		const event = e;
		let xParam = event.touches !== undefined ? event.touches[0].clientX : event.pageX, 
			yParam = event.touches !== undefined ? event.touches[0].clientY : event.pageY;
		if (event.target.classList.contains('product-main__big-image')) {
			let x = ((xParam - event.target.offsetLeft) / event.target.offsetWidth * 100);
			let y = ((yParam - event.target.offsetTop) / event.target.offsetHeight * 100); 
			x < 0 ? x = 0 : x > 100 ? x = 100 : null;
			y < 0 ? y = 0 : y > 100 ? y = 100 : null;
			this.setState({
				position: x+"% "+y+"%"
			});
		}
	
	}

	normaliseImage() {
		this.setState({ 
			position: "center center",
			bgSize: 100
		});

		enableBodyScroll(this.targetElement);
	}
	magnifyImage() {
		// here set the scale of magnification in %
		disableBodyScroll(this.targetElement, {
			reserveScrollBarGap: true
		});
		this.setState({ 
			bgSize: 300
		});
	}

	render() {
		const images = this.props.images;
		const handlers = this.props.images ? {
			onMouseMove: (e) => this.moveHandler(e), 
			onTouchMove: (e) => this.moveHandler(e),
			onMouseOut: this.normaliseImage, 
			onTouchEnd: this.normaliseImage ,
			onTouchStart: this.magnifyImage, 
			onMouseEnter: this.magnifyImage,
		} : null;
		return (
			<div className={"product-main__gallery"}>
				<div className={"product-main__thumbnails"}>
					{images.map(image => (
						<div key={images.indexOf(image)} className={"thumbnail-wrapper flex-center"} >
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
						this.props.images && this.props.width > 680 ? 
							<p>
								{
									this.props.lang === "en" ? 
										"Roll over image to zoom in" 
										: "Najedź na obrazek, by powiększyć"
								}
							</p>
							: <p>
								{this.state.bgSize === 100 ? 
									this.props.lang === "en" ?
										"Tap and hold the image for zoom"
										: "Dotknij i przytrzymaj obrazek, by go powiększyć"
									: this.props.lang === "en" ?
										"Drag the image to move it"
										: "Przeciągnij obrazek, by go przesunąć"
								}
							</p>
				}
				
			</div>
		)
	}
}
export default connect(mapStateToProps)(ProductGallery)