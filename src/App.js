import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Topbar from './Topbar';
import SearchCat from './SearchCat';
import SelectOpt from './SelectOpt';
import ResultCard from './ResultCard';
import RelatedCard from './RelatedCard';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Topbar />
      <SearchCat/>
      <SelectOpt/>
      <ResultCard/>
      <RelatedCard/>
     </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
