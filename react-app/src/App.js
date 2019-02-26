import React, { Component } from 'react';
import './App.css';
import store from './store';
import {add,minus,cet4} from './action';
import {connect} from 'react-redux';

class App extends Component {
  constructor(params){
    super(params);
    this.addHandler =this.addHandler.bind(this)
  }
  addHandler(){
    console.log('add')
    store.dispatch(add(2))
  }
  render() {
    return (
      <div >
      首页{this.props.count}
      <button onClick={
        this.addHandler
      }>++</button>
      <button onClick={()=>{
        store.dispatch(minus(3))
      }
        
      }>--</button>
      <div>
        <h1>哈哈：{this.props.cet4}</h1>
        <button onClick={()=>{
          store.dispatch(cet4(10))
        }
        }>考个试
        </button>
      </div>
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
let mapStatetiProps =(state)=>{
  return{
    count:state.count,
    cet4:state.cet4
  }
}
export default connect(mapStatetiProps)(App);
