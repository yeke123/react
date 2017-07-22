import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="header">拉勾网</div>
        {this.props.children}
        <ul className="footer">
        	<li>
        		<IndexLink to="/" activeClassName="active">
        			<i className="iconfont icon-fangzi"></i>
        			职位
        		</IndexLink>
        	</li>
        	<li>
        		<Link to="/search" activeClassName="active">
        			<i className="iconfont icon-sousuo"></i>
        			搜索
        		</Link>
        	</li>
        	<li>
        		<Link to="/user" activeClassName="active">
        			<i className="iconfont icon-wode"></i>
        			我的
        		</Link>
        	</li>
        </ul>
      </div>
    );
  }
}

export default App;
