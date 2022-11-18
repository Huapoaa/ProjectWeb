import React from 'react';
import Chart from './Chart';
import  getData  from "./utils";
import 'antd/dist/antd.css';
import MakeTimeFrame from './TimeFrame'
import { Select } from 'antd';
const { Option } = Select;
let arr = undefined;
export default class ChartComponent extends React.Component {
	constructor(props){
		super(props)
		this.vvv = ['open','high','low','close','volum']
		this.time = {'open':1,'hight':3,'low':5,'close':24,'volum':72}
		this.state = {value:'1h',data : new MakeTimeFrame(getData)}
		arr = this.state.data.data
	}
	onClick=(value)=>{
		if(value === '1h'){
			arr = this.state.data.data;
		}else{
			arr =  this.state.data.changetoHour(this.time[value])
		}
		this.setState({value});
	}
	// shouldComponentUpdate(r,nextState){
	// 	return true;
	// }
	render() {
		if (arr === undefined) {
			return <div>Loading...</div>
		}
		console.log('render')
		return (
			<div>
			<Select defaultValue= "open" style={{ width: 120 }} onChange={this.onClick}>
      			<Option value="">open</Option>
      			<Option value="hight">high</Option>
      			<Option value="low">low</Option>
				<Option value="close">close</Option>
				<Option value="volum">volum</Option>
			</Select>
			<Chart data={arr} value = {this.state.value}/>
			</div>
		)
	}
}
