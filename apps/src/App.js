import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/DOC';
import Content from './components/content';
import Subject from './components/subject';
import './App.css';

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!" />
      <Subject title="React" sub="For UI" />
      <Nav></Nav>
      <Content title="HTML" desc="HTML is HyperText Markup Language."/>
    </div>
  );
}

export default App;
