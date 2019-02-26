import React, { Component } from 'react'

// export default class B extends Component {
//   render() {
//     return (
//       <div>
//         B页面
//       </div>
//     )
//   }
// }
//
let D =({match}) =>{
  return(
    <div>
      d页
      {match? 'D页面':''}
    </div>
  )
}
export default D;
