import { useReducer } from "react"
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
const initialState={
    counter:0,
    counter2:0
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,counter:state.counter+action.value};
            break;
        case 'decrement':
            return {...state,counter:state.counter-action.value};
            break;
        case 'increment2':
            return {...state,counter2:state.counter2+action.value};
            break;
        case 'decrement2':
            return {...state,counter2:state.counter2-action.value};
            break;
        default:
            return state;        
    }
}
export default function Counter(){
   const [count,dispatch]= useReducer(reducer,initialState);

 

    return(
        <>
          <div>
            <div>Count -{count.counter}</div>
            <button type="button" onClick={()=>dispatch({type:"increment",value:1})}>Increment By 1</button>
            <button type="button" onClick={()=>dispatch({type:"decrement",value:1})}>Decrement By 1</button>
          </div>
          <div>
            <div>Count -{count.counter2}</div>
            <button type="button" onClick={()=>dispatch({type:"increment2",value:1})}>Increment By 1</button>
            <button type="button" onClick={()=>dispatch({type:"decrement2",value:1})}>Decrement By 1</button>
          </div>
         </>
    )
}