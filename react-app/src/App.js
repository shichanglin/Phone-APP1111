import React, { Component } from 'react';
import './App.css';
import store from './store';
import action from './action';
import {connect} from 'react-redux';

class App extends Component {
  constructor(params){
    super(params);
    this.addHandler =this.addHandler.bind(this)
  }
  addHandler(){
    console.log('add')
    store.dispatch(action(2))
  }
  render() {
    return (
      <div >
      首页{this.props.count}
      <button onClick={
        this.addHandler
      }>click</button>
      </div>
    );
  }
}
// 方法一
// export default connect((state)=>{
//   return {
//     count:state.count

//   }
// })(App) ;

// 方法二
let maoStatetiProps =(state)=>{
  return{
    count:state.count
  }
}
export default connect(maoStatetiProps)(App);
