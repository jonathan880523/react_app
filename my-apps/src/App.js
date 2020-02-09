import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import DOC from './components/DOC';
import Contents from './components/Contents';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title: "WEB", sub:"World Wide Web!"},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title: 'HTML', desc:'HTML is a HyperText Markup Language.'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'Javascript is for interactive'}
      ]
    };
  }

  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <DOC
          data={this.state.contents}
        ></DOC>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
  
}

export default App;
