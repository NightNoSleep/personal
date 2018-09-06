import React, { Component } from 'react'
import { Layout, Avatar, Upload, Icon, Modal } from 'antd'
import '../css/index.css'
import He from '../img/he.jpg'
import She from '../img/she.jpg'

export default class Index extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	

	render(){
		
		return(
			<div className='page_index'>
				<div className='index_page'>
					<div className='touxiang_left'></div>
					<div className='touxiang_right'></div>
				</div>
			</div>
		)
	}
}