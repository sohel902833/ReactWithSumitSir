import React from 'react'
export default class Todo extends React.Component{
    state={
        todo:'',
        warning:null

    }

    handleInput=(e)=>{
        const inputValue=e.target.value;
        const warning=inputValue.includes('.js')
                        ?"You need JavScript skill to complete the task.Do you have it"
                        :null;
        this.setState({
            todo:inputValue,
            warning
        })
    }


    render(){
        const {todo,warning}=this.state;
        return(
            <div>
                <p>{todo}</p>
                <textarea value={todo} onChange={this.handleInput}/>
                <hr/>
                <h1>{warning}</h1>
            </div>
        )
    }
}