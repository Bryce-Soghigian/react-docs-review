import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Commentcomponent from './components/Commentcomponent';
import List from './components/List';
function App(props) {
 
  const state = [{
    date: "2/25/2020",
    text: 'I am enjoying the react docs!',
    author: {
      name: "bryce",
      avatarUrl: 'https://avatars0.githubusercontent.com/u/49734722?s=400&v=4',
    },
  },{
    date: "2/25/2020",
    text: 'I love the react docs!',
    author: {
      name: "Dan",
      avatarUrl: 'https://avatars0.githubusercontent.com/u/810438?s=400&v=4',
    },
  },{
    date: "2/25/2020",
    text: 'I am bryces friend and think he would be a good canidate!',
    author: {
      name: "Jacob Tharp",
      avatarUrl: 'https://avatars1.githubusercontent.com/u/18707646?s=400&v=4',
    },
  }];

  return (
    <div className="App">
     <List array={state}/>
    </div>
  );
}

export default App;
