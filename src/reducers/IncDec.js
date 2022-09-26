// Step 2: How to do? - This code written for how we can perform task.
const initalState = 0;
const changeNum = (state = initalState,action) =>{
switch(action.type){
    case 'Increment' : return state + 1;
    case 'Decrement' : return state - 1;
    default: return state;
}
}

export default changeNum; 