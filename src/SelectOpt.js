import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
    customWidth: {
        width: 210,
      },
    height: 600,
    width: 240,
    margin: 10,
    textAlign: 'center',
    display: 'block',
     };
/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectOpt extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <Paper style={styles} zDepth={1}>
        <Card>
        <CardTitle title="Search Filters"/>
        </Card>
       <Divider/>
        <SelectField
          floatingLabelText="People"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="From Anyone" />
          <MenuItem value={2} primaryText="People you follow" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Location"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Near you" />
          <MenuItem value={2} primaryText="Anywhere" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Language"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="English" />
          <MenuItem value={2} primaryText="Hindi" />
          <MenuItem value={3} primaryText="Tamil" />
          <MenuItem value={4} primaryText="Bengali" />
          <MenuItem value={5} primaryText="Gujarati" />
        </SelectField>
        <br />
        <br />
        <br />
        <Card>
        <CardTitle title="Related Searches"/>
        <CardText>
      Aadhar UIDAI Narendra Modi Rahul Gandhi
      HPDF HeroISL INDvsSL Virat Kohli
      Gujarat Elections
    </CardText>
        </Card>
       <Divider/>
        </Paper>
      </div>
    );
  }
}
