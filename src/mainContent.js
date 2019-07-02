import React from 'react';
import Greeting from './auth.js';



class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="mainContent">
        <div class="jumbotron container">
          <Greeting isLoggedIn={true}/>
        </div>
      </div>
    );
  }
}

export default MainContent;
