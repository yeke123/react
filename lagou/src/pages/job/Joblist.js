import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import '../Job.css';


class Joblist extends React.Component{
   	  render(){
   	  	 let {job} = this.props
   	  	 return (
		         <li className="activeable list-item">
		         	<a href="http://localhost:3000/#/details?_k=pgsmbz">
		            <img src={'//www.lgstatic.com/'+job.companyLogo} className="item-logo" />
		            <div className="item-desc">
		                <h2 className="item-title">{job.companyFullName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">
		                        {job.positionName}
		                    </span>
		                    <span className="item-salary">{job.salary}</span>
		                </p>
		                <p className="item-time">{job.createTime}</p>
		            </div>
		           </a>
		        </li>

   	  	 	)
   	  }
   }


export default Joblist;