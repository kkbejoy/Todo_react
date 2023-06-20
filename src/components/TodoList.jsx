import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggleTodo,deleteTodo}){
    return(
        <ul className="list">
        {todos.length==0 && "No ToDos"}
         {todos.map(todo => {
           return <TodoItem completed={todo.completed} id={todo.id}
            title={todo.title } key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
         })}
 
     
       </ul>
    )
}