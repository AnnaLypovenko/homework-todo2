import React, {Component} from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


export default class App extends Component {

    state = {
        modal1: false,
        modal2: false
    };

    openFirstModal = () => {
        this.setState({modal1: true})
    };
    closeFirstModal = () => {
        this.setState({modal1: false})
    };
    openSecondModal = () => {
        this.setState({modal2: true})
    };
    closeSecondModal = () => {
        this.setState({modal2: false})
    };


    render() {
        const actions = [
            (<Button
                key={"3"}
                buttonClassName={"btn btn-primary"}
                onClick={this.closeFirstModal}
                text={"ok"}
                backgroundColor={"red"}
                color={"white"}
            />),
            (<Button
                key={"4"}
                buttonClassName={"btn btn-primary"}
                onClick={this.closeFirstModal}
                text={"Cancel"}
                backgroundColor={"red"}
                color={"white"}
            />)
        ];
        const actions2 = [
            (<Button
                key={"5"}
                buttonClassName={"btn btn-primary"}
                onClick={this.closeSecondModal}
                text={"ok"}
                backgroundColor={"red"}
                color={"white"}
            />),
            (<Button
                key={"6"}
                buttonClassName={"btn btn-primary"}
                onClick={this.closeSecondModal}
                text={"Cancel"}
                backgroundColor={"red"}
                color={"white"}
            />)
        ];

        return (
            <div className="App">
                <p>Its alive!!!!</p>
                <Button
                    key={"1"}
                    buttonClassName={"btn btn-primary"}
                    onClick={this.openFirstModal}
                    text={"Open Modal 1"}
                    backgroundColor={"pink"}
                    color={"blue"}
                />

                <Button
                    key={'2'}
                    buttonClassName={"btn btn-secondary"}
                    onClick={this.openSecondModal}
                    text={"Open Modal 2"}
                    backgroundColor={"pink"}
                    color={"red"}
                />

                <Modal
                    key ={'1'}
                    header={'first'}
                    text={'first text'}
                    actions={actions}
                    isOpen={this.state.modal1}
                    onClose={this.closeFirstModal}
                />

                <Modal
                    key ={'2'}
                    header={'second'}
                    text={'second text'}
                    actions={actions2}
                    isOpen={this.state.modal2}
                    onClose={this.closeSecondModal}
                />

            </div>
        );
    };
}
