import React from 'react'

export default class Fouce extends React.Component{
  render () {
    let { arr } = this.props
    return (
      <div className="fouce">
        {
          arr.length>0?arr.map((v,i) => {
            return <div className="dev">
                <p>{v.title}</p>
                <p>{v.tags}</p>
                <p>{v.thumb}</p>
            </div>
          }):null
        }
      </div>  
    ) 
  }
} 