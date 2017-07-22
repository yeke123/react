import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Citylist extends React.Component{
	render(){
		var sendnameStr=this.props.sendnameStr;//父组件传过来的每个城市分类列表的名称，如热门城市，ABCDEF
		var getlist=this.props.sendlist;//父组件传过来的整个城市列表的数据cities
		var btnchange=this.props.btnchangeto;//向父组件传递城市名称
		var result = getlist.map(function(elem,index){//遍历整个城市列表的数据cities
			return elem.cityList.map(function(e,ind){//遍历整个城市列表数据中的cityList,获取到nameStr,即每个城市分类列表的名称
				if(elem.nameStr==sendnameStr){//当遍历到的nameStr等于父组件传过来的城市分类列表名称时，即取得那一个分类的数据，如只获得分类名为“热门城市”的那一类数据
					return <Cityname cits3={e}  btnchangeto2={btnchange}/>;
				}
			})
		})
		return(
			<div className="city_box">
			<p className="cities-header">{sendnameStr}</p>
				{result}
			</div>
		)
	}
}
	class Cityname extends React.Component{
		render(){
			var cits3 = this.props.cits3;
			
			return(
				<li className="citynames" onTouchStart={(e)=>{this.btncity(e)}} onTouchEnd={(e)=>{this.btncity2(e)}} >
					{cits3}
				</li>
			)
		}
		btncity(e){
				e.target.className="citynames2";
		}
		btncity2(e){
			var namechange = e.target.innerHTML;		
			this.props.btnchangeto2(namechange);
			e.target.className="citynames";
		}
	}
export default Citylist;
