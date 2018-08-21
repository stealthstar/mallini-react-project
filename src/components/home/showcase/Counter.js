import * as React from 'react';
import PropTypes from 'prop-types';
import dateF from 'date-fns';
import '../../../styles/home/showcase/Counter.sass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	lang: state.dropdownReducer.langDropdown
});


class Counter extends React.Component {// eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            to: this.props.countTo,
            from: this.props.countFrom,
            isTicking: true,        // flag to see if timer is ticking
        }; // end state
        this.timer = null;
    }

    componentDidMount() {
        if (this.state.isTicking) {
            this.timer = setInterval(() => {
                this.tick();
            }, 1000);
        }
    }
    componentWillUnmount() {
        if (this.state.isTicking) {
            this.timer = clearInterval(() => this.tick());
        }
    }

    onSuccess() {
        this.setState({
            isTicking: false,
        });
        clearInterval(this.timer);
    }

    format(number) {
        return number < 10 ? `0${number}` : number;
    }

    convertSeconds(s) {
        var d, h, m;
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return { d: d, h: h, m: m, s: s };
    };

    tick() {
        if(this.state.from > this.state.to) {
            let time = () => this.convertSeconds(this.state.from-this.state.to);
            this.setState({
                from: this.state.from - 1,
				left: this.state.from - this.state.to
            });

        } else if (this.state.from === this.state.to) {
            this.onSuccess();
        }
    }

    
    render() {
        return (
            <div className={"counter"}>
                <div className = "timer" > 
					<p>{
						this.props.lang === 'en' ? "Hurry up!" : "Pospiesz się!"
					}</p>
					<p>{
						this.props.lang === 'en' ? "Offer ends in:" : "Oferta kończy się za:"
					}</p>
					<div className={"result"} >
						<div className={"result--partial flex-center"}>
							<p className={"flex-center res-circle"}>{this.convertSeconds(this.state.left).d || 0}</p>
							<p className={"flex-center res-desc"}>{
								this.props.lang === 'en' ? "DAYS" : "DNI"
							}</p>
						</div>
						<div className={"result--partial flex-center"}>
							<p className={"flex-center res-circle"}>{this.convertSeconds(this.state.left).h || 0}</p>
							<p className={"flex-center res-desc"}>{
								this.props.lang === 'en' ? "HOURS" : "GODZIN"
							}</p>
						</div>
						<div className={"result--partial flex-center"}>
							<p className={"flex-center res-circle"}>{this.convertSeconds(this.state.left).m || 0}</p>
							<p className={"flex-center res-desc"}>{
								this.props.lang === 'en' ? "MINUTES" : "MINUT"
							}</p>
						</div>
						<div className={"result--partial flex-center"}>
							<p className={"flex-center res-circle"}>{this.convertSeconds(this.state.left).s || 0}</p>
							<p className={"flex-center res-desc"}>{
								this.props.lang === 'en' ? "SECONDS" : "SEKUND"
							}</p>
						</div>
						
					</div>
				</div>
            </div>
        );
    }
}

Counter.defaultProps = {
    countFrom: 10,
    countTo: 0,
};

Counter.propTypes = {
    countFrom: PropTypes.number,
    countTo: PropTypes.number,
};
export default connect(mapStateToProps)(Counter);