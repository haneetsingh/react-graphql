import React from 'react'

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a href="#" className="navbar-brand">React GraphQL</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-main">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Recipes</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Tutorials</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav;