import React, { Component } from 'react'

export default class E extends Component {
  render() {
    return (
      <div>

        EEEEEEEEEEEEEE
        <button onClick={()=>{
          this.props.history.go(-1);
        }}>
          上一页
        </button>
        <button onClick={
            ()=>{
              this.props.history.push('/b/50')
            }
          }>回到b页面</button>
      </div>
    )
  }
}
