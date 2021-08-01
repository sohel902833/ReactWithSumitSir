import { useReducer } from "react"
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
            break;
        case 'decrement':
            return state-1;
            break;
        default:
            return state;        
    }
}
export default function Counter3(){
   const [count,dispatch]= useReducer(reducer,9);
   const [count2,dispatch2]= useReducer(reducer,5);

 

    return(
        <>
        <div>
            <div>Count -{count}</div>
            <button type="button" onClick={()=>dispatch("increment")}>Increment</button>
            <button type="button" onClick={()=>dispatch("decrement")}>Decrement</button>
        </div>
        <div>
            <div>Count2 -{count2}</div>
            <button type="button" onClick={()=>dispatch2("increment")}>Increment</button>
            <button type="button" onClick={()=>dispatch2("decrement")}>Decrement</button>
        </div>
        </>
    )
}