import React, { Component } from 'react';
import './App.css';
import ProductPageContainer from '../../Containers/ProductPageContainer/ProductPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductPageContainer />
      </div>
    );
  }
}

export default App;
