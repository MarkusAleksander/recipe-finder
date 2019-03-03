import React, { Component } from 'react';
import './App.css';

import UserBlock from './components/UI/UserBlock';
import RecipeListContainer from './components/Recipe/RecipeListContainer';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="flex-container">
        <UserBlock></UserBlock>
        <RecipeListContainer></RecipeListContainer>
      </div>
    )
  }

}

export default App;
