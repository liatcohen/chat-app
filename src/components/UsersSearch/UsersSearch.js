import React, { Component } from 'react';
import './UsersSearch.css';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import UserDetails from './UserDetails/UserDetails';

class usersSearch extends Component {

  state = {
    showSettings: false,
    showPopup: false
  }

  settingsClicked = () => {
    this.setState({ showSettings: !this.state.showSettings });
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup, showSettings: false });
  }

  render() {

    return (
      <div className="headLeft-section">
        {this.state.showPopup ?
          <UserDetails
            userName={this.props.userDetails['userName']}
            email={this.props.userDetails['email']}
            img={this.props.userDetails['img']}
            closePopup={this.togglePopup} />
          : null
        }
        <div className="headLeft-info">

          <div id="settings-button" onClick={this.settingsClicked}>
            <i className="fa fa-ellipsis-v"></i>
          </div>
          <div className="menu">
            {this.state.showSettings ?
              <div>
                <SettingsMenu logOut={this.props.logOut} uploadProfilePic={this.props.uploadProfilePic} detailsClicked={this.togglePopup} />
              </div>
              : null}
          </div>
          {/* <div className="search">
            <input id="search-input" type="text" name="search" placeholder="Search..." />
            <div id="search-button"> <i className="fa fa-search"></i> </div>
          </div> */}


        </div>
      </div>
    );
  };
}

export default usersSearch;
