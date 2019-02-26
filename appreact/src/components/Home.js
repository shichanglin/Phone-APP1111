import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'
export default class Home extends Component {
  constructor(params){
    super(params);
    this.state={
    iswarn:true
    }
  }
  render() {
    return (
      <div>
        Home页面
        <button onClick={()=>{
          // this.props.history.go(-1)
          this.props.history.goForward();
        }}>下一页 </button>
        <Prompt when={this.state.iswarn} message={'你确定要离开？'}></Prompt>
      </div>
    )
  }
}
