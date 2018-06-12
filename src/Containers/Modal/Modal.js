import React, { Component } from 'react';
import ModalTwo from './ModalTwo';

class Modal extends Component {
  state = { 
    isModalOpen: false 
  }
  openModalHandler = () => {
    this.setState({isModalOpen: true});
  }
  closeModalHandler = (event) => {
    this.setState({isModalOpen: false});
  }
  render() {
    return (
      <div>
        <button onClick={this.openModalHandler}>Open modal</button>
        <ModalTwo 
          isOpen={this.state.isModalOpen} 
          onClose={this.closeModalHandler}
        >
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button
              onKeyDown={this.escapeKeyHandler}
              onKeyPress={this.escapeKeyHandler}
              onClick={this.closeModalHandler}>Close</button></p>
        </ModalTwo>
      </div>
    )
  }
}

export default Modal;