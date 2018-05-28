import React, { Component } from 'react';
import NoteListContainer from 'NoteListContainer';
import NavbarMenu from 'NavbarMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavbarMenu />
        <h2>Your Notes</h2>
        <NoteListContainer />
      </div>
    );
  }
}

export default App;
