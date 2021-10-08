import React,{Component} from 'react';
import classes from './App.module.scss';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount :true
    }
  }

mountCounter = () => {
  this.setState({mount : true})
}
unmountCounter = () => {
  this.setState({mount : false})
}

render(){
    
    
    return (
      <div className={classes.App}>
        
        <button disabled= {this.state.mount} onClick={this.mountCounter}>Mount</button>
        <button disabled= {!this.state.mount} onClick={this.unmountCounter}>Unmount</button>
        {this.state.mount ? <Counter/> : null }
      </div>
    );
  }
  
  
}

export default App;
