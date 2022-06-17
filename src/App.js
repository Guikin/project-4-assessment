import React, { Component } from 'react';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';
import './App.css';

class App extends Component {
  state={
    selectedButton:'',
}

setButton=(e)=> {
    this.setState(state => ({
        selectedButton:state.selectedButton=e.value
    })) 
}

checkClass=(e)=>{
    if(e.value == this.state.selectedButton){
        return 'selected'
    }
}
    componentDidMount =() => {
        if(!this.state.selectedButton){
        this.setState(state => ({
            selectedButton:state.selectedButton=1
        })) 
    }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main className='App'>
          <CircleSelector setButton={this.setButton} selectedButton={this.state.selectedButton} checkClass={this.checkClass}/>
          <Circles setButton={this.setButton} selectedButton={this.state.selectedButton} checkClass={this.checkClass} />
        </main>
      </div>
    );
  }
}

export default App;
