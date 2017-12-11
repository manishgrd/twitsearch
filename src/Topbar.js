import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import HomeIcon from 'material-ui/svg-icons/action/home'
import SearchIcon from 'material-ui/svg-icons/action/search'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

const avtstyle = {margin:1};

const Topbar = () => (
  <div>
  <AppBar style={{backgroundColor:"#80DEEA"}}
        title="Twitter"

        iconElementLeft={
          <div>
              <FlatButton label="Home" labelPosition="after" icon={<HomeIcon />}/>
              <FlatButton label="Notifications" dense={true} labelPosition="after" icon={<NotificationsIcon />} />
              <Badge badgeContent={2} secondary={true} badgeStyle={{top: 5, right: 60}}/>
              <FlatButton label="Messages" labelPosition="after" icon={<EmailIcon />}/>
              <Badge badgeContent={4} secondary={true} badgeStyle={{top: 5, right: 60}}/>
          </div>
        }

       iconElementRight={
          <div>
             <Avatar style={avtstyle} size={35} src="images/twitter-logo.jpg" alt="" />
       <FlatButton icon={<SearchIcon/>}  href="./AadharSearch.html" target="_blank"/>
             <TextField hintText="Search Twitter" />
             <Avatar style={avtstyle} src="images/manish.jpg" alt="" avatarStyle={{top: 0, left: 15}}/>
             <RaisedButton label="Tweet" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }} />
         </div>
                        }

  />

    <br />

  </div>
);

export default Topbar;
