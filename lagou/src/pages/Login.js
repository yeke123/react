import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
	constructor(){
		super();
		this.state={
			userName:'',
			passWord:'',
			eyeclass:'eye',
			eyeType:"password",
			tips1Class:"input_tips1 hide",
			tips2Class:"input_tips2 hide"
			
		}
		this.goLogin = this.goLogin.bind(this);
	}
	render(){
		return(
			<div id="box">
				<div className="container">
					<form action="/">
						<div>
							<input className="userName" placeholder="已验证手机/邮箱" value={this.state.userName} onChange={this.handleUserNameChange}/>
							<span data-valid-message="" className={this.state.tips1Class}>请输入有效帐号</span>
							
						</div>
						<div>
							<input type={this.state.eyeType} className="passWord" placeholder="密码" value={this.state.passWord} onChange={this.handlePassWordChange}/>
							<span data-valid-message="" className={this.state.tips2Class}>6-16位密码</span>
							<i className={this.state.eyeclass} onClick={this.eyeClick}></i>
						</div>
						<div>
						<a className="btn" href="http://localhost:3000/#/user?_k=i7xj95" onClick={this.goLogin}>登录</a>
						</div>
						<p>还没账号?</p>
						<div>
						<a href="http://localhost:3000/#/register?_k=9g4a6t" className="btn_re" >注册</a>
						</div>
					</form>
				</div>
			</div>
		)
	}
	goLogin=(e)=>{
//		e.preventDefault();
//		console.log(this.state.userName);
//		console.log(this.state.passWord);
		localStorage["username"]=this.state.userName;
		localStorage["login_state"]="true";
//		localStorage.username(this.state.userName);
//		alert(localStorage.username);
//		alert(localStorage.login_state);
		
	}

	handleUserNameChange=(e)=>{
		this.setState({
 			userName:e.target.value
			})
		var username = e.target.value;
		var re1 = /^1\d{10}$/;//手机号码，1开头的11位数字
		var re2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;//邮箱，验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
													//第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
												    //第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
												    //而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
		//console.log(re1.test(username));
		if (re1.test(username) || re2.test(username) || username=="") {
		    this.setState({
 				tips1Class:"input_tips1 hide"
			})
		}
		else {
		    this.setState({
 				tips1Class:"input_tips1"
			})
		}
	}
	
	handlePassWordChange=(e)=>{//密码由6-16字母和数字组成，不能是纯数字或纯英文
		this.setState({
 			passWord:e.target.value
		})
		var pw = e.target.value;
		var re3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
		if (re3.test(pw) || pw=="") {
		    this.setState({
 				tips2Class:"input_tips2 hide"
			})
		}
		else {
		    this.setState({
 				tips2Class:"input_tips2"
			})
		}
	}
	
	eyeClick=(e)=>{
		this.setState({
			eyeclass:"openEye",
			eyeType:"text"
		})
		console.log(this.state.eyeclass);
		setTimeout(()=>{
           this.setState({
          	   eyeclass:"eye",
          	   eyeType:"password"
          })
       },1000)
	}
	
}

export default Login
