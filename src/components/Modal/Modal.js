import React, {Component} from 'react';
import './Modal.scss';
import PropTypes from "prop-types";

export default class Modal extends Component {

    render() {
        const {header, text, actions, isOpen, onClose} = this.props;
        let currentClassName = 'modal fade';
        let currentStyle = {display: 'none'};
        if (isOpen) {
            currentClassName = 'modal fade show';
            currentStyle = {display: 'block'};
        }
        return (
            <div className={currentClassName} id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={currentStyle}>
                <div onClick={() => onClose()} style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "fixed"
                }}></div>
                <div className="modal-dialog modal-dialog-centered" style={{zIndex: "1000"}} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{header}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={() => onClose()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {text}
                        </div>
                        <div className="modal-footer">
                            {actions}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};
Modal.defaultProps = {
    flag: false
};