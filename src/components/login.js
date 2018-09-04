import React, { Component } from 'react'
import '../css/login.css'
import { Input, Button, Form } from 'antd'
import axios from 'axios'
import { browserHistory } from "react-router"

const FormItem = Form.Item
class Login extends Component{
	state = {

	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.verification()
	}
	verification = () => {
		this.props.form.validateFields((err,fieldsValue)=>{
			if (!err) {
				axios.create({
					timeout: 3000,
					'header':{
						'Accept':'application/json',
					},
					params:{
						sentence:fieldsValue['sentence']
					}
				}).get('http://holesword.com/php/login.php').then(res => {
					if (res.data.res_code === 0) {
						sessionStorage.setItem('she','zss')
						browserHistory.push('/')
					}
				})
			}
		})
	}
	render(){
		const { getFieldDecorator } = this.props.form
		return(
			<div className='login_page'>
				<Form onSubmit={this.handleSubmit}>
					<FormItem >
						{getFieldDecorator('sentence',{
							rules:[{required:true,message:"请输入你最喜欢的一句话!"}]
						})(
							<Input placeholder='请输入你最喜欢的一句话' autoComplete="off"/>
						)}
					</FormItem>
					<Button htmlType='submit' className='verification_btn'>验证</Button>
				</Form>
			</div>
		)
	}
}

const LoginPage = Form.create()(Login)
export default LoginPage