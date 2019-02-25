import React, { Component } from 'react'

export default class A extends Component {
  render() {
      console.log(this.props);
      console.log(this.props.match.params.id);
      let {match} = this.props;

    return (
      <div>
        这是a页面
        {match.params.id}
      </div>
    )
  }
}
