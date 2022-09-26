/* Step 3 : Create Store - Import merge reducer in our case we export rootReducer because we 
  named this as a export in our combineReducer file.
*/

import { legacy_createStore as createStore} from 'redux'
import rootReducer from "../reducers";
const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;