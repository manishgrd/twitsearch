import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

const SearchCat = () => (
    <div>
  <Card>
    <CardTitle
      title=" Search results for 'Aadhar' "
    />
  </Card>

 <AppBar

iconElementLeft={
  <div>
      <FlatButton label="Top"/> 
      <FlatButton label="Latest"/>
      <FlatButton label="People"/>
      <FlatButton label="Photos"/>
      <FlatButton label="Videos"/>
      <FlatButton label="Broadcasts"/>
        
  </div>
}

      iconClassNameRight="muidocs-icon-navigation-more-vert">
      <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Search Settings" />
      <Divider />
      <MenuItem primaryText="Save this search" />
      <MenuItem primaryText="Embed this search" />
    </IconMenu>
    </AppBar>
    </div>
  );

export default SearchCat;