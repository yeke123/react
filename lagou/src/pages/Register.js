import React, { Component } from 'react';
import { Link,IndexLink,browserHistory } from 'react-router';
import './Register.css';

class Register extends Component{
	constructor(){
		super();
		this.state={
			phone:"",
			eyeclass:'eye1',
			eyeType:"password",
			tips1Class:"input_tips1 hide",
			tips2Class:"input_tips2 hide"	
		}
	}
	render(){
		return (
			<div className="registerBox">
				<div className="wrap">
					<form action="http://localhost:3000/#/Login?_k=8clvns">
						<div className="wrapTop">
							<input type="text" className="phone"  value={this.state.phone} onChange={this.handlePhoneChange} placeholder="手机号"/>
							<span data-valid-message="" className={this.state.tips1Class}>请输入有效帐号</span>
							<div>
								<input type="text" className="code"  value={this.state.code} placeholder="请证明你不是机器人"/>
								<img class="vcode" src="https://passport.lagou.com/vcode/create?from=register&refresh=1500347800472"/>
								<a>看不清楚,<em>换一张</em></a>
							</div>
							<div className="msg">
								<input type="text" className="phCode vcode"  value={this.state.phCode} placeholder="短信验证码"/>
								<input type="button" id="get"  value="获取" />
							</div>
						</div>
						<div className="passwordBox">
							<input type={this.state.eyeType} className="pwd" placeholder="设置6-16位密码" maxLength="16" minLength="6" onChange={this.handlePwdChange}/>
							<span data-valid-message="" className={this.state.tips2Class}>6-16位密码</span>
							<i className={this.state.eyeclass} onClick={this.eyeClick}></i>
						</div>
						<div>
							<a className="submit">注册</a>
						</div>
						<div className="qus">已有账号?</div>
						<Link to="/Login" className="login">登录</Link>
						<div className="qus">点击注册,即代表您同意<a href="#">《拉勾用户协议》</a></div>
					</form>
				</div>
			</div>
		)
	}
	
	handlePhoneChange=(e)=>{
		this.setState({
 			phone:e.target.value
			})
		var phone = e.target.value;
		var re1 = /^1\d{10}$/;//手机号码，1开头的11位数字
		if (re1.test(phone) || phone=="") {
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
	
	handlePwdChange=(e)=>{//密码由6-16字母和数字组成，不能是纯数字或纯英文
		this.setState({
 			passWord:e.target.value
		})
		var pw = e.target.value;
		var re3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
		if (re3.test(pw) || pw==""){
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
			eyeclass:"openEye1",
			eyeType:"text"
		})
		console.log(this.state.eyeclass);
		setTimeout(()=>{
           this.setState({
          	   eyeclass:"eye1",
          	   eyeType:"password"
          })
       },1000)
	}
	
	
}

export default Register