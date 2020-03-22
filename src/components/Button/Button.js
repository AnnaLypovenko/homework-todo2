import React, {Component} from 'react';
import './Button.scss'
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

class Button extends Component {

    state = {
        post: [
            {id: 1, name: "text of the First Modal Window"},
            {id: 2, name: "different text of the Second Modal Window"},
        ]
    };

    render() {
        const {onClick, text1, text2, backgroundColor1, backgroundColor2, color, modalButton1, modalButton2} = this.props;
        const buttonStyle1 = {
            backgroundColor: backgroundColor1,
            color: color
        };
        const buttonStyle2 = {
            backgroundColor: backgroundColor2,
        };
        return (
            <div className="container">

                {this.props.data.map((data, key) => (
                    <>
                        <button
                            className={modalButton1}
                            onClick={onClick}
                            style={buttonStyle1}>
                            {text1}
                        </button>
                        <button key={key} onClick={(onClick) => this.getModal(data.id)}
                            className={modalButton2}
                            style={buttonStyle2}>
                            {text2}
                        </button>

                        <div className="holder">
                            <Button data ={this.state.post}/>
                        </div>

                    </>)
                )}

            </div>

        );
    }
}

// Объект, приобретающий определенную форму
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    modalButton: PropTypes.func,
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
Button.defaultProps = {
    flag: true
};
export default Button;