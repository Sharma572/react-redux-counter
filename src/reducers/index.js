/* Step 2 : Combine reducer - Suppose we have diffrent-diffrent task to perform in every component then this file will work to combine the all reducers .
In our task we have to perfrom only one task from reducer 
   
*/
import changeNum from './IncDec'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeNum // , addNum -   If we have another reducer than simply add here.  
})

export default rootReducer;  // this var is used in store