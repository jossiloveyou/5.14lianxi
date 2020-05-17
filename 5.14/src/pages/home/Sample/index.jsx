import React from 'react'
import Axios from 'axios'
import request from '@/utils/request'

export default class Sample extends React.Component{
  componentDidMount () {
    let obj={page:22}
    request.post('https://blogs.zdldove.top/Home/Apis/listWithPage',{count:12}).then(
      res => {
        console.log(res)
      }
    )
  }
  render () {
    return (
      <div className="sample">

      </div>
    )
  }
}