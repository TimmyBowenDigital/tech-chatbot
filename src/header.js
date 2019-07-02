import React from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning your not logged in!
    </div>
  );
}

class HeaderApp extends React.Component{
  constructor(props){
    super(props);
    this.clickWarningButton = this.clickWarningButton.bind(this);
    this.state = {warningShown: true};
  }

  clickWarningButton() {
    this.setState(state => ({
      warningShown: !state.warningShown
    }));
  }

  render() {
    let button;

    return (
      <div class="HeaderApp">
    		<div class="jumbotron container">
    			<title>Tech Chatbot App</title>
    			<a href='/'>Home</a>
    			<h1>Tech Chatbot App</h1>
    		  <h2>Chat Area</h2>

          <WarningBanner warn={this.state.warningShown} />
          <button onClick={this.clickWarningButton}>
            {this.state.warningShown ? 'Hide' : 'Show'}
          </button>
    		</div>
    	</div>
    );
  }
}

export default HeaderApp;
