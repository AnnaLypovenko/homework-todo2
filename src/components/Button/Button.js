import React, {Component} from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";

export default class Button extends Component {


    render() {


        const {onClick, text, backgroundColor, color, buttonClassName} = this.props;


        const buttonStyle = {backgroundColor: backgroundColor, color: color};


        return (
            <div>
                <button
                    className={buttonClassName}
                    style={buttonStyle}
                    onClick={() => onClick()}
                >
                    {text}
                </button>
            </div>
        );
    }
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string,
    buttonClassName: PropTypes.string.isRequired,
};
Button.defaultProps = {
    flag : false
};