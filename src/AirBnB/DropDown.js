import React from "react";

import "./DropDown.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown" style={{ width: "200px" }}>
        <div className="buttons" onClick={this.showDropdownMenu}>
          {" "}
          Options{" "}
        </div>

        {this.state.displayMenu ? (
          <ol className="unorderList">
            <li>
              <a className="active" href="#Create Page">
                Land Lords
              </a>
            </li>
            <li>
              <a href="#Manage Pages">Rentals</a>
            </li>
            <li>
              <a href="#Create Ads">Home Services</a>
            </li>
            <li>
              <a href="#Manage Ads">Moving Services</a>
            </li>
            <li>
              <a href="#Activity Logs">Activity Logs</a>
            </li>
            <li>
              <a href="#Setting">Setting</a>
            </li>
            <li>
              <a href="#Log Out">Log Out</a>
            </li>
          </ol>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
