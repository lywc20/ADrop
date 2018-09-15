import React from 'react';
import LoginPrompt from './LoginPrompt';
//import hands from '../images/hands.jpg';
class Header extends React.Component {
  state = {
    loggedIn:false
  };

  render(){
    return(
      <div className="header">
        <div className="container">
          <h1 className="header__title">{this.props.title}</h1>
          {this.props.subtitle && <h2 className="header__subtitle">{this.props.subtitle}</h2>}
        </div>
        {this.state.loggedIn = true ? <button className="btn btn-success">Upload</button> : <LoginPrompt />}
        <button className="btn btn-success">Logout</button>
      </div>
    );
  }
}

Header.defaultProps = {
  title: 'ReConnect'
};


export default Header;

