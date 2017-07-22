import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import Joblist from './job/Joblist.js';
import Jobmore from './job/Jobmore.js';
import $ from 'jquery';
import './Job.css';

class Job extends Component {
	constructor(){
		super();
		this.state={
			btnclass:"list-more",
			gologinClass:"text goLogin",
			goeditClass:"text goedit hide",
			joblist:[],
			joblistmore:[]
			}
		}
		componentWillMount(){
			var loginState = localStorage["login_state"];
			//console.log(loginState);
			if(!!loginState){
				this.setState({
					gologinClass:"text hide",
					goeditClass:"goedit text"	
				})
			}else{
				this.setState({
	           	   gologinClass:"text",
	           	   goeditClass:"text goedit hide"
	           })
			}
		
			var that = this;
			var newList1 = [];
			$.get("/api",function(data){
				console.log(data.sendlist);
				newList1 = data.sendlist;
				that.setState({
					joblist:newList1
				})
			})

		}
	
	render(){
		console.log(this.state.joblist);
		 var list = this.state.joblist.map(function(elem) {
            	return <Joblist job={elem} key={elem.positionId}/>;
            })
		return(
			<div className="box">
				<div className="custom-info">
					<span className="info">
						10秒钟定制职位
					</span>
					<div className="go">
						<em className="icon"></em>
						<a className={this.state.gologinClass} href="http://localhost:3000/login#/login?_k=a17r5d">去登录</a>
						<a className={this.state.goeditClass} href="">编辑</a>
					</div>
				</div>
				<ul>
					{list}
					<Jobmore list={this.state.joblist} listmore={this.btnChangemore}/>
				</ul>
				<div id="copyright">
					<p>©2015 lagou.com, all right reserved </p>
					<div className="copyright-item">
						<span className="phone">移动版&nbsp;·&nbsp;</span>
						<span className="computer">电脑版&nbsp;·&nbsp;</span>
						<a href="#header">回顶部</a>
					</div>
				</div>
			</div>
		)
	}
	
	btnChangemore=(a)=>{
		var joblistmore = this.state.joblist.concat(a);
		console.log(joblistmore);
		this.setState({
			joblist:joblistmore
		})
	}

}



export default Job;