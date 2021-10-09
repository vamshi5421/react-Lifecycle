import React,{Component} from 'react';

const ErrorComponent = (props) => {
  return (<div>{props.ignoreProp}</div>)
}

class Counter extends Component {
  constructor(props) {
    console.log('....Constructor');
    
    super(props);

    this.state = {
      counter : 0,
      seed : 0
    }
  }
  increament = () => {
    this.setState({counter : this.state.counter + 1})
  }
  decreament = () => {
    this.setState({counter : this.state.counter - 1})
  }
  static getDerivedStateFromProps(props, state ){
    if(props.seed && state.seed !== props.seed){
      return {
        seed : props.seed,
        counter: props.seed
      }
    }
    return null
  }
  componentDidMount() {
    console.log('....Component did mount');
    console.log('....-------------------');
    
  }

  shouldComponentUpdate(nextProps, nextSate){
    
    
    if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
      console.log('.....should componnent update --- DO NOT RENDER');
      return false;
    }
    console.log('.........should componnent update ---RENDER');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState, snapshot){
    console.log('.....Get snapshot before update');
    
    return null
  }
  
  render(){
    console.log('.......Render method... ');
    if(this.state.error){
        return <div>We have an  error! {this.state.error}</div>
    }
    return (
      
      <div>
        <div> Counter : {this.state.counter}</div>
        <ErrorComponent/>
        <button onClick = {this.increament}>Increament</button>
        <button onClick ={this.decreament}>Decreament</button>
      </div>
    );
  }
  componentDidUpdate(prevProp, prevState, snapshot){
    console.log('.... Component did update');
    console.log('....-------------------'); 
    
  }
  componentWillUnmount(){
    console.log('.....Component did update');
    console.log('------------------------');
  }

  componentDidCatch(error, info){
    console.log('.....Component did catch');
    
  }
}

export default Counter;
