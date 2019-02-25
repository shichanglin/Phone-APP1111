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
let B =({match}) =>{
  return(
    <div>
      b页
      {match.params.num}
    </div>
  )
}
export default B;
