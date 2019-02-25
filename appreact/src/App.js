import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import Home from './components/Home';
import B from './components/B';
import A from './components/A';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to='/a/5'>跳转A页面</Link>|
            <Link to='/'>跳转Home页面</Link>|
            <Link to='/b/100'>跳转B页面</Link>
            {/* <Route exact path='/' component={Home}></Route>
            <Route path='/b' component={B}></Route>
            <Route path='/a' component={A}></Route> */}
            <Switch>
              {/* 仅仅渲染第一项匹配 exact：严格匹配 */}
            <Route path='/b/:num' component={B}></Route>
            <Route path='/a/:id' component={A}></Route>
            <Route path='/'  component={Home}></Route>
            </Switch>

          </div>

        </Router>
      </div>
    );
  }
}

export default App;
