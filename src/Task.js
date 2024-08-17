export const Task =(props)=>{
    return (<div className="task" style={{backgroundColor:props.completed?'green':'white' }}>
          <h3>{props.taskName}</h3>
          <button onClick={()=> props.completeTask(props.id)}>completed</button>
          <button onClick={()=>props.deleteTask(props.id)}>x</button>
        
        </div>
    )
      }
    