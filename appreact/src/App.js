import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route,
  Link, 
  Switch,
  Redirect,
  NavLink
 } from 'react-router-dom';
import Home from './components/Home';
import B from './components/B';
import A from './components/A';
import D from './components/D';
import E from './components/E';
import F from './components/F';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavLink to='/a/5'>跳转A页面</NavLink>|
            <NavLink to='/home'>跳转Home页面</NavLink>|
            <NavLink to='/b/100'>跳转B页面</NavLink>
            <NavLink to='/c'>跳转c页面</NavLink>
            <NavLink to='/d/1'>跳转d页面</NavLink>
            <NavLink to='/e'>跳转e页面</NavLink>
            <NavLink to='/f'>跳转F页面</NavLink>
            {/* <Route exact path='/' component={Home}></Route>
            <Route path='/b' component={B}></Route>
            <Route path='/a' component={A}></Route> */}
              {/* <Switch> */}
              {/* 仅仅渲染第一项匹配 exact：严格匹配 */}
              {/* <Switch> */}
            <Route path='/b/:num' component={B}></Route>
            <Route path='/a/:id' component={A}></Route>
            <Route path='/e' component={E}></Route>
            <Route path='/c'  render={() => {
              return <Redirect to='/home'></Redirect>
              
               }}>
            </Route>
            {/* </Switch> */}
                {/* <Route path='/c'  render={() => {
              return(
                <div>
                   <h1>11</h1>
                   <h1>22</h1>
                   <h1>33</h1>
                </div>                   
              )
                }}></Route> */}
              <Route exact path='/home' component={Home}></Route>
              {/* <Route path='/a/:id' component={A}></Route> */}
              <Route path='/d/:xx' children={D}></Route>
              <Route path='/f' children={F}></Route>

              {/* children 使每一个D页面都在其他页面中渲染
              children不能在Switch中使用  D组件必须用函数渲染 */}
              {/* </Switch> */}



          </div>
        </Router>
      </div>
        );
      }
    }
    
    export default App;
