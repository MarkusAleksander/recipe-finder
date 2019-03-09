import React, { Component } from 'react';
import 'bulma-start/css/main.css';
import './App.css';

import UserBlock from './components/UI/UserBlock';
import RecipeListContainer from './components/Recipe/RecipeListContainer';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <UserBlock></UserBlock>
        <RecipeListContainer></RecipeListContainer>
      </div>
    )
  }

}

export default App;
