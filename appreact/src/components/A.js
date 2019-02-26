import React, { Component } from 'react'

export default class A extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.go =this.go.bind(this)
    }
    go(){
     this.props.history.push('/home');
        
    }
  render() {
      console.log(this.props);
      console.log(this.props.match.params.id);
      let {match} = this.props;

    return (
      <div>
        这是a页面
        {match.params.id}
        <button onClick={this.go}>回到首页</button>
        <button onClick={()=>{
            // go 
            this.props.history.go(-2);
            // goBack 上一步
            // this.props.history.goBack();
            // // goForward 下一步
            // this.props.history.goForward();
            //  // push
            // this.props.history.push('/');
          }}>-1</button>
      </div>
    )
  }
}
