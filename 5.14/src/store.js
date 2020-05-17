import { createStore, combineReducers } from 'redux'
import lx from '@/reducer/lx'


const store = createStore( 
    combineReducers({lx}),
)


export { store }


