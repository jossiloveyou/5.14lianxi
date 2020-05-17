import React from 'react'
import axios from 'axios'

import { Button, Table } from 'antd'

export default class Tables extends React.Component{
  state={
    data:'',
    columes: [
      {
        title:'User',
        dataIndex:'user',
      },
      {
        title:'First name',
        dataIndex:'name',
      },
      {
        title:'Age',
        dataIndex:'age',
      },
      {
        title:'Price',
        dataIndex:'msg',
      },
      {
        title:'DeadLine',
        dataIndex:'data',
      },
      {
        title:' ',
        render: ( text, record ) => {
          return (
            <span>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </span>
          )
        }
      },
    ]
  }
  componentDidMount () {
    axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser').then(
      res => {
        console.log(res.data.users)
        this.setState({
          data:res.data.users
        })
      }
    )
  }
  render () {
    let { data, columes } = this.state
    return (
      <div className="table">
          <p>Striped Table</p>
          <p>Add class .table-striped 
            <Button type="primary">Add User</Button>
          </p>
          {
            typeof(data)=="object"?
            <Table
              rowKey={v=>v.id} 
              dataSource={data} 
              
              columns={columes}
              pagination={{pageSize:5}}
            />:null
          }
          
      </div>
    )
  }
}