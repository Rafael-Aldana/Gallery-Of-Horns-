import React from 'react';
import Header from './Header';
import Main from './Main';
// import Footer from './Footer';
import data from './data.json';
import './App.css';
// import HornedBeasts from './HornedBeasts';
// import SelectedBeast from './Components/SelectedBeast';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main data={data} />

      </>
    )
  }
}

export default App;