import React, { Component } from 'react';
import './App.css';

// Import Components
import RecipeListContainer from './components/Recipe/RecipeListContainer';
import UserSelectContainer from './components/UserEntry/UserSelectContainer';

class App extends Component {

  render() {
    return (
      <div>
        <RecipeListContainer></RecipeListContainer>
        <UserSelectContainer></UserSelectContainer>
      </div>
    )
  }

}

export default App;
