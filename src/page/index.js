import React, { Component } from 'react'
import { Layout, Avatar, Upload, Icon, Modal } from 'antd'
import '../css/index.css'
import He from '../img/he.jpg'
import She from '../img/she.jpg'

export default class Index extends Component{
	constructor(props){
		super(props)
		this.state = {
			start:new Date('2018-08-17T00:00:00'),
			days:0,
			hours:0,
			minutes:0,
			seconds:0,
		}
	}
	componentDidMount(){
		this.timer()
	}
	timer = () => {
		let start = this.state.start.getTime()/1000
		let now = Date.parse(new Date())/1000
		let cha = now - start
		let second = cha%60
		let minute = Math.floor(cha/60)%60
		let hour = Math.floor(cha/3600)%24
		let day = Math.floor(cha/3600/24)
		this.setState({
			days:day,
			minutes:minute,
			hours:hour,
			seconds:second
		})
		setInterval(()=>{
			if (second!== 59) {
				second += 1
			}else{
				second = 0
				if (minute !== 59) {
					minute += 1
				}else{
					minute = 0
					if (hour !== 23) {
						hour += 1
					}else{
						hour = 0
						day += 1
					}
				}
			}
			this.setState({
				days:day,
				minutes:minute,
				hours:hour,
				seconds:second
			})
		},1000)
	}
	render(){
		const { days, hours, minutes, seconds } = this.state
		return(
			<div className='page_index'>
				<div className='index_page'>
					<div className='touxiang'>
						<div className='touxiang_left'></div>
						<div className='touxiang_right'></div>
						<div className='touxiang_love'></div>
					</div>
					<div className='together_time'>
						<div className='days'> <span className='time_show'>{days} </span> <span>Days</span></div>
						<div className='hours'> <span className='time_show'>{hours} </span> <span>Hours</span></div>
						<div className='minutes'> <span className='time_show'>{minutes} </span> <span>Minutes</span></div>
						<div className='seconds'> <span className='time_show'>{seconds} </span> <span>Seconds</span></div>
					</div>
				</div>
			</div>
		)
	}
}