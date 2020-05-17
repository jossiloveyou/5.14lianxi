import React from 'react'
import request from '@/utils/request'
import qs from 'qs'
import { connect } from 'react-redux'
import { getName } from '@/actions/lx'
import { Pagination } from 'antd'
import Fouce from './Fouce'

export default @connect(
  state => {
    return {
      data:state.lx.data,
      count:state.lx.count
    }
  },{
    getName
  }
)

class Sample extends React.Component{
  componentDidMount () {
    this.onChange(1)
  }
  onChange= page =>{
    request.post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify( {page,limit:6})).then(
      res => {
        if(res.data.code === 200){
          this.props.getName(res.data)
        }
      }
    )
  }
  render () {
    let { data, count } = this.props
    console.log(data)
    return (
      <div className="sample">
        <Fouce arr={data}/>
        <Pagination
          defaultCurrent={1}
          pageSize={6}
          total={count*1}
          onChange={this.onChange}
        />
      </div>
    )
  }
}