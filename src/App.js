import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicComponent from './components/BasicComponent'

var tArray = [{id:1, name:'SpiderMan', view:true}, 
              {id:2, name:'Shaktiman', view:true},
              {id:3, name:'Doremon', view:false},
              {id:4, name:'Shinchan', view:true}];

var tBodyTr = tArray.map ((key) => { 
  return <tr> <td>{key.id}</td><td>{key.name}</td></tr> 
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <BasicComponent />
          <div>
            <table border="1" >
              <tr><th>Id</th><th>Name</th></tr>
              <tbody>{tBodyTr}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
