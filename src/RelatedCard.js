import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const style = {
  height: 600,
  width: 300,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};



const RelatedCard= () => (
<div>
<Paper style={style} zDepth={1}>
  <Card>
    <CardTitle
      title="Related Articles"
      textAlign='left'
    />
  </Card>
  <Divider />
  <Card>
  <CardHeader
      title="UPA govt. was in the know of flaws in Aadhaar: Swapan"
      />
    <CardText>
    ‘Nilekani aware that Rs. 50,000 cr. has been wasted on it’
    </CardText>
    <CardHeader
      subtitle="The Hindu"
      avatar="images/TheHindu.jpg"
    />
  </Card>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  <br/>
  <Divider />
  </Paper>
</div>
);

export default RelatedCard;
