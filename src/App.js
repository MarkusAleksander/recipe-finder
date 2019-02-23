import React, { Component } from 'react';
import './App.css';

// Import Components
import RecipeListContainer from './components/Recipe/RecipeListContainer';

class App extends Component {

  render() {
    return (
      <RecipeListContainer></RecipeListContainer>
    )
  }

}

export default App;
