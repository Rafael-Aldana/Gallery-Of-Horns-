import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  handleClickModal = () => {
    this.props.openBeastModal();
  }

  render () {
    return (
      <>
       <Modal show={this.props.openBeastModal} onHide={this.props.closeBeastModal}>
        <Modal.Header closeButton>
          <Modal.Title>Selected Beast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={this.props.SelectedBeast} alt='' width='25px'></img>
        <p>{this.props.SelectedBeastDescription}</p>
        </Modal.Body>
      </Modal>
      
      
      </>
    )
  }
}

export default SelectedBeast;