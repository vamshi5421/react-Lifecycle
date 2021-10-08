import React,{Component} from 'react';
import classes from './App.module.scss';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount :true,
      ignoreProp  : 0,
      seed : 47,
    }
  }

mountCounter = () => {
  this.setState({mount : true})
}
unmountCounter = () => {
  this.setState({mount : false})
}

ignorePropMethod = () => {
  this.setState({ ignoreProp : Math.random()*10})
}

seedGeneratorMethod = () => {
  this.setState({ seed : Number.parseInt(Math.random()*100)})
}

render(){
    
    
    return (
      <div className={classes.App}>
        
        <button disabled= {this.state.mount} onClick={this.mountCounter}>Mount</button>
        <button disabled= {!this.state.mount} onClick={this.unmountCounter}>Unmount</button>

        <button  onClick={this.ignorePropMethod}>IgnoreProp</button>
        <button  onClick={this.seedGeneratorMethod}>Seed Prop</button>
        {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} seed = {this.state.seed}/> : null }
      </div>
    );
  }
  
  
}

export default App;
