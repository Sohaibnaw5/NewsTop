import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isDarkTheme: false,
    };
  }

  toggleDarkMode = () => {
    const icon = document.getElementById('icon');

    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      icon.src = 'moon.png';
    } else {
      document.body.classList.add('dark-theme');
      icon.src = 'sun.png';
    }

    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };
  
  render() {
    return (
      <>
      <div>
        <nav className="navbar navbar-expand p-3 " id='navi'>
  <div className="container-fluid">
    <Link className="navbar-brand "to="/">NewsTop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link"to="/business">Business</Link>    </li>   
          <li className="nav-item"><Link className="nav-link"to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link"to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link"to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link"to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link"to="/technology">Technology</Link></li>
        </ul>
  
        <img src={this.state.isDarkTheme ? require('./images/sun.png') : require('./images/moon.png')} onClick={this.toggleDarkMode} id='icon' alt="Toggle Dark Mode" />
        
        </div>
  </div>
</nav>

      </div>
      </>
    )
  }
}
