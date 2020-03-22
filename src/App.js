import React, {Component} from 'react';
import './App.scss'
import Modal from "./components/Modal/Modal";

import Button from './components/Button/Button'

class App extends Component {
    state = {
        showModal: 0,
    };


    getModal = value => {
        this.setState({showModal: 1})
    };
    hideModal = value => {
        this.setState({showModal: 0})
    };

    render() {
        return (

            <div className="App">

                <p>CHOOSE YOUR BUTTON, MY FRIEND</p>
                <Button  onClick={() => this.showModal}
                        text1={"Open first modal"}
                        text2={"Open second modal"}
                        backgroundColor1={"lightblue"}
                        backgroundColor2={"pink"}
                        color={"black"}/>
            </div>
        );
    }
}

export default App;