import React from "react";
import ReactApexChart from "react-apexcharts"
import * as dayjs from 'dayjs';
import { Button } from "antd";
import { Select } from 'antd';
const { Option } = Select;


let jdata = require('./XAGUSD60.json');

export default class Line extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            //name: "Volume",
            data:[]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            labels: {
                formatter: function(val) {
                  return dayjs(val).format('MMM DD HH:mm')
                }
              }
          },
          
        },
      
      
      };
    }
    vo=()=>{
        var temp=[];
        this.setState({
          series:[{data:[]}]
        })
        for(let i = 0 ; i < jdata.length ;i++){
          let tempdate = jdata[i].date;
          tempdate = tempdate.split(".");
          let temphr = jdata[i].hr;
          temphr = temphr.split(".");
          let date = new Date();
          date.setHours(parseInt(temphr[0].split(":")[0]));
          date.setMinutes(parseInt(temphr[0].split(":")[1]));
          date.setFullYear(parseInt(tempdate[0]));
          date.setMonth(parseInt(tempdate[1]-1));
          date.setDate(parseInt(tempdate[2])); 
          let tempall = {x:date,y:[jdata[i].volume]};
          temp.push(tempall);
        }
        this.setState({
          series:[{data:temp}]
        })
    }

    high=()=>{
        var temp=[];
        this.setState({
          series:[{data:[]}]
        })
        for(let i = 0 ; i < jdata.length ;i++){
          let tempdate = jdata[i].date;
          tempdate = tempdate.split(".");
          let temphr = jdata[i].hr;
          temphr = temphr.split(".");
          let date = new Date();
          date.setHours(parseInt(temphr[0].split(":")[0]));
          date.setMinutes(parseInt(temphr[0].split(":")[1]));
          date.setFullYear(parseInt(tempdate[0]));
          date.setMonth(parseInt(tempdate[1]-1));
          date.setDate(parseInt(tempdate[2])); 
          let tempall = {x:date,y:[jdata[i].high]};
          temp.push(tempall);
        }
        this.setState({
          series:[{data:temp}]
        })
    }
    low=()=>{
        var temp=[];
        this.setState({
          series:[{data:[]}]
        })
        for(let i = 0 ; i < jdata.length ;i++){
          let tempdate = jdata[i].date;
          tempdate = tempdate.split(".");
          let temphr = jdata[i].hr;
          temphr = temphr.split(".");
          let date = new Date();
          date.setHours(parseInt(temphr[0].split(":")[0]));
          date.setMinutes(parseInt(temphr[0].split(":")[1]));
          date.setFullYear(parseInt(tempdate[0]));
          date.setMonth(parseInt(tempdate[1]-1));
          date.setDate(parseInt(tempdate[2])); 
          let tempall = {x:date,y:[jdata[i].low]};
          temp.push(tempall);
        }
        this.setState({
          series:[{data:temp}]
        })
    }
    open=()=>{
        var temp=[];
        this.setState({
          series:[{data:[]}]
        })
        for(let i = 0 ; i < jdata.length ;i++){
          let tempdate = jdata[i].date;
          tempdate = tempdate.split(".");
          let temphr = jdata[i].hr;
          temphr = temphr.split(".");
          let date = new Date();
          date.setHours(parseInt(temphr[0].split(":")[0]));
          date.setMinutes(parseInt(temphr[0].split(":")[1]));
          date.setFullYear(parseInt(tempdate[0]));
          date.setMonth(parseInt(tempdate[1]-1));
          date.setDate(parseInt(tempdate[2])); 
          let tempall = {x:date,y:[jdata[i].open]};
          temp.push(tempall);
        }
        this.setState({
          series:[{data:temp}]
        })
    }
    close=()=>{
        var temp=[];
        this.setState({
          series:[{data:[]}]
        })
        for(let i = 0 ; i < jdata.length ;i++){
          let tempdate = jdata[i].date;
          tempdate = tempdate.split(".");
          let temphr = jdata[i].hr;
          temphr = temphr.split(".");
          let date = new Date();
          date.setHours(parseInt(temphr[0].split(":")[0]));
          date.setMinutes(parseInt(temphr[0].split(":")[1]));
          date.setFullYear(parseInt(tempdate[0]));
          date.setMonth(parseInt(tempdate[1]-1));
          date.setDate(parseInt(tempdate[2])); 
          let tempall = {x:date,y:[jdata[i].close]};
          temp.push(tempall);
        }
        this.setState({
          series:[{data:temp}]
        })
    }

  

    render() {
      return (
        

        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        
        
        <Select defaultValue= "low" style={{ width: 120 }} onChange={this.onClick}>
                 <Option value={this.low}>low</Option>
                 
                 <Option value={this.open}>open</Option>
            <Option value={this.high}>high</Option>
            <Option value={this.close}>close</Option>
            <Option value={this.volume}>volume</Option>
           </Select>
        </div>

      );
    }
  }