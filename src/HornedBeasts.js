import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Horned-Beast.css'
import SelectedBeast from './Components/SelectedBeast';
// import Main from './Main';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      showBeastModal: false,
      SelectedBeast:'',
      SelectedBeastDescription:'',
    }
  }
handleFavorite = () => {
  this.setState({
    favorites: this.state.favorites + 1
  })
}


openBeastModal = (image_url, description) => {this.setState({showBeastModal: true, SelectedBeast: image_url, SelectedBeastDescription: description})}

closeBeastModal = () => this.setState({showBeastModal: false });



  render() {
    return (
      <>
        <SelectedBeast
        openBeastModal={this.openBeastModal}
        onHide={this.closeBeastModal}
        selectedBeast={this.state.SelectedBeast}
        SelectedBeastDescription={this.state.SelectedBeastDescription}
        />
        {/* <h1>{this.props.title}</h1> */}
        {/* <img src={this.props.image_url} /> */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.openBeastModal} onHide={this.closeBeastModal} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="outline-secondary" onClick={this.handleFavorite}> Favorite:❤️ {this.state.favorites} </Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeasts;