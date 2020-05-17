import React from 'react'
import request from '@/utils/request'
import qs from 'qs'
import { connect } from 'react-redux'
import { getName } from '@/actions/lx'


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
    let obj={page:22}
    request.post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify( {page:5,limit:5})).then(
      res => {
        console.log(res)
      }
    )
  }
  render () {
    let { data, count } = this.props
    return (
      <div className="sample">
          
      </div>
    )
  }
}