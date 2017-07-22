import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';
import '../Job.css';
class Jobmore extends React.Component{
	constructor(){
		super();
		this.state={
			joblist:[],
			btnclass:"list-more"
		}
	}
	
//	componentWillMount(){
//		this.getJoblist();
//	}
	
	render(){
		return(
			<div>
				<li className={this.state.btnclass} onClick={this.getJoblist}>加载更多</li>
			</div>
		)
	}
		getJoblist = () => {
			var that = this;
			var newList = [];
			$.get("/more",function(data){
				newList = that.state.joblist.concat(data.sendlist);
				that.props.listmore(newList);	
			})

		}
}

export default Jobmore;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	