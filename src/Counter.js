import React,{Component} from 'react';


class Counter extends Component {
  constructor(props) {
    console.log('....Constructor');
    
    super(props);

    this.state = {
      counter : 0
    }
  }
  increament = () => {
    this.setState({counter : this.state.counter + 1})
  }
  decreament = () => {
    this.setState({counter : this.state.counter - 1})
  }

  componentDidMount() {
    console.log('....Component did mount');
    console.log('....-------------------');
    
  }

  
  render(){
    console.log('....Render method... ');
    
    return (
      <div>
        <div> Counter : {this.state.counter}</div>
        <button onClick = {this.increament}>Increament</button>
        <button onClick ={this.decreament}>Decreament</button>
      </div>
    );
  }
  componentDidUpdate(prevProp, prevState, snapshot){
    console.log('.... Component did update');
    console.log('....-------------------'); 
    
  }
}

export default Counter;
