import React, { Component } from 'react';
import 'bulma-start/css/main.css';
import './App.css';

import UserBlock from './components/UI/UserBlock';
import RecipeListContainer from './components/Recipe/RecipeListContainer';
import UserButtonsContainer from './components/UserEntry/UserButtonsContainer';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <UserBlock></UserBlock>
          </div>
          <div className="column is-half">
            <UserButtonsContainer></UserButtonsContainer>
            <RecipeListContainer></RecipeListContainer>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
