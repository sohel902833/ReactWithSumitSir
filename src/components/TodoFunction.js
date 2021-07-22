import { useState } from "react";

export default function TodoFunction() {
  
    const [todo,setTodo]=useState('');
    const [warning,setWarning]=useState(null);

    const handleInput=(e)=>{
        const inputValue=e.target.value;
        const warning=inputValue.includes('.js')
                        ?"You need JavScript skill to complete the task.Do you have it"
                        :null;
       setTodo(inputValue)
       setWarning(warning)
    }




  return (
    <div>
      <p>{todo}</p>
      <textarea value={todo} onChange={handleInput} />
      <hr />
      <h1>{warning?warning:"Good Choice."}</h1>
    </div>
  );
}
