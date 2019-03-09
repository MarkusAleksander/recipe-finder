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
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <UserBlock></UserBlock>
          </div>
          <div className="column is-half">
            <RecipeListContainer></RecipeListContainer>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
