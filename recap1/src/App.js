import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Counter from './components/Counter';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  state={
    startGame: false
  }

  toggle(){
    this.setState({startGame: !this.state.startGame});
  }
  render(){
  return (
   <div className="App-header">
     <button className="btn btn-outline-info" onClick={()=>this.toggle()}>Start game</button>
     {this.state.startGame?<Counter></Counter>:null}
     
   </div>
  );
}
}
export default App;
