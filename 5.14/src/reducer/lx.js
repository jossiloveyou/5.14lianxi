import _ from 'loadsh'

const data={
  name:'lx',age:18,data:[],count:0,obj:{name:"666"}
}

export default function (state = data, action) {
  switch(action.type){
      case 'ADD':
        return {...state, data:action.payload.result.list, count:action.payload.result.count}
      case 'Lx-obj':
        state.obj.name = action.payload
        return { ...state, obj:_.cloneDeep(state.obj) }
      case 'FORM_DATA':
        return {...state, data:action.payload} 
      default:
        return state 
  }
  
}