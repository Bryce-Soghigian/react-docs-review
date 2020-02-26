import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Commentcomponent from './components/Commentcomponent';
function App() {
 
  const state = [{
    date: "2/25/2020",
    text: 'I am enjoying the react docs!',
    author: {
      name: "bryce",
      avatarUrl: 'https://avatars0.githubusercontent.com/u/49734722?s=400&v=4',
    },
  }];
  return (
    <div className="App">
  <Commentcomponent
    date={state[0].date}
    text={state[0].text}
    author={state[0].author}
   />
    </div>
  );
}

export default App;
