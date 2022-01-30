import { combineReducers } from 'redux'

import ContractReducer from "./contracts/contractReducer"


export default combineReducers({
    contracts:ContractReducer
  })